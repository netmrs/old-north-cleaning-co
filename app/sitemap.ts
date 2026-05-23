import type { MetadataRoute } from "next";
import { serviceAreaPages } from "@/lib/site";

const baseUrl = "https://oldnorthcleaning.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/services", "/about", "/service-areas", "/reviews", "/faq", "/contact"];
  const cityPaths = serviceAreaPages.map((area) => `/service-areas/${area.slug}`);

  return [...staticPaths, ...cityPaths].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" || path === "/contact" ? 1 : path.startsWith("/service-areas/") ? 0.85 : 0.8
  }));
}
