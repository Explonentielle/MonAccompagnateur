"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = { href: string; label: string };

export default function MobileMenu({
  links,
  phone,
  phoneHref,
}: {
  links: NavLink[];
  phone: string;
  phoneHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-secondary transition-colors hover:bg-black/5"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-black/5 bg-white shadow-xl">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-3.5 text-base font-semibold text-secondary last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${phoneHref}`}
              className="mt-4 text-sm font-semibold text-primary"
            >
              {phone}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
