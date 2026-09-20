import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "flood-damage-recovery")!;

export const metadata: Metadata = pageMetadata({
  title: "Flood Damage Recovery",
  description:
    "Large-scale water removal, contamination assessment, and full property restoration after major flooding across the NYC tri-state area. Call 516.491.1601.",
  path: "/services/flood-damage-recovery",
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

export default function FloodDamageRecoveryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <ServiceTemplate service={service} />
    </>
  );
}
