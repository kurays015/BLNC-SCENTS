import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-amber text-cream hover:bg-charcoal border border-amber hover:border-charcoal",
  secondary:
    "bg-gold text-charcoal hover:bg-gold-light border border-gold",
  outline:
    "bg-transparent text-amber border border-amber hover:bg-amber hover:text-cream",
};

export function Button({
  href = "#",
  variant = "primary",
  children,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300",
    variants[variant],
    className,
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
