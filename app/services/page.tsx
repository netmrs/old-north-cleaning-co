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
    label: "Core recurring service",
    text: "Routine cleaning for workspaces, private offices, conference rooms, kitchens, breakrooms, reception areas, and shared surfaces."
  },
  {
    id: "medical-offices",
    title: "Medical/Dental Offices",
    label: "Non-clinical environments",
    text: "Cleaning for waiting rooms, office areas, restrooms, staff spaces, and high-touch surfaces in professional healthcare environments."
  },
  {
    id: "churches",
    title: "Churches",
    label: "Weekly-use facilities",
    text: "Flexible cleaning for sanctuaries, classrooms, nurseries, offices, restrooms, lobbies, and gathering areas around weekly use and events."
  },
  {
    id: "fitness-studios",
    title: "Fitness Studios",
    label: "High-touch spaces",
    text: "Cleaning for lobbies, equipment zones, restrooms, changing spaces, mirrors, floors, and other high-use areas."
  },
  {
    id: "common-areas",
    title: "Common Areas",
    label: "Property management",
    text: "Support for lobbies, corridors, mailrooms, stairwells, elevators, amenity rooms, and shared building spaces."
  },
  {
    id: "restroom-sanitation",
    title: "Restroom Sanitation",
    label: "Priority touchpoints",
    text: "Restroom cleaning, fixture care, trash removal, touchpoint attention, and restock notes when supplies run low."
  },
  {
    id: "trash-removal",
    title: "Trash Removal",
    label: "Routine closeout",
    text: "Trash and liner service for offices, restrooms, breakrooms, common areas, and designated collection points."
  },
  {
    id: "floor-care",
    title: "Floor Care",
    label: "Daily and periodic",
    text: "Vacuuming, mopping, entry mat cleanup, spot attention, and recurring hard-surface floor maintenance planning."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-navy bg-hero-grid bg-[length:auto,auto,48px_48px,48px_48px] text-white">
        <div className="section py-20">
          <p className="eyebrow">Services</p>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">
            Commercial cleaning services, clearly scoped.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">
            Focused services for the commercial spaces that need recurring cleaning, fast communication, and no mystery around what is included.
          </p>
        </div>
      </section>

      <section className="section grid gap-5">
        {serviceSections.map((service, index) => (
          <article
            id={service.id}
            key={service.id}
            className="group scroll-mt-28 rounded-brand border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lift md:grid md:grid-cols-[90px_0.8fr_1.2fr] md:items-center md:gap-8 md:p-7"
          >
            <span className="mb-6 grid h-16 w-16 place-items-center rounded-brand bg-clean text-lg font-black text-harbor md:mb-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs font-black uppercase text-brass">{service.label}</p>
              <h2 className="mt-2 font-display text-3xl font-black leading-tight text-navy">{service.title}</h2>
            </div>
            <p className="mt-4 leading-8 text-slate-600 md:mt-0">{service.text}</p>
          </article>
        ))}
      </section>

      <CTA />
    </main>
  );
}
