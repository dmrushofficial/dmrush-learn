"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { publicNav, siteConfig } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div>
      <button
        type="button"
        className="text-base font-medium text-ink"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-30 border-b border-line bg-cream shadow-lg"
        >
          <nav aria-label="Mobile" className="flex flex-col px-5 py-6">
            {publicNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2.5 text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.agencyUrl}
              className="py-2.5 text-lg text-ink"
              onClick={() => setOpen(false)}
            >
              {siteConfig.agencyLabel}
            </a>
            <div className="mt-5">
              <Button href="/contact" variant="signal">
                Contact us
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
