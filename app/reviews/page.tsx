import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Testimonials for Old North Cleaning Co commercial cleaning services."
};

const proofRoadmap = [
  {
    title: "Google reviews",
    text: "Verified Google reviews should become the primary trust signal once the business profile is active and customers start leaving feedback."
  },
  {
    title: "Customer testimonials",
    text: "Short customer-approved quotes can help prospects understand communication, consistency, and professionalism."
  },
  {
    title: "Case notes",
    text: "Brief service notes can explain the type of facility, cleaning frequency, scope, and outcome without overclaiming."
  }
];

const reviewPrompts = [
  "Was communication clear before service started?",
  "Was the scope easy to understand?",
  "Did recurring service match expectations?",
  "Were issues handled quickly?"
];

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-navy bg-hero-grid bg-[length:auto,auto,48px_48px,48px_48px] text-white">
        <div className="section">
          <p className="eyebrow">Reviews</p>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">Trust proof belongs here as it grows.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">
            No fake testimonials. This page is designed to grow into verified Google reviews, customer-approved quotes, and short commercial case notes.
          </p>
        </div>
      </section>

      <section className="section grid gap-5 md:grid-cols-3">
        {proofRoadmap.map((item) => (
          <article key={item.title} className="surface p-6">
            <p className="text-xs font-black uppercase text-brass">Proof</p>
            <h2 className="mt-8 font-display text-2xl font-black text-navy">{item.title}</h2>
            <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="bg-white">
        <div className="section grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Review strategy</p>
            <h2 className="h2">Ask customers to review what buyers actually care about.</h2>
            <p className="body-large mt-5">
              Commercial cleaning reviews should reinforce reliability, communication, and scope clarity instead of vague praise.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reviewPrompts.map((prompt) => (
              <div key={prompt} className="rounded-brand border border-slate-200 bg-clean p-5 font-display text-lg font-black text-navy">
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
