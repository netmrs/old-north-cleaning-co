import Image from "next/image";
import Link from "next/link";
import { WalkthroughForm } from "@/components/WalkthroughForm";
import { serviceAreas, services } from "@/lib/site";

const trustItems = [
  "Fully insured",
  "Responsive communication",
  "Flexible after-hours scheduling",
  "Local Raleigh-based company"
];

const whyItems = [
  {
    title: "Communication",
    text: "Clear expectations, direct follow-up, and fast answers when your schedule or needs change."
  },
  {
    title: "Consistency",
    text: "A documented scope keeps visits focused on the work your facility actually needs."
  },
  {
    title: "Professionalism",
    text: "Respectful service for business environments, after-hours access, and customer-facing spaces."
  },
  {
    title: "Responsiveness",
    text: "Walkthrough requests, issues, and scope changes get handled quickly."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="section grid min-h-[calc(100vh-76px)] items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="eyebrow">Old North Cleaning Co</p>
            <h1 className="h1">Commercial Cleaning Across the Triangle</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/85">
              Reliable office and facility cleaning for businesses in Raleigh, Cary, Apex, Morrisville, and Durham.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="button button-primary">
                Request a Walkthrough
              </Link>
              <Link href="/contact#get-a-quote" className="button button-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="rounded-brand border border-white/20 bg-white p-6 shadow-soft">
            <Image
              src="/assets/old-north-logo.png"
              alt="Old North Cleaning Co"
              width={900}
              height={520}
              className="mix-blend-multiply"
              priority
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-brand border border-slate-200 bg-clean p-4">
                <p className="text-3xl font-black text-navy">24 hr</p>
                <p className="mt-1 text-sm font-bold text-slate-600">walkthrough response target</p>
              </div>
              <div className="rounded-brand border border-slate-200 bg-clean p-4">
                <p className="text-3xl font-black text-navy">5</p>
                <p className="mt-1 text-sm font-bold text-slate-600">Triangle service markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-clean">
        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-px py-5 md:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="rounded-brand bg-white px-4 py-5 text-center text-sm font-black text-navy">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="h2">Commercial-focused cleaning, without a bloated service menu.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-brand border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <h3 className="text-lg font-black text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-clean">
        <div className="section grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why choose Old North</p>
            <h2 className="h2">The work is only useful when it is consistent and easy to manage.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyItems.map((item) => (
              <article key={item.title} className="rounded-brand border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-black text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Service areas</p>
          <h2 className="h2">Local commercial cleaning for the Triangle.</h2>
          <p className="body-large mt-5">
            Old North Cleaning Co focuses on nearby business communities so communication stays fast and walkthroughs are practical.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {serviceAreas.map((area) => (
            <Link
              key={area}
              href={`/service-areas#${area.toLowerCase()}`}
              className="rounded-brand border border-slate-200 bg-white p-5 text-lg font-black text-navy transition hover:border-harbor hover:text-harbor"
            >
              {area}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-clean" id="get-a-quote">
        <div className="section grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Final CTA</p>
            <h2 className="h2">Request a Walkthrough</h2>
            <p className="body-large mt-5">
              Share your space, schedule, and cleaning needs. The proposal comes after the walkthrough, not before the space is understood.
            </p>
          </div>
          <WalkthroughForm compact />
        </div>
      </section>
    </main>
  );
}
