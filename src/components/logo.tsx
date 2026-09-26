import { cn } from "@/lib/utils";

type Props = {
  variant?: "mark" | "full";
  className?: string;
};

export function Logo({ variant = "mark", className }: Props) {
  if (variant === "full") {
    return (
      <img
        src="/brand/logo.png"
        alt="ALINE PRESTIGE TRAVELS — Billetterie, Assistance Visa, Import-Export"
        width={1429}
        height={1261}
        className={cn("mx-auto h-auto w-full max-w-2xl select-none", className)}
        decoding="async"
      />
    );
  }

  return (
    <span className={cn("inline-flex h-10 items-center overflow-hidden md:h-11", className)}>
      <img
        src="/brand/logo-mark.png"
        alt="ALINE PRESTIGE TRAVELS"
        width={1290}
        height={756}
        className="h-full w-auto max-w-44 object-contain object-left md:max-w-52"
        decoding="async"
      />
    </span>
  );
}
