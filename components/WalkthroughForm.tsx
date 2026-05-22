"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "sent" | "fallback" | "error";

export function WalkthroughForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "walkthrough", ...payload })
      });

      if (response.ok) {
        setState("sent");
        form.reset();
        return;
      }

      openMailFallback(payload);
      setState("fallback");
    } catch {
      openMailFallback(payload);
      setState("fallback");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-brand border border-slate-200 bg-white p-5 shadow-lift md:grid-cols-2">
      <div className="md:col-span-2">
        <p className="text-sm font-black uppercase text-brass">Walkthrough request</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share enough detail to make the first call useful. No online booking pressure.
        </p>
      </div>
      <label className="field">
        Name
        <input className="field-input" name="name" autoComplete="name" required />
      </label>
      <label className="field">
        Business Name
        <input className="field-input" name="businessName" autoComplete="organization" required />
      </label>
      <label className="field">
        Phone
        <input className="field-input" name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label className="field">
        Email
        <input className="field-input" name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field md:col-span-2">
        Business Address
        <input className="field-input" name="businessAddress" autoComplete="street-address" required />
      </label>
      <label className="field">
        Approx Sq Ft
        <input className="field-input" name="approxSqFt" inputMode="numeric" />
      </label>
      <label className="field">
        Cleaning Frequency
        <select className="field-input" name="cleaningFrequency" defaultValue="">
          <option value="" disabled>
            Select frequency
          </option>
          <option>1x per week</option>
          <option>2-3x per week</option>
          <option>5x per week</option>
          <option>After-hours daily</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="field md:col-span-2">
        Preferred walkthrough time
        <select className="field-input" name="preferredTime" defaultValue="">
          <option value="" disabled>
            Select a time
          </option>
          <option>Weekday evenings</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
      </label>
      <label className="field md:col-span-2">
        Notes
        <textarea
          className="field-input min-h-32"
          name="notes"
          rows={compact ? 4 : 6}
          placeholder="Current cleaning schedule, access details, problem areas, or timing needs"
        />
      </label>
      <button className="button button-primary md:col-span-2" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Request a Walkthrough"}
      </button>
      <p className="text-sm text-slate-600 md:col-span-2" aria-live="polite">
        {messageForState(state)}
      </p>
    </form>
  );
}

function messageForState(state: FormState) {
  if (state === "sent") return "Thanks. Your walkthrough request was sent.";
  if (state === "fallback") return "Your email app opened with the request details. Send it to complete the request.";
  if (state === "error") return "Something went wrong. Please email hello@oldnorthcleaning.co.";
  return "This sends a walkthrough request. If email delivery is not configured yet, your email app will open instead.";
}

function openMailFallback(payload: Record<string, FormDataEntryValue>) {
  const lines = Object.entries(payload).map(([key, value]) => `${labelize(key)}: ${String(value)}`);
  const subject = encodeURIComponent("Walkthrough request");
  const body = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:hello@oldnorthcleaning.co?subject=${subject}&body=${body}`;
}

function labelize(value: string) {
  return value.replace(/([A-Z])/g, " $1").replace(/^./, (first) => first.toUpperCase());
}
