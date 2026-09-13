import type { Metadata } from "next";
import { COMPANY_NAME, SITE_URL } from "./site-data";

/** Build page metadata with a consistent title template and OG defaults. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${opts.title} | ${COMPANY_NAME}`,
      description: opts.description,
      url,
      siteName: COMPANY_NAME,
      type: "website",
    },
  };
}
