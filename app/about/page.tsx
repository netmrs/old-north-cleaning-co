import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Old North Cleaning Co is a Raleigh-based commercial cleaning company focused on reliability, systems, and communication."
};

export default function AboutPage() {
  return (
    <main>
      <section className="section grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="text-5xl font-black leading-none text-navy md:text-7xl">A Raleigh-based cleaning company built around reliability.</h1>
          <p className="body-large mt-6">
            Old North Cleaning Co was started for businesses that need cleaning to be simple, consistent, and professionally handled.
            The focus is not flashy language. It is showing up, following the scope, communicating quickly, and making the facility easier to run.
          </p>
        </div>
        <div className="rounded-brand border border-slate-200 bg-clean p-8 shadow-soft">
          <Image
            src="/assets/old-north-logo.png"
            alt="Old North Cleaning Co"
            width={900}
            height={520}
            className="mix-blend-multiply"
            priority
          />
        </div>
      </section>

      <section className="bg-clean">
        <div className="section grid gap-6 md:grid-cols-3">
          <article className="rounded-brand border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black text-navy">Local positioning</h2>
            <p className="mt-4 leading-8 text-slate-600">
              The company is based around Raleigh and serves Triangle businesses that value practical walkthroughs and responsive service.
            </p>
          </article>
          <article className="rounded-brand border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black text-navy">Why it started</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Many commercial buyers do not need a complicated vendor. They need a cleaning partner that documents expectations and follows through.
            </p>
          </article>
          <article className="rounded-brand border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black text-navy">How it operates</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Scopes, checklists, access routines, and feedback loops are used to keep cleaning consistent from visit to visit.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="max-w-3xl">
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
