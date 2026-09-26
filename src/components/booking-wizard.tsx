import { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Briefcase,
  Package,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, Input, Label, Select, Textarea } from "@/components/ui/field";
import { StripeCheckout } from "@/components/stripe-checkout";
import {
  emptyDraft,
  isPaidService,
  saveBooking,
  type BookingDraft,
  type Channel,
  type ContinentId,
  type ServiceId,
} from "@/lib/booking";
import { useCopy, useLang } from "@/lib/i18n";
import { cn, formatEUR } from "@/lib/utils";
import { CONSULTATION_EUR } from "@/lib/booking";

type Step = "service" | "info" | "date" | "pay";

function todayISO() {
  const d = new Date();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function BookingWizard({ initialService }: { initialService?: ServiceId }) {
  const t = useCopy();
  const w = t.wizard;
  const lang = useLang((s) => s.lang);
  const navigate = useNavigate();
  const [service, setService] = useState<ServiceId | undefined>(initialService);
  const [draft, setDraft] = useState<BookingDraft>(emptyDraft(initialService ?? "visa"));
  const [step, setStep] = useState<Step>(initialService ? "info" : "service");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const paid = service ? isPaidService(service) : false;

  const steps = useMemo(() => {
    const list: { id: Step; label: string }[] = [
      { id: "info", label: w.stepInfo },
      { id: "date", label: w.stepDate },
    ];
    if (paid) list.push({ id: "pay", label: w.stepPay });
    return list;
  }, [paid, w.stepDate, w.stepInfo, w.stepPay]);

  function patch(p: Partial<BookingDraft>) {
    setDraft((d) => ({ ...d, ...p }));
  }

  function requireFields(keys: (keyof BookingDraft)[]) {
    const next: Record<string, string> = {};
    for (const k of keys) {
      const v = String(draft[k] ?? "").trim();
      if (!v) next[k] = w.required;
    }
    if (keys.includes("email") && draft.email && !isEmail(draft.email)) {
      next.email = w.emailInvalid;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function chooseService(id: ServiceId) {
    setService(id);
    setDraft(emptyDraft(id));
    setStep("info");
    setErrors({});
  }

  function goInfoNext() {
    const keys: (keyof BookingDraft)[] = ["firstName", "lastName", "email", "phone"];
    if (service === "visa") keys.push("nationality", "continent", "country", "visaType");
    if (service === "billetterie") keys.push("tripType", "origin", "country", "continent", "departureDate", "passengers");
    if (service === "colis") keys.push("parcelDescription", "continent", "country");
    if (goInfoValid(keys)) setStep("date");
  }

  function goInfoValid(keys: (keyof BookingDraft)[]) {
    return requireFields(keys);
  }

  function goDateNext() {
    const needsDate =
      service === "visa" ||
      service === "colis" ||
      (service === "billetterie" && draft.channel === "agence");
    const keys: (keyof BookingDraft)[] = needsDate ? ["preferredDate", "slot"] : [];
    if (service === "visa") keys.push("mode");
    if (!requireFields(keys)) return;
    if (paid) setStep("pay");
    else finish();
  }

  function finish() {
    if (!service) return;
    const saved = saveBooking({ ...draft, service });
    void navigate({ to: "/confirmation", search: { ref: saved.id } });
  }

  const title =
    service === "visa" ? w.titlePaid : service === "billetterie" ? w.titleTickets : w.titleCargo;

  return (
    <div className="mx-auto w-full max-w-xl">
      {!service || step === "service" ? (
        <ServicePicker onPick={chooseService} />
      ) : (
        <>
          <p className="text-xs font-medium uppercase tracking-widest text-gold">
            {paid ? w.paidBanner : w.freeBanner}
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">{title}</h1>

          <ol className="mt-8 flex gap-2">
            {steps.map((s, i) => {
              const active = s.id === step;
              const done = steps.findIndex((x) => x.id === step) > i;
              return (
                <li key={s.id} className="flex-1">
                  <div
                    className={cn(
                      "h-1 rounded-full",
                      active || done ? "bg-fg" : "bg-line",
                    )}
                  />
                  <p className={cn("mt-2 text-xs", active ? "text-fg" : "text-subtle")}>
                    {s.label}
                  </p>
                </li>
              );
            })}
          </ol>

          {step === "info" ? (
            <div className="mt-8 space-y-4">
              {service === "billetterie" ? (
                <div className="grid grid-cols-2 gap-2">
                  {(["en-ligne", "agence"] as Channel[]).map((ch) => (
                    <button
                      key={ch}
                      type="button"
                      onClick={() => patch({ channel: ch })}
                      className={cn(
                        "min-h-11 rounded-md px-3 text-sm font-medium",
                        draft.channel === ch
                          ? "bg-fg text-surface"
                          : "bg-surface text-fg shadow-[inset_0_0_0_1px_var(--color-line)]",
                      )}
                    >
                      {ch === "en-ligne" ? w.channelOnline : w.channelAgency}
                    </button>
                  ))}
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <Label htmlFor="fn">{w.firstName}</Label>
                  <Input id="fn" value={draft.firstName} onChange={(e) => patch({ firstName: e.target.value })} />
                  <FieldError>{errors.firstName}</FieldError>
                </Field>
                <Field>
                  <Label htmlFor="ln">{w.lastName}</Label>
                  <Input id="ln" value={draft.lastName} onChange={(e) => patch({ lastName: e.target.value })} />
                  <FieldError>{errors.lastName}</FieldError>
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <Label htmlFor="em">{w.email}</Label>
                  <Input id="em" type="email" value={draft.email} onChange={(e) => patch({ email: e.target.value })} />
                  <FieldError>{errors.email}</FieldError>
                </Field>
                <Field>
                  <Label htmlFor="ph">{w.phone}</Label>
                  <Input id="ph" value={draft.phone} onChange={(e) => patch({ phone: e.target.value })} />
                  <FieldError>{errors.phone}</FieldError>
                </Field>
              </div>

              {service === "visa" ? (
                <>
                  <Field>
                    <Label htmlFor="nat">{w.nationality}</Label>
                    <Input id="nat" value={draft.nationality} onChange={(e) => patch({ nationality: e.target.value })} />
                    <FieldError>{errors.nationality}</FieldError>
                  </Field>
                  <ContinentFields draft={draft} patch={patch} errors={errors} />
                  <Field>
                    <Label htmlFor="vt">{w.visaType}</Label>
                    <Select id="vt" value={draft.visaType} onChange={(e) => patch({ visaType: e.target.value as BookingDraft["visaType"] })}>
                      <option value="" />
                      <option value="tourisme">{w.visaTourism}</option>
                      <option value="affaires">{w.visaBusiness}</option>
                      <option value="etudes">{w.visaStudy}</option>
                      <option value="famille">{w.visaFamily}</option>
                      <option value="transit">{w.visaTransit}</option>
                    </Select>
                    <FieldError>{errors.visaType}</FieldError>
                  </Field>
                </>
              ) : null}

              {service === "billetterie" ? (
                <>
                  <Field>
                    <Label htmlFor="tt">{w.tripType}</Label>
                    <Select id="tt" value={draft.tripType} onChange={(e) => patch({ tripType: e.target.value as BookingDraft["tripType"] })}>
                      <option value="" />
                      <option value="aller-simple">{w.tripOne}</option>
                      <option value="aller-retour">{w.tripReturn}</option>
                      <option value="multi">{w.tripMulti}</option>
                    </Select>
                    <FieldError>{errors.tripType}</FieldError>
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <Label htmlFor="or">{w.origin}</Label>
                      <Input id="or" value={draft.origin} onChange={(e) => patch({ origin: e.target.value })} />
                      <FieldError>{errors.origin}</FieldError>
                    </Field>
                    <Field>
                      <Label htmlFor="ps">{w.passengers}</Label>
                      <Input id="ps" inputMode="numeric" value={draft.passengers} onChange={(e) => patch({ passengers: e.target.value })} />
                    </Field>
                  </div>
                  <ContinentFields draft={draft} patch={patch} errors={errors} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <Label htmlFor="dep">{w.departure}</Label>
                      <Input id="dep" type="date" min={todayISO()} value={draft.departureDate} onChange={(e) => patch({ departureDate: e.target.value })} />
                      <FieldError>{errors.departureDate}</FieldError>
                    </Field>
                    {draft.tripType === "aller-retour" ? (
                      <Field>
                        <Label htmlFor="ret">{w.return}</Label>
                        <Input id="ret" type="date" min={draft.departureDate || todayISO()} value={draft.returnDate} onChange={(e) => patch({ returnDate: e.target.value })} />
                      </Field>
                    ) : null}
                  </div>
                </>
              ) : null}

              {service === "colis" ? (
                <>
                  <ContinentFields draft={draft} patch={patch} errors={errors} />
                  <Field>
                    <Label htmlFor="par">{w.parcel}</Label>
                    <Textarea id="par" value={draft.parcelDescription} onChange={(e) => patch({ parcelDescription: e.target.value })} />
                    <FieldError>{errors.parcelDescription}</FieldError>
                  </Field>
                </>
              ) : null}

              <Field>
                <Label htmlFor="notes">{w.notes}</Label>
                <Textarea id="notes" placeholder={w.notesPh} value={draft.notes} onChange={(e) => patch({ notes: e.target.value })} />
              </Field>

              <div className="flex gap-3 pt-2">
                {!initialService ? (
                  <Button variant="secondary" onClick={() => setStep("service")}>
                    {w.back}
                  </Button>
                ) : null}
                <Button className="flex-1" onClick={goInfoNext}>
                  {w.next}
                </Button>
              </div>
            </div>
          ) : null}

          {step === "date" ? (
            <div className="mt-8 space-y-4">
              {service === "billetterie" && draft.channel === "en-ligne" ? (
                <p className="rounded-lg bg-surface px-4 py-4 text-sm leading-relaxed text-muted shadow-[var(--shadow-border)]">
                  {lang === "fr"
                    ? "Demande en ligne : aucun rendez-vous n'est nécessaire. Envoyez, un conseiller prépare le devis."
                    : "Online request: no appointment needed. Send it, a counsellor prepares the quote."}
                </p>
              ) : (
                <>
                  <Field>
                    <Label htmlFor="dt">{w.date}</Label>
                    <Input
                      id="dt"
                      type="date"
                      min={todayISO()}
                      value={draft.preferredDate}
                      onChange={(e) => patch({ preferredDate: e.target.value })}
                    />
                    <FieldError>{errors.preferredDate}</FieldError>
                  </Field>
                  <fieldset>
                    <legend className="mb-1.5 text-sm font-medium">{w.slot}</legend>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {(["matin", "apres-midi"] as const).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => patch({ slot: s })}
                          className={cn(
                            "min-h-11 rounded-md px-3 text-sm",
                            draft.slot === s
                              ? "bg-fg text-surface"
                              : "bg-surface text-fg shadow-[inset_0_0_0_1px_var(--color-line)]",
                          )}
                        >
                          {s === "matin" ? w.slotMorning : w.slotAfternoon}
                        </button>
                      ))}
                    </div>
                    <FieldError>{errors.slot}</FieldError>
                  </fieldset>
                  {service === "visa" ? (
                    <Field>
                      <Label htmlFor="mode">{w.mode}</Label>
                      <Select
                        id="mode"
                        value={draft.mode}
                        onChange={(e) => patch({ mode: e.target.value as BookingDraft["mode"] })}
                      >
                        <option value="bureau">{w.modeOffice}</option>
                        <option value="visio">{w.modeVisio}</option>
                        <option value="whatsapp">{w.modeWa}</option>
                        <option value="telephone">{w.modePhone}</option>
                      </Select>
                    </Field>
                  ) : null}
                </>
              )}

              {paid ? (
                <div className="rounded-lg bg-bg px-4 py-4">
                  <p className="text-sm font-medium">{w.reviewTitle}</p>
                  <p className="mt-1 text-sm text-muted">
                    {draft.firstName} {draft.lastName} · {draft.country || draft.continent} · {formatEUR(CONSULTATION_EUR, lang)}
                  </p>
                </div>
              ) : null}

              <div className="flex gap-3 pt-2">
                <Button variant="secondary" onClick={() => setStep("info")}>
                  {w.back}
                </Button>
                <Button className="flex-1" onClick={goDateNext}>
                  {paid ? w.payCta : w.submitFree}
                </Button>
              </div>
            </div>
          ) : null}

          {step === "pay" ? (
            <div className="mt-8 space-y-4">
              <StripeCheckout onPaid={finish} />
              <Button variant="ghost" className="w-full" onClick={() => setStep("date")}>
                {w.back}
              </Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

function ContinentFields({
  draft,
  patch,
  errors,
}: {
  draft: BookingDraft;
  patch: (p: Partial<BookingDraft>) => void;
  errors: Record<string, string>;
}) {
  const t = useCopy();
  const w = t.wizard;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Field>
        <Label htmlFor="cont">{w.continent}</Label>
        <Select
          id="cont"
          value={draft.continent}
          onChange={(e) => patch({ continent: e.target.value as ContinentId | "" })}
        >
          <option value="">{w.selectContinent}</option>
          <option value="europe">{t.europe}</option>
          <option value="amerique">{t.americas}</option>
          <option value="asie">{t.asia}</option>
          <option value="afrique">{t.africa}</option>
        </Select>
        <FieldError>{errors.continent}</FieldError>
      </Field>
      <Field>
        <Label htmlFor="co">{w.country}</Label>
        <Input id="co" value={draft.country} onChange={(e) => patch({ country: e.target.value })} />
        <FieldError>{errors.country}</FieldError>
      </Field>
    </div>
  );
}

function ServicePicker({ onPick }: { onPick: (id: ServiceId) => void }) {
  const t = useCopy();
  const items: { id: ServiceId; icon: typeof Plane; title: string; tag: string; desc: string }[] = [
    {
      id: "visa",
      icon: Briefcase,
      title: t.visaName,
      tag: t.visaTag,
      desc: t.visaDesc,
    },
    {
      id: "billetterie",
      icon: Plane,
      title: t.ticketsName,
      tag: t.ticketsTag,
      desc: t.ticketsDesc,
    },
    {
      id: "colis",
      icon: Package,
      title: t.cargoName,
      tag: t.cargoTag,
      desc: t.cargoDesc,
    },
  ];

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-widest text-gold">{t.nav.book}</p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">{t.wizard.choose}</h1>
      <div className="mt-8 grid gap-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onPick(item.id)}
              className="flex gap-4 rounded-xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-transform duration-150 hover:-translate-y-0.5"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-bg">
                <Icon className="size-5 text-gold" />
              </span>
              <span>
                <span className="flex flex-wrap items-baseline gap-2">
                  <span className="text-base font-medium">{item.title}</span>
                  <span className="text-xs font-medium text-gold">{item.tag}</span>
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">{item.desc}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
