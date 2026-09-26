export function StripeWordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 25"
      aria-label="Stripe"
      role="img"
      className={className}
    >
      <path
        fill="currentColor"
        d="M5 10.5c0-1.9 1.6-2.7 4.2-3 2.4-.3 3.6-.7 3.6-1.5 0-.8-.8-1.3-2.2-1.3-1.5 0-2.6.5-3.4 1l-.6-2.6c.9-.5 2.5-1 4.3-1 3.7 0 6.1 1.8 6.1 4.8v8.6H14V14c-.8.6-2 1.1-3.5 1.1-3.2 0-5.5-1.8-5.5-4.6zm4.7 2.2c1.4 0 2.4-.5 3-1.1v-1.8c-.6.4-1.6.8-2.8.9-1.3.2-2 .6-2 1.2 0 .7.7.8 1.8.8zM22.2 6.4c-1.7 0-3 .7-3.8 1.7l-.2-1.4h-3.2v16.4h3.5v-5.6c.8.6 1.9 1 3.3 1 3.4 0 6.4-2.7 6.4-6.6 0-3.8-3-6.5-6-6.5zm-.6 10.1c-1.5 0-2.6-.9-3-1.7V10c.4-.9 1.5-1.7 3-1.7 1.7 0 2.9 1.4 2.9 4.1 0 2.6-1.2 4.1-2.9 4.1zM32.6 2.4 29 19.7h3.6l3.6-17.3zM43.2 6.4c-3.7 0-6.6 2.8-6.6 6.6 0 3.7 2.9 6.5 6.8 6.5 1.8 0 3.2-.4 4.2-1l.7-2.6c-1 .5-2.2.9-3.7.9-1.9 0-3.5-1.2-3.8-2.9h8.3c0-.3.1-.8.1-1.2 0-3.6-2.2-6.3-6-6.3zm-3 5.1c.3-1.6 1.6-2.7 3-2.7 1.4 0 2.6 1.1 2.7 2.7zM55.8 6.7l-2.6-.1c-2 0-3.4 1.2-3.4 3.2v.3h-1.9v2.9h1.9v6.7h3.5v-6.7h2.6l.5-2.9h-3.1V10c0-.8.4-1.2 1.2-1.2h1.3z"
      />
    </svg>
  );
}

export function CardBrandRow() {
  return (
    <div className="flex items-center gap-2 text-muted" aria-hidden>
      <span className="rounded-sm bg-surface px-1.5 py-0.5 text-[10px] font-semibold tracking-wide shadow-[inset_0_0_0_1px_var(--color-line)]">
        VISA
      </span>
      <span className="rounded-sm bg-surface px-1.5 py-0.5 text-[10px] font-semibold tracking-wide shadow-[inset_0_0_0_1px_var(--color-line)]">
        MC
      </span>
      <span className="rounded-sm bg-surface px-1.5 py-0.5 text-[10px] font-semibold tracking-wide shadow-[inset_0_0_0_1px_var(--color-line)]">
        AMEX
      </span>
    </div>
  );
}
