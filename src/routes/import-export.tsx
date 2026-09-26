import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/i18n";

export const Route = createFileRoute("/import-export")({ component: Page });

function Page() {
  const t = useCopy();
  const p = t.cargoPage;

  return (
    <SiteShell>
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">{p.kicker}</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">{p.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{p.lead}</p>
          <Link
            to="/rendez-vous"
            search={{ service: "colis" }}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-fg px-6 text-sm font-medium text-surface"
          >
            {t.cargoTag} — {t.ctaAppoint}
          </Link>
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.steps.map((s, i) => (
              <li key={s.t} className="rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]">
                <p className="text-xs font-medium text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-lg font-medium">{s.t}</h2>
                <p className="mt-2 text-sm text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteShell>
  );
}
