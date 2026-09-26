import { useState, type FormEvent } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, Input, Label } from "@/components/ui/field";
import { CardBrandRow, StripeWordmark } from "@/components/stripe-mark";
import { CONSULTATION_EUR } from "@/lib/booking";
import { useCopy, useLang } from "@/lib/i18n";
import { formatEUR } from "@/lib/utils";

function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
}

type Props = {
  onPaid: () => void;
};

export function StripeCheckout({ onPaid }: Props) {
  const t = useCopy().pay;
  const lang = useLang((s) => s.lang);
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [holder, setHolder] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const digits = number.replace(/\s/g, "");
    const exp = expiry.replace(/\s/g, "");
    if (digits.length < 16 || exp.length < 5 || cvc.length < 3 || holder.trim().length < 2) {
      setError(t.error);
      return;
    }
    setError("");
    setBusy(true);
    await new Promise((r) => setTimeout(r, 1400));
    setBusy(false);
    onPaid();
  }

  return (
    <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gold">
            Stripe
          </p>
          <h2 className="mt-1 text-xl font-medium tracking-tight">{t.title}</h2>
        </div>
        <StripeWordmark className="h-6 w-14 text-stripe" />
      </div>

      <div className="mt-6 flex items-end justify-between rounded-lg bg-bg px-4 py-4">
        <div>
          <p className="text-xs text-muted">{t.amountLabel}</p>
          <p className="mt-1 text-3xl font-medium tracking-tight tabular-nums">
            {formatEUR(CONSULTATION_EUR, lang)}
          </p>
        </div>
        <p className="max-w-40 text-right text-xs leading-relaxed text-subtle">
          {t.currencyNote}
        </p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <Field>
          <div className="mb-1.5 flex items-center justify-between">
            <Label htmlFor="card-number">{t.number}</Label>
            <CardBrandRow />
          </div>
          <Input
            id="card-number"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="ACCT-000015"
            value={number}
            onChange={(e) => setNumber(formatCardNumber(e.target.value))}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field>
            <Label htmlFor="card-exp">{t.expiry}</Label>
            <Input
              id="card-exp"
              inputMode="numeric"
              autoComplete="cc-exp"
              placeholder="MM / AA"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            />
          </Field>
          <Field>
            <Label htmlFor="card-cvc">{t.cvc}</Label>
            <Input
              id="card-cvc"
              inputMode="numeric"
              autoComplete="cc-csc"
              placeholder="123"
              value={cvc}
              onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
            />
          </Field>
        </div>
        <Field>
          <Label htmlFor="card-name">{t.holder}</Label>
          <Input
            id="card-name"
            autoComplete="cc-name"
            value={holder}
            onChange={(e) => setHolder(e.target.value)}
          />
          <FieldError>{error}</FieldError>
        </Field>

        <Button type="submit" className="w-full" disabled={busy}>
          <Lock className="size-3.5" />
          {busy ? t.processing : t.pay}
        </Button>
      </form>

      <div className="mt-5 flex items-center justify-center gap-2 text-subtle">
        <Lock className="size-3" />
        <span className="text-xs">{t.secure}</span>
      </div>
      <p className="mt-3 text-center text-xs leading-relaxed text-subtle">{t.demo}</p>
    </section>
  );
}
