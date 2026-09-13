import { EMAIL, PHONE_DISPLAY, COMPANY_NAME, SITE_URL } from "./site-data";

/**
 * LocalBusiness JSON-LD (CLAUDE.md §9). Rendered once, site-wide, from the
 * root layout via <JsonLd>. `priceRange` is intentionally omitted — not
 * disclosed.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY_NAME,
    telephone: "+1-516-491-1601",
    email: EMAIL,
    url: SITE_URL,
    areaServed: [
      { "@type": "AdministrativeArea", name: "New York City Boroughs" },
      { "@type": "AdministrativeArea", name: "Nassau County, NY" },
      { "@type": "AdministrativeArea", name: "Suffolk County, NY" },
      { "@type": "AdministrativeArea", name: "Westchester County, NY" },
      { "@type": "AdministrativeArea", name: "Bergen County, NJ" },
      { "@type": "AdministrativeArea", name: "Fairfield County, CT" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    // display phone kept alongside the E.164 telephone for readability in tooling
    additionalProperty: {
      "@type": "PropertyValue",
      name: "displayPhone",
      value: PHONE_DISPLAY,
    },
  };
}
