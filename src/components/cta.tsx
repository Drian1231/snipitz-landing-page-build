import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

const cta = cva(
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue",
  {
    variants: {
      variant: {
        solid:
          "bg-accent-blue text-light shadow-[0_10px_30px_-12px_oklch(0.5845_0.099_230.1/0.9)] hover:bg-accent-blue-bright hover:shadow-[0_16px_40px_-14px_oklch(0.5845_0.099_230.1/1)] hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-light/25 text-light hover:border-light/60 hover:bg-light/5 hover:-translate-y-0.5 active:translate-y-0",
        ink:
          "border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5 hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        lg: "px-8 py-4 text-[0.95rem] tracking-[0.01em]",
        md: "px-6 py-3 text-sm tracking-[0.01em]",
      },
    },
    defaultVariants: { variant: "solid", size: "lg" },
  },
);

type CtaProps = VariantProps<typeof cta> & {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function Cta({ href, children, variant, size, external, className = "" }: CtaProps) {
  return (
    <a
      href={href}
      className={cta({ variant, size, className })}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        &#8594;
      </span>
    </a>
  );
}
