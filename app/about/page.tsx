import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Old North Cleaning Co is a Raleigh-based commercial cleaning company focused on reliability, systems, and communication."
};

const values = [
  {
    title: "Local and reachable",
    text: "Built around Raleigh and the surrounding Triangle markets, with practical walkthroughs and direct communication."
  },
  {
    title: "Systems over slogans",
    text: "Scopes, access notes, frequencies, and recurring priorities are documented before the work becomes routine."
  },
  {
    title: "Communication first",
    text: "Changes, issues, and supply needs should be visible early instead of becoming recurring frustration."
  }
];

export default function AboutPage() {
  return (
    <main>
      <section className="section grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="text-5xl font-black leading-none text-navy md:text-7xl">
            A Raleigh-based cleaning company built around reliability.
          </h1>
          <p className="body-large mt-6">
            Old North Cleaning Co exists for businesses that need cleaning to be simple, consistent, and professionally handled.
            The focus is showing up, following the scope, communicating quickly, and making the facility easier to run.
          </p>
        </div>
        <div className="relative rounded-brand bg-navy p-4 shadow-lift">
          <div className="rounded-brand bg-white p-8">
            <Image
              src="/assets/old-north-logo.png"
              alt="Old North Cleaning Co"
              width={900}
              height={520}
              className="mix-blend-multiply"
              priority
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-brand bg-white/10 p-4 text-white">
              <p className="text-3xl font-black">Raleigh</p>
              <p className="mt-1 text-sm font-bold text-white/70">local company</p>
            </div>
            <div className="rounded-brand bg-white/10 p-4 text-white">
              <p className="text-3xl font-black">Scope</p>
              <p className="mt-1 text-sm font-bold text-white/70">before service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="surface p-6">
              <h2 className="text-2xl font-black text-navy">{value.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="max-w-4xl rounded-brand border border-slate-200 bg-[#eef3f1] p-8 md:p-10">
          <p className="eyebrow">Communication-first</p>
          <h2 className="h2">A clear scope beats vague promises.</h2>
          <p className="body-large mt-5">
            Old North Cleaning Co is built around plain communication before, during, and after service. That means clear walkthrough notes,
            realistic proposals, direct follow-up, and changes documented before they become recurring problems.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}
