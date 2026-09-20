import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "asbestos-abatement")!;

export const metadata: Metadata = pageMetadata({
  title: "Asbestos Abatement",
  description:
    "Certified, compliant asbestos testing, containment, and removal across the NYC tri-state area. Available 24/7 — call 516.491.1601.",
  path: "/services/asbestos-abatement",
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

export default function AsbestosAbatementPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <ServiceTemplate service={service} />
    </>
  );
}
