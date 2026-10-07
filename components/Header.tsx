import Link from "next/link";
import Image from "next/image";
import type { SiteConfig } from "@/lib/site-config";
import MobileMenu from "./MobileMenu";
import WhatsAppIcon from "./WhatsAppIcon";

const links = [
  { href: "/#methode", label: "Notre méthode" },
  { href: "/#solutions", label: "Nos solutions" },
  { href: "/partenaires", label: "Nos partenaires" },
  { href: "/#qui-sommes-nous", label: "Qui sommes-nous" },
];

export default function Header({ config }: { config: SiteConfig }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="relative mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <Link href="/" aria-label={config.brandName} className="flex shrink-0 items-center gap-3">
          <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-extrabold uppercase tracking-wide text-secondary">
              {config.brandName}
            </span>
            <span className="hidden text-[11px] font-medium text-primary sm:block lg:hidden 2xl:block">
              {config.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-secondary/70 transition-colors hover:text-secondary"
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${config.phoneHref}`}
            className="hidden whitespace-nowrap text-sm font-bold text-secondary transition-colors hover:text-primary xl:block"
          >
            {config.phone}
          </a>
          <a
            href={`tel:${config.phoneHref}`}
            aria-label={`Appeler le ${config.phone}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.58 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z" />
            </svg>
          </a>
          <a
            href={config.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nous écrire sur WhatsApp"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white lg:hidden xl:flex"
          >
            <WhatsAppIcon />
          </a>
          <Link
            href="/contact"
            className="shrink-0 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-sm shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md sm:px-5 sm:text-sm"
          >
            Étude gratuite
          </Link>
          <MobileMenu links={links} phone={config.phone} phoneHref={config.phoneHref} />
        </div>
      </div>
    </header>
  );
}
