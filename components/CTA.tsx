import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-navy bg-hero-grid bg-[length:auto,auto,44px_44px,44px_44px]">
      <div className="section-tight grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="eyebrow">Next step</p>
          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">Walk the space. Build the scope.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
            Commercial cleaning proposals work best after seeing the space, access needs, and schedule.
          </p>
        </div>
        <Link href="/contact" className="button button-primary shadow-soft">
          Request a Walkthrough
        </Link>
      </div>
    </section>
  );
}
