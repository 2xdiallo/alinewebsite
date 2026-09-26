import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Lock, Plane, Scale, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Logo } from "@/components/logo";
import { useCopy } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const t = useCopy();

  return (
    <SiteShell>
      <section className="bg-surface">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-8 pb-16 pt-8 text-center md:px-12 md:pb-24 md:pt-10">
          <Logo variant="full" className="max-w-lg md:max-w-xl" />
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            {t.heroEyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t.heroLead}
          </p>
          <p className="mt-3 text-sm text-fg/80">{t.sloganSteps}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/rendez-vous"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-fg px-6 text-sm font-medium text-surface"
            >
              {t.ctaAppoint}
            </Link>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-medium text-fg shadow-[inset_0_0_0_1px_var(--color-line)]"
            >
              {t.ctaDiscover}
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            {t.servicesKicker}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            {t.servicesTitle}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{t.servicesLead}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <ServiceCard
              to="/billetterie"
              title={t.ticketsName}
              tag={t.ticketsTag}
              desc={t.ticketsDesc}
              learn={t.learn}
            />
            <ServiceCard
              to="/visa"
              title={t.visaName}
              tag={t.visaTag}
              desc={t.visaDesc}
              learn={t.learn}
              featured
            />
            <ServiceCard
              to="/import-export"
              title={t.cargoName}
              tag={t.cargoTag}
              desc={t.cargoDesc}
              learn={t.learn}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            {t.worldKicker}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
            {t.worldTitle}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{t.worldLead}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Continent name={t.europe} examples={t.europeEx} />
            <Continent name={t.americas} examples={t.americasEx} />
            <Continent name={t.asia} examples={t.asiaEx} />
            <Continent name={t.africa} examples={t.africaEx} />
          </div>
          <p className="mt-6 text-sm text-subtle">{t.worldNote}</p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
              {t.priceKicker}
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              {t.priceTitle}
            </h2>
            <p className="mt-4 text-muted">{t.priceLead}</p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl bg-fg px-6 py-6 text-surface">
              <p className="text-sm font-medium text-gold">{t.paidTitle}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-surface/80">
                {t.paidItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-surface/60">{t.paidNote}</p>
            </div>
            <div className="rounded-xl bg-surface px-6 py-6 shadow-[var(--shadow-border)]">
              <p className="text-sm font-medium text-gold">{t.freeTitle}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {t.freeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            {t.howKicker}
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            {t.howTitle}
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {t.how.map((s) => (
              <li key={s.n}>
                <p className="text-sm font-medium text-gold">{s.n}</p>
                <h3 className="mt-3 text-lg font-medium tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            {t.whyKicker}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            {t.whyTitle}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.why.map((item, i) => {
              const Icon = [Globe2, ShieldCheck, Plane, Lock][i] ?? Scale;
              return (
                <div
                  key={item.t}
                  className="rounded-xl bg-surface px-6 py-6 shadow-[var(--shadow-border)]"
                >
                  <Icon className="size-5 text-gold" />
                  <h3 className="mt-4 text-lg font-medium">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-fg text-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            {t.brand}
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            {t.ctaTitle}
          </h2>
          <p className="mt-4 text-surface/70">{t.ctaLead}</p>
          <Link
            to="/rendez-vous"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-surface px-6 text-sm font-medium text-fg"
          >
            {t.ctaAppoint}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

function ServiceCard({
  to,
  title,
  tag,
  desc,
  learn,
  featured,
}: {
  to: "/billetterie" | "/visa" | "/import-export";
  title: string;
  tag: string;
  desc: string;
  learn: string;
  featured?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group flex flex-col rounded-xl p-6 transition-transform duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5",
        featured ? "bg-fg text-surface" : "bg-surface shadow-[var(--shadow-border)]",
      )}
    >
      <span className={cn("text-xs font-medium", featured ? "text-gold" : "text-gold")}>
        {tag}
      </span>
      <h3 className="mt-3 text-2xl font-medium tracking-tight">{title}</h3>
      <p className={cn("mt-3 flex-1 text-sm leading-relaxed", featured ? "text-surface/70" : "text-muted")}>
        {desc}
      </p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
        {learn}
        <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}

function Continent({ name, examples }: { name: string; examples: string }) {
  return (
    <div className="rounded-xl bg-bg px-6 py-6">
      <h3 className="text-xl font-medium tracking-tight">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{examples}</p>
    </div>
  );
}
