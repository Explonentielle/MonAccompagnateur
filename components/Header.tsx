import Link from "next/link";
import Image from "next/image";
import type { SiteConfig } from "@/lib/site-config";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/#methode", label: "Notre méthode" },
  { href: "/#solutions", label: "Nos solutions" },
  { href: "/partenaires", label: "Nos partenaires" },
  { href: "/#qui-sommes-nous", label: "Qui sommes-nous" },
];

export default function Header({ config }: { config: SiteConfig }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="relative mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold uppercase tracking-wide text-secondary">
              {config.brandName}
            </span>
            <span className="hidden text-[11px] font-medium text-primary sm:block">
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

        <div className="flex items-center gap-3">
          <a
            href={`tel:${config.phoneHref}`}
            className="hidden whitespace-nowrap text-sm font-bold text-secondary transition-colors hover:text-primary xl:block"
          >
            {config.phone}
          </a>
          <Link
            href="/contact"
            className="hidden shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md sm:block"
          >
            Étude gratuite
          </Link>
          <MobileMenu links={links} phone={config.phone} phoneHref={config.phoneHref} />
        </div>
      </div>
    </header>
  );
}
