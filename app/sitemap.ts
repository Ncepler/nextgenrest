import type { MetadataRoute } from "next";
import { SERVICES, SITE_URL } from "@/lib/site-data";

const staticRoutes = [
  "",
  "/services",
  "/insurance-claims",
  "/renovation-rebuild",
  "/service-areas",
  "/about",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
