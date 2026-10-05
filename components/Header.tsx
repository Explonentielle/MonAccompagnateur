import Link from "next/link";
import Image from "next/image";
import type { SiteConfig } from "@/lib/site-config";

const links = [
  { href: "/#methode", label: "Notre méthode" },
  { href: "/#solutions", label: "Nos solutions" },
  { href: "/partenaires", label: "Nos partenaires" },
  { href: "/#qui-sommes-nous", label: "Qui sommes-nous" },
];

export default function Header({ config }: { config: SiteConfig }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="leading-tight">
            <span className="block text-sm font-bold text-secondary tracking-wide uppercase">
              {config.brandName}
            </span>
            <span className="hidden sm:block text-[11px] text-primary font-medium">
              {config.tagline}
            </span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-secondary/70 hover:text-secondary transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
        >
          Étude gratuite
        </Link>
      </div>
    </header>
  );
}
