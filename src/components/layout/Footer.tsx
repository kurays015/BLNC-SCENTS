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
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61590224188713"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 transition-colors hover:text-gold"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:inquiries@blncscents.com"
                className="text-cream/70 transition-colors hover:text-gold"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
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
