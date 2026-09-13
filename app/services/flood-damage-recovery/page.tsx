import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { SERVICES } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "flood-damage-recovery")!;

export const metadata: Metadata = pageMetadata({
  title: "Flood Damage Recovery",
  description:
    "Large-scale water removal, contamination assessment, and full property restoration after major flooding across the NYC tri-state area. Call 516.491.1601.",
  path: "/services/flood-damage-recovery",
});

export default function FloodDamageRecoveryPage() {
  return <ServiceTemplate service={service} />;
}
