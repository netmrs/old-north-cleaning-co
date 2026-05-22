import type { Metadata } from "next";
import { GeneralContactForm } from "@/components/GeneralContactForm";
import { WalkthroughForm } from "@/components/WalkthroughForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a commercial cleaning walkthrough from Old North Cleaning Co."
};

export default function ContactPage() {
  return (
    <main>
      <section id="get-a-quote" className="section grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="text-5xl font-black leading-none text-navy md:text-7xl">Request a Walkthrough</h1>
          <p className="body-large mt-6">
            This is the best first step for commercial cleaning. Share the basics, then Old North Cleaning Co can walk the space and prepare a practical scope.
          </p>
          <div className="mt-8 rounded-brand border border-slate-200 bg-clean p-5">
            <p className="font-black text-navy">Preferred walkthrough times</p>
            <p className="mt-2 text-slate-600">Weekday evenings, Saturday, or Sunday.</p>
          </div>
        </div>
        <WalkthroughForm />
      </section>

      <section className="bg-clean" id="general-contact">
        <div className="section grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">General contact</p>
            <h2 className="h2">Have a question first?</h2>
            <p className="body-large mt-5">
              Use this for general questions. For pricing, the walkthrough form above is the right path.
            </p>
          </div>
          <GeneralContactForm />
        </div>
      </section>
    </main>
  );
}
