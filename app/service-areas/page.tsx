import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { serviceAreaPages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Commercial cleaning in Raleigh, Cary, Apex, Morrisville, and Durham."
};

export default function ServiceAreasPage() {
  return (
    <main>
      <section className="bg-navy bg-hero-grid bg-[length:auto,auto,48px_48px,48px_48px] text-white">
        <div className="section">
          <p className="eyebrow">Service Areas</p>
          <h1 className="max-w-5xl font-display text-5xl font-black leading-none md:text-7xl">
            Local commercial cleaning across the Triangle.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">
            Dedicated city pages help local buyers find the right fit without forcing a generic quote flow.
          </p>
        </div>
      </section>

      <section className="section grid gap-5">
        {serviceAreaPages.map((area) => (
          <article
            id={area.city.toLowerCase()}
            key={area.slug}
            className="scroll-mt-28 rounded-brand border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lift md:grid md:grid-cols-[0.7fr_1.3fr_auto] md:items-center md:gap-8"
          >
            <div>
              <p className="text-xs font-black uppercase text-brass">{area.city}</p>
              <h2 className="mt-2 font-display text-3xl font-black text-navy">{area.title}</h2>
            </div>
            <div className="mt-5 md:mt-0">
              <p className="leading-8 text-slate-600">{area.text}</p>
              <p className="mt-3 text-sm font-bold text-steel">{area.fit}</p>
            </div>
            <Link href={`/service-areas/${area.slug}`} className="button button-outline mt-5 md:mt-0">
              View Area
            </Link>
          </article>
        ))}
      </section>

      <CTA />
    </main>
  );
}
