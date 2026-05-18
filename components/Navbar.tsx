"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-parchment"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            {/* Torii gate icon */}
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="8" width="32" height="3.5" rx="1.5" fill="#dc2626" />
              <rect x="4" y="4" width="28" height="3" rx="1.5" fill="#dc2626" />
              <rect x="6" y="11.5" width="3.5" height="20" rx="1.5" fill="#dc2626" />
              <rect x="26.5" y="11.5" width="3.5" height="20" rx="1.5" fill="#dc2626" />
              <rect x="12" y="14" width="12" height="3" rx="1" fill="#d4af37" />
            </svg>
          </div>
          <div>
            <div className="font-display font-bold text-ink-900 text-lg leading-tight">
              Sakura Bridge
            </div>
            <div className="text-[10px] font-body text-crimson-500 tracking-[0.2em] uppercase font-medium">
              Consultancy
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-body text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-crimson-600 active"
                  : "text-ink-700 hover:text-crimson-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 bg-crimson-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-crimson-700 transition-all hover:shadow-md font-body"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ink-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-b border-parchment ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-body text-sm font-medium py-1 border-b border-parchment ${
                pathname === link.href ? "text-crimson-600" : "text-ink-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-crimson-600 text-white px-5 py-2.5 rounded-full text-sm font-medium text-center"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
