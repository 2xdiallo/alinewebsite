import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/i18n";

export const Route = createFileRoute("/billetterie")({ component: Page });

function Page() {
  const t = useCopy();
  const p = t.ticketsPage;

  return (
    <SiteShell>
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">{p.kicker}</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">{p.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{p.lead}</p>
          <p className="mt-3 text-sm text-fg">{p.world}</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <Link
              to="/rendez-vous"
              search={{ service: "billetterie" }}
              className="flex min-h-14 items-center justify-center rounded-md bg-fg px-5 text-sm font-medium text-surface"
            >
              {p.online}
            </Link>
            <Link
              to="/rendez-vous"
              search={{ service: "billetterie" }}
              className="flex min-h-14 items-center justify-center rounded-md px-5 text-sm font-medium text-fg shadow-[inset_0_0_0_1px_var(--color-line)]"
            >
              {p.agency}
            </Link>
          </div>
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-2 md:px-8">
          <ContinentCard title={t.europe} text={t.europeEx} />
          <ContinentCard title={t.americas} text={t.americasEx} />
          <ContinentCard title={t.asia} text={t.asiaEx} />
          <ContinentCard title={t.africa} text={t.africaEx} />
        </div>
      </section>
    </SiteShell>
  );
}

function ContinentCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-surface px-6 py-6 shadow-[var(--shadow-border)]">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
