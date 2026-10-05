import Link from "next/link";
import type { SiteConfig } from "@/lib/site-config";
import { defaultConfig } from "@/lib/site-config";

const links = [
  { href: "/#pourquoi-nous", label: "Pourquoi nous" },
  { href: "/#methode", label: "Notre méthode" },
  { href: "/#solutions", label: "Nos solutions" },
  { href: "/partenaires", label: "Nos partenaires" },
  { href: "/#qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/contact", label: "Contact" },
];

export default function Footer({ config }: { config: SiteConfig }) {
  return (
    <footer className="bg-secondary text-white" style={{ borderTopWidth: "3px", borderTopColor: defaultConfig.colors.accent.green }}>
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: defaultConfig.colors.accent.green }}>
            <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden="true">
              <path
                d="M4 5.5A1.5 1.5 0 0 1 5.5 4h2A1.5 1.5 0 0 1 9 5.5v1.086a1.5 1.5 0 0 1-.44 1.06l-.812.813a11.5 11.5 0 0 0 6.793 6.793l.813-.812a1.5 1.5 0 0 1 1.06-.44H18.5A1.5 1.5 0 0 1 20 15.5v2a1.5 1.5 0 0 1-1.5 1.5C10.492 19 5 13.508 5 6.5A1.5 1.5 0 0 1 4 5.5Z"
                fill="white"
              />
            </svg>
          </span>
          <div>
            <p className="text-sm text-white/60">Prenez rendez-vous dès maintenant !</p>
            <a href={`tel:${config.phoneHref}`} className="text-lg font-bold">
              {config.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/70">
          <a href={`mailto:${config.email}`} className="hover:text-white transition-colors">
            {config.email}
          </a>
          {config.zone && <span>{config.zone}</span>}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/50 uppercase tracking-wide">
          <span>Conseil</span>
          <span>Proximité</span>
          <span>Solutions durables</span>
          <span>Partenaires RGE</span>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>
            &copy; {new Date().getFullYear()} {config.brandName}. Tous droits réservés.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/mentions-legales" className="hover:text-white/70 transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white/70 transition-colors">
              Confidentialité
            </Link>
            <Link href="/smart-sales" className="hover:text-white/70 transition-colors">
              Smart Sales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
