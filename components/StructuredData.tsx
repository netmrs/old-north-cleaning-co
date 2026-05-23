import { serviceAreaNames } from "@/lib/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Old North Cleaning Co",
    url: "https://oldnorthcleaning.co",
    image: "https://oldnorthcleaning.co/assets/old-north-logo.png",
    description:
      "Commercial cleaning for offices, churches, fitness studios, medical-adjacent suites, managed properties, and shared workspaces across the Triangle.",
    slogan: "Walkthrough-first commercial cleaning across the Triangle.",
    areaServed: serviceAreaNames.map((name) => ({
      "@type": "City",
      name
    })),
    knowsAbout: [
      "Commercial cleaning",
      "Office cleaning",
      "Restroom sanitation",
      "Common area cleaning",
      "After-hours cleaning",
      "Floor care"
    ],
    makesOffer: [
      "Office cleaning",
      "Medical and dental office cleaning",
      "Church cleaning",
      "Fitness studio cleaning",
      "Property common area cleaning",
      "Restroom sanitation",
      "Trash removal",
      "Floor care"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}
