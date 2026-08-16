import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { publicNav, siteConfig } from "@/lib/site";
import { MobileNav } from "@/components/public/MobileNav";

const headerNav = publicNav.filter((item) => item.href !== "/contact");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 text-ink backdrop-blur-sm supports-[backdrop-filter]:bg-cream/90">
      <Container className="relative flex h-20 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Logo imageClassName="h-8 w-auto lg:h-9" />
        <nav
          className="hidden items-center gap-7 lg:flex lg:justify-self-center"
          aria-label="Primary"
        >
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex lg:justify-self-end">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-ink hover:text-accent"
          >
            WhatsApp
          </a>
          <Button href="/contact" variant="signal">
            Contact us
          </Button>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
