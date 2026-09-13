import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { SERVICES } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "asbestos-abatement")!;

export const metadata: Metadata = pageMetadata({
  title: "Asbestos Abatement",
  description:
    "Certified, compliant asbestos testing, containment, and removal across the NYC tri-state area. Available 24/7 — call 516.491.1601.",
  path: "/services/asbestos-abatement",
});

export default function AsbestosAbatementPage() {
  return <ServiceTemplate service={service} />;
}
