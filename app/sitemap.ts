import type { MetadataRoute } from "next";

const baseUrl = "https://oldnorthcleaning.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/about", "/service-areas", "/reviews", "/faq", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" || path === "/contact" ? 1 : 0.8
  }));
}
