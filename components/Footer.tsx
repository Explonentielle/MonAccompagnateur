import Link from "next/link";
import Image from "next/image";
import type { SiteConfig } from "@/lib/site-config";

const links = [
  { href: "/#pourquoi-nous", label: "Pourquoi nous" },
  { href: "/#methode", label: "Notre méthode" },
  { href: "/#solutions", label: "Nos solutions" },
  { href: "/partenaires", label: "Nos partenaires" },
  { href: "/#qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/contact", label: "Contact" },
];

const values = ["Conseil", "Proximité", "Solutions durables", "Partenaires RGE"];

export default function Footer({ config }: { config: SiteConfig }) {
  return (
    <footer className="bg-secondary text-white">
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
              </span>
              <span className="text-sm font-extrabold uppercase tracking-wide">{config.brandName}</span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-white/60">{config.tagline}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {values.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/60"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Navigation</p>
            <ul className="mt-5 space-y-3 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 transition-colors hover:text-primary-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Contact</p>
            <p className="mt-5 text-sm text-white/60">Prenez rendez-vous dès maintenant !</p>
            <a
              href={`tel:${config.phoneHref}`}
              className="mt-1 block text-2xl font-extrabold text-primary-light transition-colors hover:text-white"
            >
              {config.phone}
            </a>
            <a
              href={`mailto:${config.email}`}
              className="mt-4 block break-all text-sm text-white/70 transition-colors hover:text-white"
            >
              {config.email}
            </a>
            {config.zone && <p className="mt-2 text-sm text-white/50">{config.zone}</p>}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/40 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {config.brandName}. Tous droits réservés.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <Link href="/mentions-legales" className="transition-colors hover:text-white/70">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="transition-colors hover:text-white/70">
              Confidentialité
            </Link>
            <Link href="/smart-sales" className="transition-colors hover:text-white/70">
              Smart Sales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
