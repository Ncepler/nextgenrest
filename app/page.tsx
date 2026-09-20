import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { RoomStory } from "@/components/sections/RoomStory";
import { ServiceIndex } from "@/components/sections/ServiceIndex";
import { RegionAnchors } from "@/components/sections/RegionAnchors";
import { ClosingCtaBanner } from "@/components/sections/ClosingCtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Fire, Water, Flood, Mold & Asbestos Restoration — NYC Tri-State",
  description:
    "24/7 fire, water, flood, mold, and asbestos restoration across the NYC tri-state area. We manage your insurance claim directly. Call 516.491.1601.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <RoomStory />
      <ServiceIndex />
      <RegionAnchors />
      <ClosingCtaBanner />
    </>
  );
}
