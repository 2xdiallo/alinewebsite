import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/i18n";

export const Route = createFileRoute("/visa")({ component: Page });

function Page() {
  const t = useCopy();
  const p = t.visaPage;

  return (
    <SiteShell>
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">{p.kicker}</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">{p.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{p.lead}</p>
          <p className="mt-4 rounded-lg bg-bg px-4 py-3 text-sm leading-relaxed text-fg">
            {p.payNote}
          </p>
          <Link
            to="/rendez-vous"
            search={{ service: "visa" }}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-fg px-6 text-sm font-medium text-surface"
          >
            {t.ctaAppoint} — 30,00 €
          </Link>
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="text-2xl font-medium tracking-tight">{p.typesTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.types.map((item) => (
              <div key={item.t} className="rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]">
                <h3 className="font-medium">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-bg px-5 py-5">
              <h3 className="font-medium">{t.europe} · {t.americas}</h3>
              <p className="mt-2 text-sm text-muted">{t.europeEx}</p>
              <p className="mt-2 text-sm text-muted">{t.americasEx}</p>
            </div>
            <div className="rounded-xl bg-bg px-5 py-5">
              <h3 className="font-medium">{t.asia} · {t.africa}</h3>
              <p className="mt-2 text-sm text-muted">{t.asiaEx}</p>
              <p className="mt-2 text-sm text-muted">{t.africaEx}</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-subtle">{p.disclaimer}</p>
        </div>
      </section>
    </SiteShell>
  );
}
