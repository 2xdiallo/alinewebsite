import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({ component: Page });

function Page() {
  const t = useCopy();
  return (
    <SiteShell>
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">FAQ</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight">{t.faqTitle}</h1>
          <div className="mt-10 divide-y divide-line">
            {t.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center text-left text-base font-medium tracking-tight">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
