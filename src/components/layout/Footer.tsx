import Link from "next/link";
import { FlameEmblem } from "@/components/ui/FlameEmblem";

export function Footer() {
  return (
    <footer className="border-t border-amber/10 bg-amber text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <FlameEmblem className="mb-4 h-10 w-10 text-gold" />
            <p className="text-sm font-medium uppercase tracking-[0.35em]">
              BLNC SCENTS
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">
              Strength in Balance
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">
              Explore
            </h4>
            <nav className="mt-4 flex flex-col gap-2">
              <Link
                href="/products"
                className="text-sm text-cream/80 transition-colors hover:text-gold"
              >
                Collection
              </Link>
              <Link
                href="/about"
                className="text-sm text-cream/80 transition-colors hover:text-gold"
              >
                Our Story
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">
              Connect
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-cream/80">
              <a href="#" className="transition-colors hover:text-gold">
                Instagram
              </a>
              <a href="#" className="transition-colors hover:text-gold">
                inquiries@blncscents.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} BLNC SCENTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
