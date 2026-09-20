import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "fire-damage-restoration")!;

export const metadata: Metadata = pageMetadata({
  title: "Fire Damage Restoration",
  description:
    "Structural repair, soot and smoke cleanup, odor removal, and full fire damage restoration across the NYC tri-state area. Available 24/7 — call 516.491.1601.",
  path: "/services/fire-damage-restoration",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: service.name,
      item: `${SITE_URL}/services/${service.slug}`,
    },
  ],
};

export default function FireDamageRestorationPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <ServiceTemplate service={service} />
    </>
  );
}
