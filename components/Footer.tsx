import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#eef3f1]">
      <div className="section-tight grid gap-8 md:grid-cols-[260px_1fr_auto] md:items-center">
        <div className="rounded-brand bg-white p-4 shadow-sm">
          <Image
            src="/assets/old-north-logo.png"
            alt="Old North Cleaning Co"
            width={320}
            height={160}
            className="w-56 mix-blend-multiply"
          />
        </div>
        <div>
          <p className="font-display text-xl font-black text-navy">Commercial cleaning across the Triangle.</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Raleigh, Cary, Apex, Morrisville, Durham, and nearby business communities.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 font-display text-sm font-black text-navy md:justify-end">
          <Link href="/services">Services</Link>
          <Link href="/service-areas">Service Areas</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
