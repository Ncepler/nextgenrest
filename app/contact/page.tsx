import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Small } from "@/components/ui/Typography";
import { JsonLd } from "@/components/JsonLd";
import { PHONE_DISPLAY, PHONE_TEL, SERVICE_AREAS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get help now — call Next Generation Restoration, available 24 hours a day, 365 days a year across the NYC tri-state area.",
  path: "/contact",
});

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

/**
 * Calls-only page: one large ember call tile, no email, no map, no form.
 * The phone number inside the tile is sized to be the largest text on the
 * page (bigger than even the H1 in PageIntro at every viewport width).
 */
export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageIntro h1="Get Help Now">
        Available 24 hours a day, 365 days a year. Call us directly and
        we&apos;ll walk you through what happens next.
      </PageIntro>

      {/* data-call-redundant: this section is the page's own giant call
          CTA, so the sticky mobile call bar hides while it's in view. */}
      <section
        data-call-redundant
        className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28"
      >
        <Reveal>
          <a
            href={PHONE_TEL}
            className="press-feedback mx-auto flex max-w-2xl flex-col items-center rounded-2xl bg-ember px-8 py-14 text-center text-white shadow-soft hover:bg-ember-hover md:px-14 md:py-20"
          >
            <Small className="font-semibold uppercase tracking-[0.08em] text-white/80">
              Call Now
            </Small>
            <span className="mt-4 font-display text-[clamp(3.25rem,7vw+1.75rem,7.5rem)] font-bold leading-[1] tracking-[-0.02em] tabular-nums">
              {PHONE_DISPLAY}
            </span>
            <span className="mt-5 font-body text-[17px] font-medium text-white/85">
              Available 24/7 · 365 days a year
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 max-w-2xl border-t border-line pt-10 text-center">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
              Serving the NYC Tri-State Area
            </p>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.id} className="font-body text-[15px] font-medium text-ink">
                  {area.name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
