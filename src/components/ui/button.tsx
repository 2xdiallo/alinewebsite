import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "gold";

const styles: Record<Variant, string> = {
  primary:
    "bg-fg text-surface hover:bg-fg/90 focus-visible:ring-fg/30",
  secondary:
    "bg-surface text-fg shadow-[inset_0_0_0_1px_var(--color-line)] hover:bg-bg focus-visible:ring-fg/20",
  ghost: "bg-transparent text-fg hover:bg-fg/5 focus-visible:ring-fg/20",
  gold: "bg-gold text-surface hover:bg-gold-deep focus-visible:ring-gold/40",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  function Button({ className, variant = "primary", type = "button", ...props }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium tracking-tight transition-colors duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-40",
          styles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
