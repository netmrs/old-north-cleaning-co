import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Testimonials for Old North Cleaning Co commercial cleaning services."
};

const reviewSlots = [
  {
    title: "Google reviews",
    text: "Add verified Google reviews here once the business profile is live and customers have left feedback."
  },
  {
    title: "Customer testimonials",
    text: "Use direct customer quotes only after permission is received from the business contact."
  },
  {
    title: "Case notes",
    text: "Short before-and-after service notes can help future buyers understand the scope and response time."
  }
];

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-navy bg-hero-grid bg-[length:auto,auto,48px_48px,48px_48px] text-white">
        <div className="section">
          <p className="eyebrow">Reviews</p>
          <h1 className="max-w-4xl text-5xl font-black leading-none md:text-7xl">Trust proof belongs here as it grows.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">
            Start clean, then replace placeholders with verified Google reviews and customer-approved testimonials.
          </p>
        </div>
      </section>

      <section className="section grid gap-5 md:grid-cols-3">
        {reviewSlots.map((item) => (
          <article key={item.title} className="surface p-6">
            <p className="text-xs font-black uppercase text-brass">Proof</p>
            <h2 className="mt-8 text-2xl font-black text-navy">{item.title}</h2>
            <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <CTA />
    </main>
  );
}
