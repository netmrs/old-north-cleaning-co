import Image from "next/image";
import Link from "next/link";
import { WalkthroughForm } from "@/components/WalkthroughForm";
import {
  bestFitAudiences,
  operatingPrinciples,
  processSteps,
  serviceAreaPages,
  serviceNotes,
  services,
  trustProof
} from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy bg-hero-grid bg-[length:auto,auto,48px_48px,48px_48px] text-white">
        <div className="section grid min-h-[calc(100vh-76px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="fade-up">
            <p className="eyebrow">Old North Cleaning Co</p>
            <h1 className="h1 max-w-5xl">Commercial Cleaning Across the Triangle</h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-white/82">
              Reliable office and facility cleaning for businesses in Raleigh, Cary, Apex, Morrisville, and Durham.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="button button-primary shadow-soft">
                Request a Walkthrough
              </Link>
              <Link href="/contact#get-a-quote" className="button button-secondary">
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="glass fade-up p-5">
            <div className="rounded-brand bg-white p-6">
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
              <div className="rounded-brand border border-white/15 bg-white/10 p-5">
                <p className="font-display text-4xl font-black">24 hr</p>
                <p className="mt-2 text-sm font-bold leading-6 text-white/72">walkthrough response target</p>
              </div>
              <div className="rounded-brand border border-white/15 bg-white/10 p-5">
                <p className="font-display text-4xl font-black">5</p>
                <p className="mt-2 text-sm font-bold leading-6 text-white/72">Triangle markets served</p>
              </div>
            </div>
            <div className="mt-4 rounded-brand border border-white/15 bg-white/10 p-5">
              <p className="font-display text-sm font-black uppercase text-brass">Facility signals</p>
              <div className="mt-4 grid gap-2 text-sm font-bold text-white/78">
                <span>Lobby and entry presentation</span>
                <span>Restroom and breakroom readiness</span>
                <span>Touchpoint and trash closeout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-8 relative z-10">
        <div className="mx-auto grid w-[min(1160px,calc(100%_-_32px))] gap-3 rounded-brand border border-slate-200 bg-white p-3 shadow-lift md:grid-cols-3 lg:grid-cols-6">
          {trustProof.map((item) => (
            <div key={item} className="rounded-brand bg-clean px-4 py-5 text-center font-display text-sm font-black text-navy">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="eyebrow">Commercial focus</p>
          <h2 className="h2">The right fit for working spaces that need consistency.</h2>
          <p className="body-large mt-5">
            The site should make one thing obvious: Old North is built for commercial buyers who expect clear communication and dependable recurring service.
          </p>
        </div>
        <div className="grid gap-4">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group grid gap-5 rounded-brand border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-harbor/40 hover:shadow-lift md:grid-cols-[72px_1fr_auto]"
            >
              <div className="grid h-16 w-16 place-items-center rounded-brand bg-navy text-xl font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="text-xs font-black uppercase text-brass">{service.eyebrow}</p>
                <h3 className="mt-1 font-display text-2xl font-black text-navy">{service.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{service.text}</p>
                <p className="mt-3 text-sm font-bold text-steel">{service.bestFor}</p>
              </div>
              <span className="self-center text-sm font-black text-harbor opacity-0 transition group-hover:opacity-100">
                View
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="section grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">Best fit</p>
            <h2 className="h2">Built for commercial buyers who need a cleaner system.</h2>
            <p className="body-large mt-5">
              The goal is not to sell every cleaning service. It is to make the right buyers feel like the process is clear before they reach out.
            </p>
          </div>
          <div className="grid gap-4">
            {bestFitAudiences.map((audience) => (
              <article key={audience.title} className="rounded-brand border border-slate-200 bg-clean p-5 transition hover:-translate-y-1 hover:shadow-soft">
                <h3 className="font-display text-2xl font-black text-navy">{audience.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Why choose Old North</p>
            <h2 className="h2">Built around the parts commercial buyers actually notice.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {operatingPrinciples.map((item) => (
              <div key={item} className="rounded-brand border border-slate-200 bg-clean p-5 font-display text-lg font-black text-navy">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="h2">Walk. Scope. Clean. Report.</h2>
          <p className="body-large mt-5">
            A simple operating rhythm makes the sales process clearer and the recurring service easier to manage.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article key={item.step} className="surface p-6">
              <span className="text-sm font-black text-brass">{item.step}</span>
              <h3 className="mt-8 font-display text-2xl font-black text-navy">{item.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="section">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">Service notes</p>
            <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">Concrete examples beat vague claims.</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              These are sample scope patterns, not fake case studies. They show buyers what a walkthrough turns into.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {serviceNotes.map((note) => (
              <article key={note.space} className="rounded-brand border border-white/15 bg-white/10 p-6">
                <p className="text-xs font-black uppercase text-brass">{note.frequency}</p>
                <h3 className="mt-6 font-display text-2xl font-black">{note.space}</h3>
                <p className="mt-4 text-sm font-bold uppercase text-white/55">Scope</p>
                <p className="mt-2 leading-7 text-white/78">{note.scope}</p>
                <p className="mt-5 text-sm font-bold uppercase text-white/55">Result</p>
                <p className="mt-2 leading-7 text-white/78">{note.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f1]">
        <div className="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Service areas</p>
            <h2 className="h2">Local commercial cleaning for the Triangle.</h2>
            <p className="body-large mt-5">
              A tighter service area keeps walkthroughs practical, scheduling easier, and communication faster.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceAreaPages.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group rounded-brand border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="text-sm font-black uppercase text-brass">Commercial cleaning</span>
                <span className="mt-2 block font-display text-3xl font-black text-navy group-hover:text-harbor">{area.city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section grid gap-10 lg:grid-cols-[0.75fr_1.25fr]" id="get-a-quote">
        <div>
          <p className="eyebrow">Final CTA</p>
          <h2 className="h2">Request a Walkthrough</h2>
          <p className="body-large mt-5">
            Share the basics and keep the process consultative. Commercial buyers expect a walkthrough before a real proposal.
          </p>
        </div>
        <WalkthroughForm compact />
      </section>
    </main>
  );
}
