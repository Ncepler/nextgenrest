import Link from "next/link";
import {
  COMPANY_NAME,
  EMAIL,
  EMAIL_MAILTO,
  FOOTER_AREA_LINKS,
  FOOTER_SERVICE_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site-data";

/**
 * Footer (CLAUDE.md §7). `Site by vilas.studio` is required on every page,
 * small and unobtrusive, bottom-most line — do not remove or restyle it.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-text-on-dark">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-lg font-semibold">{COMPANY_NAME}</p>
            <p className="mt-2 text-[15px] leading-[1.6] text-text-on-dark-secondary">
              Fire, water, flood, mold, and asbestos restoration for the NYC
              tri-state area — on call 24/7/365.
            </p>
          </div>

          <FooterColumn title="Services" links={FOOTER_SERVICE_LINKS} />
          <FooterColumn title="Service Areas" links={FOOTER_AREA_LINKS} />

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-text-on-dark-secondary">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-[15px]">
              <li>
                <a href={PHONE_TEL} className="font-semibold text-text-on-dark hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_MAILTO} className="text-text-on-dark-secondary hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li className="text-text-on-dark-secondary">Available 24/7 · 365 days a year</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-[13px] text-text-on-dark-secondary md:flex-row md:items-center md:justify-between">
          <p>
            {COMPANY_NAME} © {year}
          </p>
          <a
            href="https://vilas.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-2"
          >
            Site by vilas.studio
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-[13px] font-semibold uppercase tracking-wide text-text-on-dark-secondary">
        {title}
      </p>
      <ul className="mt-4 flex flex-col gap-2 text-[15px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-text-on-dark-secondary hover:text-text-on-dark hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
