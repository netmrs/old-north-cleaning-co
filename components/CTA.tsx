import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-navy">
      <div className="section grid gap-6 py-14 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="eyebrow">Next step</p>
          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">Request a walkthrough.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
            Commercial cleaning proposals work best after seeing the space, access needs, and schedule.
          </p>
        </div>
        <Link href="/contact" className="button button-primary">
          Request a Walkthrough
        </Link>
      </div>
    </section>
  );
}
