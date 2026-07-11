"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/products", label: "Collection" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileMenu =
    mounted &&
    createPortal(
      <>
        <div
          className={cn(
            "fixed inset-0 z-[100] bg-charcoal/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <div
          className={cn(
            "fixed inset-x-0 top-16 z-[101] h-auto w-screen bg-cream shadow-xl border-b border-amber/15 transition-all duration-300 md:hidden",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <nav className="flex w-full flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full border-b border-amber/10 px-6 py-5 text-base font-medium uppercase tracking-[0.2em] text-amber transition-colors hover:bg-sand hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <div className="p-6">
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="block w-full border border-amber bg-amber px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-cream transition-all hover:bg-charcoal"
              >
                Shop Now
              </Link>
            </div>
          </nav>
        </div>
      </>,
      document.body,
    );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-amber/10 bg-sand/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="group" onClick={() => setOpen(false)}>
            <span className="block text-sm font-medium uppercase tracking-[0.35em] text-charcoal transition-colors group-hover:text-gold">
              BLNC SCENTS
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-amber/60">
              Strength in Balance
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-amber transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="border border-amber px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-amber transition-all hover:bg-amber hover:text-cream"
            >
              Shop Now
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-amber/20 bg-cream text-amber transition-colors hover:border-amber hover:bg-amber hover:text-cream md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
