import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Commercial cleaning in Raleigh, Cary, Apex, Morrisville, and Durham."
};

const areas = [
  {
    id: "raleigh",
    title: "Raleigh commercial cleaning",
    text: "Commercial cleaning for Raleigh offices, retail spaces, churches, fitness studios, medical-adjacent offices, and managed properties."
  },
  {
    id: "cary",
    title: "Cary commercial cleaning",
    text: "Reliable facility cleaning for Cary businesses that need clear communication, flexible scheduling, and consistent recurring service."
  },
  {
    id: "apex",
    title: "Apex commercial cleaning",
    text: "Cleaning programs for Apex offices, studios, local businesses, churches, and professional spaces."
  },
  {
    id: "morrisville",
    title: "Morrisville commercial cleaning",
    text: "Commercial cleaning for Morrisville workplaces, property common areas, and businesses near the airport and RTP corridor."
  },
  {
    id: "durham",
    title: "Durham commercial cleaning",
    text: "Office and facility cleaning for Durham businesses, professional suites, shared work areas, and customer-facing locations."
  }
];

export default function ServiceAreasPage() {
  return (
    <main>
      <section className="bg-clean">
        <div className="section">
          <p className="eyebrow">Service Areas</p>
          <h1 className="max-w-4xl text-5xl font-black leading-none text-navy md:text-7xl">
            Commercial cleaning across Raleigh, Cary, Apex, Morrisville, and Durham.
          </h1>
          <p className="body-large mt-6 max-w-3xl">
            Local service areas help commercial buyers find a cleaning company that can actually get to the space, walk it, and respond quickly.
          </p>
        </div>
      </section>

      <section className="section grid gap-4">
        {areas.map((area) => (
          <article id={area.id} key={area.id} className="scroll-mt-28 rounded-brand border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black text-navy">{area.title}</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">{area.text}</p>
          </article>
        ))}
      </section>

      <CTA />
    </main>
  );
}
