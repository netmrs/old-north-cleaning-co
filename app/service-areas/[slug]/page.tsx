import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { getServiceAreaBySlug, serviceAreaPages, services, serviceNotes } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceAreaPages.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return {};
  }

  return {
    title: area.title,
    description: area.metaDescription
  };
}

export default async function ServiceAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <main>
      <section className="bg-navy bg-hero-grid bg-[length:auto,auto,48px_48px,48px_48px] text-white">
        <div className="section grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">{area.city} service area</p>
            <h1 className="max-w-5xl font-display text-5xl font-black leading-none md:text-7xl">{area.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">{area.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="button button-primary shadow-soft">
                Request a Walkthrough in {area.city}
              </Link>
              <Link href="/services" className="button button-secondary">
                View Services
              </Link>
            </div>
          </div>
          <div className="glass p-5">
            <p className="font-display text-3xl font-black">{area.city}</p>
            <p className="mt-3 leading-7 text-white/75">{area.fit}</p>
          </div>
        </div>
      </section>

      <section className="section grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Common spaces</p>
          <h2 className="h2">Commercial spaces we can scope in {area.city}.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {area.commonSpaces.map((space) => (
            <div key={space} className="rounded-brand border border-slate-200 bg-white p-5 font-display text-lg font-black text-navy shadow-sm">
              {space}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="section grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Services available</p>
            <h2 className="h2">Focused commercial cleaning, not a bloated menu.</h2>
          </div>
          <div className="grid gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-brand border border-slate-200 bg-clean p-5 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-xs font-black uppercase text-brass">{service.eyebrow}</p>
                <h3 className="mt-1 font-display text-2xl font-black text-navy group-hover:text-harbor">{service.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{service.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">Local fit</p>
          <h2 className="h2">Why a walkthrough matters in {area.city}.</h2>
        </div>
        <div className="grid gap-3">
          {area.localNotes.map((note) => (
            <div key={note} className="rounded-brand border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
              {note}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="section">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">{area.city} scope examples</p>
            <h2 className="h2">What a recurring cleaning plan can look like.</h2>
            <p className="body-large mt-5">
              These are sample service patterns. The actual proposal is built after the walkthrough.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {serviceNotes.map((note) => (
              <article key={note.space} className="surface p-6">
                <p className="text-xs font-black uppercase text-brass">{note.frequency}</p>
                <h3 className="mt-6 font-display text-2xl font-black text-navy">{note.space}</h3>
                <p className="mt-4 leading-7 text-slate-600">{note.scope}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f1]">
        <div className="section">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">{area.city} FAQ</p>
            <h2 className="h2">Questions before you request a walkthrough.</h2>
          </div>
          <div className="grid gap-4">
            {area.faqs.map((faq) => (
              <article key={faq.question} className="rounded-brand border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-2xl font-black text-navy">{faq.question}</h3>
                <p className="mt-3 leading-8 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
