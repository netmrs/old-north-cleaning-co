import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Commercial cleaning in Raleigh, Cary, Apex, Morrisville, and Durham."
};

const areas = [
  {
    id: "raleigh",
    city: "Raleigh",
    title: "Raleigh commercial cleaning",
    text: "Commercial cleaning for Raleigh offices, retail spaces, churches, fitness studios, medical-adjacent offices, and managed properties.",
    fit: "Professional offices, churches, retail suites, wellness spaces"
  },
  {
    id: "cary",
    city: "Cary",
    title: "Cary commercial cleaning",
    text: "Reliable facility cleaning for Cary businesses that need clear communication, flexible scheduling, and consistent recurring service.",
    fit: "Office parks, customer-facing spaces, professional suites"
  },
  {
    id: "apex",
    city: "Apex",
    title: "Apex commercial cleaning",
    text: "Cleaning programs for Apex offices, studios, local businesses, churches, and professional spaces.",
    fit: "Local businesses, studios, churches, offices"
  },
  {
    id: "morrisville",
    city: "Morrisville",
    title: "Morrisville commercial cleaning",
    text: "Commercial cleaning for Morrisville workplaces, property common areas, and businesses near the airport and RTP corridor.",
    fit: "RTP corridor offices, flex workspaces, managed properties"
  },
  {
    id: "durham",
    city: "Durham",
    title: "Durham commercial cleaning",
    text: "Office and facility cleaning for Durham businesses, professional suites, shared work areas, and customer-facing locations.",
    fit: "Professional suites, shared work areas, retail and wellness"
  }
];

export default function ServiceAreasPage() {
  return (
    <main>
      <section className="bg-navy bg-hero-grid bg-[length:auto,auto,48px_48px,48px_48px] text-white">
        <div className="section">
          <p className="eyebrow">Service Areas</p>
          <h1 className="max-w-5xl text-5xl font-black leading-none md:text-7xl">
            Local commercial cleaning across the Triangle.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">
            Raleigh, Cary, Apex, Morrisville, and Durham pages help local buyers find the right fit without forcing a generic quote flow.
          </p>
        </div>
      </section>

      <section className="section grid gap-5">
        {areas.map((area) => (
          <article
            id={area.id}
            key={area.id}
            className="scroll-mt-28 rounded-brand border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lift md:grid md:grid-cols-[0.7fr_1.3fr_auto] md:items-center md:gap-8"
          >
            <div>
              <p className="text-xs font-black uppercase text-brass">{area.city}</p>
              <h2 className="mt-2 text-3xl font-black text-navy">{area.title}</h2>
            </div>
            <div className="mt-5 md:mt-0">
              <p className="leading-8 text-slate-600">{area.text}</p>
              <p className="mt-3 text-sm font-bold text-steel">{area.fit}</p>
            </div>
            <Link href="/contact" className="button button-outline mt-5 md:mt-0">
              Walkthrough
            </Link>
          </article>
        ))}
      </section>

      <CTA />
    </main>
  );
}
