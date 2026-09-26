import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { findBooking, whatsappHref, type StoredBooking } from "@/lib/booking";
import { useCopy, useLang } from "@/lib/i18n";
import { formatEUR } from "@/lib/utils";

type Search = { ref?: string };

export const Route = createFileRoute("/confirmation")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    ref: typeof search.ref === "string" ? search.ref : undefined,
  }),
  component: Page,
});

function Page() {
  const { ref } = Route.useSearch();
  const t = useCopy();
  const lang = useLang((s) => s.lang);
  const [booking, setBooking] = useState<StoredBooking | null>(null);

  useEffect(() => {
    if (ref) setBooking(findBooking(ref) ?? null);
  }, [ref]);

  const c = t.confirm;

  return (
    <SiteShell>
      <section className="bg-surface">
        <div className="mx-auto max-w-lg px-5 py-16 text-center md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            {t.sloganShort}
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight">{c.title}</h1>
          <p className="mt-4 text-muted">
            {booking?.paid ? c.paidLead : c.freeLead}
          </p>
          {booking ? (
            <dl className="mt-8 divide-y divide-line rounded-xl bg-bg text-left">
              <Row label={c.ref} value={booking.id} />
              <Row
                label={c.amount}
                value={
                  booking.paid ? formatEUR(booking.amountEur, lang) : c.free
                }
              />
              {booking.preferredDate ? (
                <Row label={t.wizard.date} value={booking.preferredDate} />
              ) : null}
            </dl>
          ) : null}
          <p className="mt-6 text-sm text-muted">{booking?.paid ? c.nextPaid : c.nextFree}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-fg px-5 text-sm font-medium text-surface"
            >
              {c.home}
            </Link>
            <a
              href={whatsappHref(
                booking
                  ? `${t.waDefault}\n${c.ref}: ${booking.id}`
                  : t.waDefault,
              )}
              className="inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-medium shadow-[inset_0_0_0_1px_var(--color-line)]"
              target="_blank"
              rel="noreferrer"
            >
              {c.wa}
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm">
      <dt className="text-muted">{label}</dt>
      <dd className="font-medium tabular-nums">{value}</dd>
    </div>
  );
}
