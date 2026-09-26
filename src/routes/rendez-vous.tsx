import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { BookingWizard } from "@/components/booking-wizard";
import type { ServiceId } from "@/lib/booking";

type Search = { service?: ServiceId };

export const Route = createFileRoute("/rendez-vous")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const s = search.service;
    if (s === "visa" || s === "billetterie" || s === "colis") return { service: s };
    return {};
  },
  component: Page,
});

function Page() {
  const { service } = Route.useSearch();
  return (
    <SiteShell>
      <section className="px-5 py-12 md:px-8 md:py-16">
        <BookingWizard initialService={service} />
      </section>
    </SiteShell>
  );
}
