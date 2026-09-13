import { SERVICES } from "@/lib/site-data";
import { ServiceCard } from "./ServiceCard";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {SERVICES.map((service, i) => (
        <Reveal key={service.slug} delay={i * 0.05}>
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  );
}
