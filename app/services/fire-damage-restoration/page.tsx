import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { SERVICES } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "fire-damage-restoration")!;

export const metadata: Metadata = pageMetadata({
  title: "Fire Damage Restoration",
  description:
    "Structural repair, soot and smoke cleanup, odor removal, and full fire damage restoration across the NYC tri-state area. Available 24/7 — call 516.491.1601.",
  path: "/services/fire-damage-restoration",
});

export default function FireDamageRestorationPage() {
  return <ServiceTemplate service={service} />;
}
