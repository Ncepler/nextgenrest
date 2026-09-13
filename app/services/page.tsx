import type { Metadata } from "next";
import { H1, Body } from "@/components/ui/Typography";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Restoration Services",
  description:
    "Fire, water, flood, mold, and asbestos restoration services for the NYC tri-state area — plus insurance claim management and post-restoration renovation.",
  path: "/services",
});

export default function ServicesHub() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <H1>Every Kind of Damage, One Team You Can Call</H1>
        <Body className="mt-5 text-text-secondary">
          From a single burst pipe to a full structure fire, we handle the
          full range of property damage restoration — and everything that
          comes after it, including your insurance claim and, if you want
          it, a rebuild that leaves your space better than before.
        </Body>
      </div>
      <div className="mt-14">
        <ServiceGrid />
      </div>
    </section>
  );
}
