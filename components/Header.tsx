"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-[min(1160px,calc(100%_-_32px))] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3 text-navy">
          <span className="grid h-12 w-12 place-items-center rounded-brand border border-slate-200 bg-white shadow-sm">
            <Image src="/assets/onc-mark.png" alt="" width={42} height={42} className="h-10 w-10 object-contain" priority />
          </span>
          <span className="max-w-[170px] font-display text-sm font-black leading-tight tracking-normal md:max-w-none md:text-base">
            Old North Cleaning Co
          </span>
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-brand border border-slate-300 bg-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
          </span>
        </button>

        <nav
          className={`absolute left-4 right-4 top-[76px] rounded-brand border border-slate-200 bg-white p-2 shadow-soft md:static md:flex md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-brand px-3 py-3 font-display text-sm font-black text-ink transition hover:bg-clean hover:text-harbor"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="button button-primary mt-2 md:ml-3 md:mt-0"
              onClick={() => setOpen(false)}
            >
              Request a Walkthrough
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
