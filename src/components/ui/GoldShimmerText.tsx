import { cn } from "@/lib/utils";

type GoldShimmerTextProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  variant?: "default" | "hero";
};

export function GoldShimmerText({
  children,
  as: Tag = "h1",
  className,
  variant = "default",
}: GoldShimmerTextProps) {
  return (
    <Tag
      className={cn(
        "font-serif",
        variant === "hero" ? "text-gold-shimmer-hero" : "text-gold-shimmer",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
