import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-clean">
      <div className="section grid gap-8 py-10 md:grid-cols-[260px_1fr_auto] md:items-center">
        <Image
          src="/assets/old-north-logo.png"
          alt="Old North Cleaning Co"
          width={320}
          height={160}
          className="w-56 mix-blend-multiply"
        />
        <div>
          <p className="font-black text-navy">Commercial cleaning across the Triangle.</p>
          <p className="mt-1 text-sm text-slate-600">
            Raleigh, Cary, Apex, Morrisville, Durham, and nearby business communities.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-black text-navy">
          <Link href="/services">Services</Link>
          <Link href="/service-areas">Service Areas</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
