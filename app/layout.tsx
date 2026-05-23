import type { Metadata } from "next";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://oldnorthcleaning.co"),
  title: {
    default: "Old North Cleaning Co | Commercial Cleaning Across the Triangle",
    template: "%s | Old North Cleaning Co"
  },
  description:
    "Reliable office and facility cleaning for businesses in Raleigh, Cary, Apex, Morrisville, and Durham.",
  openGraph: {
    title: "Old North Cleaning Co",
    description:
      "Reliable office and facility cleaning for businesses across the Triangle.",
    url: "https://oldnorthcleaning.co",
    siteName: "Old North Cleaning Co",
    images: ["/assets/old-north-logo.png"],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
