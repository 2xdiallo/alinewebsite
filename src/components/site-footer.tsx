import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { useCopy } from "@/lib/i18n";
import { whatsappHref } from "@/lib/booking";

export function SiteFooter() {
  const t = useCopy();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo variant="mark" className="h-10 md:h-11" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {t.sloganWorld}
          </p>
          <p className="mt-2 text-sm text-gold">{t.sloganShort}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-widest text-subtle">
            {t.nav.services}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/billetterie" className="text-muted hover:text-fg">
                {t.nav.tickets}
              </Link>
            </li>
            <li>
              <Link to="/visa" className="text-muted hover:text-fg">
                {t.nav.visa}
              </Link>
            </li>
            <li>
              <Link to="/import-export" className="text-muted hover:text-fg">
                {t.nav.cargo}
              </Link>
            </li>
            <li>
              <Link to="/rendez-vous" className="text-muted hover:text-fg">
                {t.nav.book}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-muted hover:text-fg">
                {t.nav.faq}
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-widest text-subtle">
            Contact
          </p>
          <p className="mt-4 text-sm text-muted">{t.location}</p>
          <p className="mt-2 text-sm text-muted">{t.hours}</p>
          <a
            href={whatsappHref(t.waDefault)}
            className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-fg"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp +225 07 57 96 69 69
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs leading-relaxed text-subtle md:flex-row md:items-center md:justify-between md:px-8">
          <p>{t.footerLegal}</p>
          <p className="shrink-0">{t.sloganSigned}</p>
        </div>
      </div>
    </footer>
  );
}
