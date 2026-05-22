import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services",
  description:
    "Office cleaning, medical and dental office cleaning, churches, fitness studios, common areas, restroom sanitation, trash removal, and floor care."
};

const serviceSections = [
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    text: "Routine cleaning for workspaces, private offices, conference rooms, kitchens, breakrooms, reception areas, and shared surfaces."
  },
  {
    id: "medical-offices",
    title: "Medical/Dental Offices",
    text: "Non-clinical cleaning for waiting rooms, office areas, restrooms, staff spaces, and high-touch surfaces in professional healthcare environments."
  },
  {
    id: "churches",
    title: "Churches",
    text: "Flexible cleaning for sanctuaries, classrooms, nurseries, offices, restrooms, lobbies, and gathering areas around weekly use and events."
  },
  {
    id: "fitness-studios",
    title: "Fitness Studios",
    text: "Cleaning for lobbies, equipment zones, restrooms, changing spaces, mirrors, floors, and other high-use areas."
  },
  {
    id: "common-areas",
    title: "Common Areas",
    text: "Property management support for lobbies, corridors, mailrooms, stairwells, elevators, amenity rooms, and shared building spaces."
  },
  {
    id: "restroom-sanitation",
    title: "Restroom Sanitation",
    text: "Restroom cleaning, touchpoint attention, fixture care, trash removal, and restock notes when supplies are running low."
  },
  {
    id: "trash-removal",
    title: "Trash Removal",
    text: "Trash and liner service for offices, restrooms, breakrooms, common areas, and designated collection points."
  },
  {
    id: "floor-care",
    title: "Floor Care",
    text: "Vacuuming, mopping, entry mat cleanup, spot attention, and recurring hard-surface floor maintenance planning."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="section py-20">
          <p className="eyebrow">Services</p>
          <h1 className="max-w-4xl text-5xl font-black leading-none md:text-7xl">Commercial cleaning services, clearly scoped.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">
            Old North Cleaning Co keeps the menu focused on the cleaning work commercial buyers actually need.
          </p>
        </div>
      </section>

      <section className="section grid gap-4 md:grid-cols-2">
        {serviceSections.map((service) => (
          <article id={service.id} key={service.id} className="scroll-mt-28 rounded-brand border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-navy">{service.title}</h2>
            <p className="mt-4 leading-8 text-slate-600">{service.text}</p>
          </article>
        ))}
      </section>

      <CTA />
    </main>
  );
}
