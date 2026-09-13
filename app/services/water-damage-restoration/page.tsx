import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { SERVICES } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "water-damage-restoration")!;

export const metadata: Metadata = pageMetadata({
  title: "Water Damage Restoration",
  description:
    "Fast water extraction, structural drying, and dehumidification for leaks and floods across the NYC tri-state area. Available 24/7 — call 516.491.1601.",
  path: "/services/water-damage-restoration",
});

export default function WaterDamageRestorationPage() {
  return <ServiceTemplate service={service} />;
}
