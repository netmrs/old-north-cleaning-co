# Old North Cleaning Co

Next.js website for Old North Cleaning Co, a Raleigh-based commercial cleaning business serving the Triangle.

## Pages

- Home
- Services
- About
- Service Areas
- Reviews
- FAQ
- Contact / Walkthrough

## Stack

- Next.js App Router
- Tailwind CSS
- Vercel-ready API route for form submissions
- Optional Resend email delivery

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Form Email Setup

The walkthrough and contact forms post to `/api/contact`.

Set these environment variables in Vercel:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_destination_email
CONTACT_FROM_EMAIL=Old North Cleaning Co <forms@yourdomain.com>
```

If Resend is not configured yet, the form falls back to preparing a mailto email.
