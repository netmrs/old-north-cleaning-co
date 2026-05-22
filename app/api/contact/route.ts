import { NextResponse } from "next/server";

type ContactPayload = Record<string, unknown> & {
  type?: "walkthrough" | "general";
  email?: string;
  name?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Old North Cleaning Co <forms@oldnorthcleaning.co>";

  if (!resendKey || !toEmail) {
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  const subject =
    payload.type === "walkthrough"
      ? `Walkthrough request from ${stringValue(payload.businessName) || stringValue(payload.name)}`
      : `Website message from ${stringValue(payload.name)}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject,
      text: formatPayload(payload)
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Email could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function validatePayload(payload: ContactPayload) {
  if (!payload || typeof payload !== "object") return "Invalid request.";
  if (!payload.name || typeof payload.name !== "string") return "Name is required.";
  if (!payload.email || typeof payload.email !== "string") return "Email is required.";
  if (!payload.email.includes("@")) return "A valid email is required.";

  if (payload.type === "walkthrough") {
    if (!payload.businessName || typeof payload.businessName !== "string") return "Business name is required.";
    if (!payload.phone || typeof payload.phone !== "string") return "Phone is required.";
    if (!payload.businessAddress || typeof payload.businessAddress !== "string") return "Business address is required.";
  }

  return null;
}

function formatPayload(payload: ContactPayload) {
  return Object.entries(payload)
    .map(([key, value]) => `${labelize(key)}: ${stringValue(value)}`)
    .join("\n");
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value : "";
}

function labelize(value: string) {
  return value.replace(/([A-Z])/g, " $1").replace(/^./, (first) => first.toUpperCase());
}
