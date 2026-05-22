import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Old North Cleaning Co, including insurance, after-hours cleaning, pricing, supplies, and start timing."
};

const faqs = [
  {
    question: "Are you insured?",
    answer: "Yes. Old North Cleaning Co is built for commercial work and communicates insurance details during the walkthrough and proposal process."
  },
  {
    question: "Do you clean after-hours?",
    answer: "Yes. Flexible after-hours scheduling is available for offices and facilities that need cleaning outside normal business hours."
  },
  {
    question: "What industries do you serve?",
    answer: "The core focus is offices, medical and dental offices, churches, fitness studios, and property common areas."
  },
  {
    question: "How does pricing work?",
    answer: "Pricing depends on square footage, frequency, access, restroom count, floor needs, traffic, and the final scope from the walkthrough."
  },
  {
    question: "Do you provide supplies?",
    answer: "Cleaning supplies can be included in the scope. Restroom paper products and consumables can be discussed during the walkthrough."
  },
  {
    question: "How quickly can we start?",
    answer: "Start timing depends on the walkthrough, scope approval, access setup, and schedule. The goal is to move quickly without guessing at the scope."
  }
];

export default function FAQPage() {
  return (
    <main>
      <section className="bg-clean">
        <div className="section">
          <p className="eyebrow">FAQ</p>
          <h1 className="max-w-4xl text-5xl font-black leading-none text-navy md:text-7xl">Answers before the walkthrough.</h1>
          <p className="body-large mt-6 max-w-3xl">
            These questions reduce friction before a business reaches out.
          </p>
        </div>
      </section>

      <section className="section grid gap-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-brand border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-navy">{faq.question}</h2>
            <p className="mt-3 leading-8 text-slate-600">{faq.answer}</p>
          </article>
        ))}
      </section>

      <CTA />
    </main>
  );
}
