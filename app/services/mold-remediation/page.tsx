import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { SERVICES } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "mold-remediation")!;

export const metadata: Metadata = pageMetadata({
  title: "Mold Remediation",
  description:
    "Mold inspection, containment, removal, and prevention treatment across the NYC tri-state area. Available 24/7 — call 516.491.1601.",
  path: "/services/mold-remediation",
});

export default function MoldRemediationPage() {
  return <ServiceTemplate service={service} />;
}
