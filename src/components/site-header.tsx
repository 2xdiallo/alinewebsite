import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { useCopy, useLang } from "@/lib/i18n";
import { whatsappHref } from "@/lib/booking";
import { cn } from "@/lib/utils";

const links = [
  { to: "/billetterie", key: "tickets" as const },
  { to: "/visa", key: "visa" as const },
  { to: "/import-export", key: "cargo" as const },
  { to: "/faq", key: "faq" as const },
];

export function SiteHeader() {
  const t = useCopy();
  const lang = useLang((s) => s.lang);
  const setLang = useLang((s) => s.setLang);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 md:px-8 md:py-4">
        <Link
          to="/"
          className="flex min-h-11 shrink-0 items-center py-1 pr-4"
          onClick={() => setOpen(false)}
        >
          <Logo variant="mark" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg",
                pathname === l.to && "text-fg",
              )}
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex rounded-md p-0.5 shadow-[inset_0_0_0_1px_var(--color-line)]">
            {(["fr", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "min-h-8 rounded-sm px-2.5 text-xs font-medium uppercase tracking-wide",
                  lang === code ? "bg-fg text-surface" : "text-muted hover:text-fg",
                )}
              >
                {code}
              </button>
            ))}
          </div>
          <a
            href={whatsappHref(t.waDefault)}
            className="hidden min-h-11 items-center px-2 text-sm font-medium text-muted hover:text-fg md:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            {t.ctaWhatsapp}
          </a>
          <Link
            to="/rendez-vous"
            className="hidden min-h-11 items-center rounded-md bg-fg px-4 text-sm font-medium text-surface sm:inline-flex"
          >
            {t.nav.book}
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md lg:hidden"
            aria-label={open ? "Close" : "Menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-surface px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-base font-medium"
              >
                {t.nav[l.key]}
              </Link>
            ))}
            <Link
              to="/rendez-vous"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center rounded-md bg-fg text-sm font-medium text-surface"
            >
              {t.nav.book}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
