"use client";

import { useState } from "react";

export function GeneralContactForm() {
  const [status, setStatus] = useState("Send Message");
  const [note, setNote] = useState("Use this for general questions. Walkthrough requests should use the full form above.");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "general", ...payload })
      });

      if (response.ok) {
        setStatus("Sent");
        setNote("Thanks. Your message was sent.");
        form.reset();
        return;
      }
    } catch {
      // Fall through to mail fallback.
    }

    const body = encodeURIComponent(Object.entries(payload).map(([key, value]) => `${key}: ${String(value)}`).join("\n"));
    window.location.href = `mailto:hello@oldnorthcleaning.co?subject=Old North Cleaning Co question&body=${body}`;
    setStatus("Send Message");
    setNote("Your email app opened with the message details.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-brand border border-slate-200 bg-clean p-5">
      <label className="field">
        Name
        <input className="field-input" name="name" required />
      </label>
      <label className="field">
        Email
        <input className="field-input" name="email" type="email" required />
      </label>
      <label className="field">
        Phone
        <input className="field-input" name="phone" type="tel" />
      </label>
      <label className="field">
        Message
        <textarea className="field-input min-h-32" name="message" rows={5} required />
      </label>
      <button className="button button-primary" type="submit">
        {status}
      </button>
      <p className="text-sm text-slate-600" aria-live="polite">
        {note}
      </p>
    </form>
  );
}
