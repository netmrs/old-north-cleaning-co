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
      <section className="section">
        <p className="eyebrow">Reviews</p>
        <h1 className="max-w-4xl text-5xl font-black leading-none text-navy md:text-7xl">Simple proof matters.</h1>
        <p className="body-large mt-6 max-w-3xl">
          Early testimonials can be replaced with verified Google reviews as the company builds more local history.
        </p>
      </section>

      <section className="bg-clean">
        <div className="section grid gap-4 md:grid-cols-3">
          {reviewSlots.map((item) => (
            <article key={item.title} className="rounded-brand border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-black text-navy">{item.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
