import type { Metadata } from "next";
import { GeneralContactForm } from "@/components/GeneralContactForm";
import { WalkthroughForm } from "@/components/WalkthroughForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a commercial cleaning walkthrough from Old North Cleaning Co."
};

const afterSubmit = [
  "We review the business type, square footage, and preferred schedule.",
  "We coordinate a walkthrough time that works around your operating hours.",
  "You receive a practical scope before any recurring service begins."
];

export default function ContactPage() {
  return (
    <main>
      <section id="get-a-quote" className="section grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="text-5xl font-black leading-none text-navy md:text-7xl">Request a Walkthrough</h1>
          <p className="body-large mt-6">
            This is the best first step for commercial cleaning. Share the basics, then Old North Cleaning Co can walk the space and prepare a practical scope.
          </p>
          <div className="mt-8 rounded-brand border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-black text-navy">What happens next</p>
            <div className="mt-4 grid gap-3">
              {afterSubmit.map((item, index) => (
                <div key={item} className="grid grid-cols-[34px_1fr] gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-clean text-xs font-black text-harbor">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 rounded-brand border border-slate-200 bg-[#eef3f1] p-5">
            <p className="font-black text-navy">Preferred walkthrough times</p>
            <p className="mt-2 text-slate-600">Weekday evenings, Saturday, or Sunday.</p>
          </div>
        </div>
        <WalkthroughForm />
      </section>

      <section className="bg-white" id="general-contact">
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
