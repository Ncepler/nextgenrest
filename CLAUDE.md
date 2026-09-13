# CLAUDE.md — Next Generation Restoration (nextgenrest.com revamp)

This file is the permanent context for this repo. It is loaded into every Claude Code
session automatically — do not restate any of this in prompts written against this repo.

---

## 1. What this project is

A full rebuild of the marketing site for **Next Generation Restoration**, a fire / water /
flood / mold / asbestos restoration and insurance-claims company serving the NYC tri-state
area. The current live site (nextgenrest.com) is a 3-page Next.js site with thin, unstyled
content. This rebuild keeps the same company, same facts, same phone number and email, same
domain — it replaces the design, the information architecture, and the copy (same meaning,
new wording) with something that actually converts a panicked homeowner into a phone call.

**Never invent a fact.** Every number, license claim, certification, or service listed below
came from the live site or from Noah directly. If a page design calls for something not
listed here (a specific certification badge, a specific review, a specific team photo),
leave a clearly marked placeholder and flag it in the build report — do not invent one.

---

## 2. Hard facts — never alter these

- **Company name:** Next Generation Restoration
- **Phone:** 516.491.1601 — `tel:15164911601`
- **Email:** info@nextgenrest.com
- **Domain:** nextgenrest.com (keep as-is)
- **Services:** Fire damage restoration, Water damage restoration, Flood damage recovery,
  Mold remediation, Asbestos abatement, plus Direct insurance billing / claim management /
  adjustment services, plus post-restoration renovation & remodeling / design & planning
- **Service area:** NYC boroughs (Manhattan, Brooklyn, Queens, Bronx, Staten Island), Long
  Island (Nassau & Suffolk County), Westchester, New Jersey (Bergen County), Connecticut
  (Fairfield County)
- **Availability:** 24/7, 365 days a year
- **Copyright line:** "Next Generation Restoration © [current year]" in the footer

Do not change the meaning of any claim on the old site (e.g. "we handle insurance
communication directly," "24/7/365," "design and planning services for renovation") even
though every sentence is being reworded. If a claim needs a citation or proof point that
doesn't exist yet (years in business, license number, certifications), leave a bracketed
placeholder like `[LICENSE #]` rather than making one up.

---

## 3. Stack

Next.js (App Router) + Tailwind CSS + Supabase (for the contact/quote-request form storage
and, if wired up, a simple lead-notification table) + Vercel deploy. Match Noah's existing
Vilas Studio build conventions: TypeScript, `app/` directory, component files per section,
no CSS-in-JS, no UI kit beyond Tailwind + shadcn/ui primitives if needed for the before/after
slider and accordion (FAQ).

---

## 4. Sitemap — 13 pages, in this order of build priority

1. `/` — Home
2. `/services` — Services hub (grid linking to the 5 below)
3. `/services/fire-damage-restoration`
4. `/services/water-damage-restoration`
5. `/services/flood-damage-recovery`
6. `/services/mold-remediation`
7. `/services/asbestos-abatement`
8. `/insurance-claims` — insurance billing, claim management, adjustment services
9. `/renovation-rebuild` — post-restoration renovation, design & planning
10. `/service-areas` — NYC boroughs, LI, Westchester, NJ, CT, with a map and per-region blurb
11. `/about` — company story, "what sets us apart," steadfast-partner positioning
12. `/faq`
13. `/contact` — emergency CTA, form, phone, email, map

This is more pages than the current 3-page site on purpose: restoration-industry research
(below) is consistent that a generic "Services" list under-converts against dedicated pages
per service line, because each service line targets a different urgent search ("water damage
restoration near me" vs. "mold remediation" are different buyers with different anxieties)
and a dedicated page lets the CTA and trust proof speak to that specific fear.

---

## 5. Competitive research — what works, what doesn't (paraphrased from 2026 industry sources)

**What converts on restoration company sites:**
- A phone number that is tappable in the header on every single page, not just Contact —
  restoration research puts emergency-search mobile traffic at roughly 78%.
- Certification, license, and insurance proof placed **above the fold**, not buried in an
  About page — this is the single biggest credibility gap between a template site and a
  purpose-built one.
- Real photos of the crew and equipment on real jobs. Stock photos of "a mold spot" or "a
  flooded generic basement" read as a red flag to anxious buyers — it signals no real work
  to show. Since Noah doesn't have client photos yet, use clearly-labeled placeholder image
  slots (`[CREW PHOTO — JOB SITE]`) rather than stock photography that pretends to be real.
- A before/after slider for completed jobs. Interactive comparison is repeatedly cited as a
  standout feature on the highest-converting restoration sites.
- Dedicated pages per service *and* per major service area/city — both are separate SEO and
  trust surfaces, and "Restoration in [City]" reliably outperforms a single generic
  service-area page.
- Insurance language stated as its own value prop ("we deal with your insurance company for
  you") — homeowners often don't know remediation work is covered, and this single line
  removes their biggest hesitation before they've even called.
- A short, one-handed-completable emergency form as an alternative to calling, for the
  fraction of visitors who won't call yet.
- A visible response-time promise (even a directional one, e.g. "on-site fast" rather than
  an unverifiable exact number) — timing is the #1 anxiety in an active-damage situation.

**What hurts these sites:**
- Slow load times and heavy hero video/images — a stressed visitor on a bad cellular
  connection bounces in seconds if the page doesn't render fast.
- A buried phone number (footer-only, or requiring a click into Contact).
- A single flat "Services" page with no depth — reads as a company that does a little of
  everything and isn't a specialist in any one disaster.
- Any AI-generated or stock "disaster" imagery that looks staged — it undercuts the urgency
  and authenticity the whole page is trying to build.

Build every page against this list. The Home hero, the sticky mobile call bar, and the
insurance value prop are the three highest-leverage items — do not cut any of them for time.

---

## 6. Design system

### 6.1 Color — validated with the pitch-deck skill's `check_palette.py` (WCAG + APCA, monitor medium)

The palette uses **two accents with a declared reason**, per the pitch-deck skill's color
reference: this is a "genuine opposition" case (fire vs. water is literally the content, and
the two accents also let insurance/trust content read differently from urgent-action content).
The **orange is the one CTA color** — it means "call now / act now" everywhere on the site,
including on the water/mold pages, so the meaning never gets diluted. The **teal-blue is a
supporting/thematic color** used for insurance trust content, badges, and the water-line
motif — it never appears on a button that competes with the orange CTA on the same screen.

| Role | Hex | Use | Contrast (validated) |
|---|---|---|---|
| `bg` (light, default) | `#FAFAF7` | Page background | — |
| `surface` | `#EFEFEA` | Cards, callout blocks | text_primary 15.6:1 |
| `rule` | `#DCDCD5` | Hairline dividers | 1.32:1 (intentionally quiet) |
| `text-primary` | `#14171C` | Headlines, body | 17.2:1 on bg — PASS |
| `text-secondary` | `#4B505A` | Sub-copy, captions | 7.7:1 on bg — PASS |
| `text-tertiary` | `#53565D` | Meta text, timestamps | 7.0:1 on bg — PASS |
| `accent` (CTA / urgency) | `#D6410F` | Every "Call Now" / primary button, emergency banner | 4.3:1 on bg, 4.5:1 white-on-accent — PASS |
| `accent-2` (trust / water) | `#0E6E8C` | Insurance section accents, water-service iconography, secondary links | 5.5:1 on bg — PASS |
| `on-accent` | `#FFFFFF` | Text/icons on either accent fill | — |
| `bg-dark` (footer + emergency band) | `#0D1B2A` | Footer, hero overlay scrim, sticky call bar on mobile | — |
| `text-on-dark` (primary) | `#F2F3F5` | Headlines on `bg-dark` | 15.7:1 — PASS |
| `text-on-dark` (secondary) | `#C8CED6` | Sub-copy on `bg-dark` | 11.0:1 — PASS |

Never use pure black or pure white as a surface (per the skill's dark/light-ground research;
`#14171C` and `#FAFAF7` are the near-black/near-white already chosen for exactly this reason).
The accent (`#D6410F`) is a punchy red-orange — this is the "vibrant" color Noah asked for — but
it is tuned down two steps from a pure `#E8491C` internet-orange specifically so it clears
4.5:1 as button text; do not brighten it back up without re-running `check_palette.py`.

Colorblind check: accent vs. accent-2 measured at ΔE 68 worst-case across protanopia,
deuteranopia, and tritanopia simulation — they do not merge for colorblind visitors.

### 6.2 Typography

- **Display / headlines:** Space Grotesk (Google Fonts, via `next/font/google`) — weight 500–700.
  A grotesk with slightly squared terminals reads as modern-industrial without being cold —
  right register for a restoration company that also does renovation/design work.
- **Body / UI:** Inter — weight 400–500 for body, 600 for labels/buttons.
- **Scale (mobile → desktop):** H1 36px → 56px, H2 28px → 40px, H3 22px → 28px, body 16px →
  17px, small/meta 13px → 14px. Line height 1.15 for headlines, 1.6 for body.
- Never more than these two families anywhere on the site.

### 6.3 Spacing, radius, elevation

- Spacing scale (Tailwind default 4px base is fine): section vertical padding `py-20`
  mobile / `py-28` desktop; container max-width `1280px` with `px-6` mobile / `px-8` desktop.
- **Corner radius:** cards & callouts `12px` (`rounded-xl`), buttons `9999px` (full pill —
  a pill CTA button reads as "tap me" more strongly than a squared one, and it visually
  separates the one loud action from the squared, corporate-adjacent cards around it),
  input fields `10px` (`rounded-lg`), the before/after slider frame `16px` (`rounded-2xl`).
- **Shadow:** one soft shadow token only — `shadow-[0_8px_24px_-8px_rgba(13,27,42,0.18)]` —
  used on cards that float above `bg`, never stacked with a border.
- **Border:** `1px solid #DCDCD5` (the `rule` token) on cards sitting on `surface`, omitted
  on cards sitting directly on `bg` (shadow alone is enough separation there).

### 6.4 Motion (the "make it feel alive" layer)

Keep every animation purposeful — restoration buyers are stressed, not browsing for fun — but
this is explicitly a place to make the site feel expensive rather than templated:

- **Scroll reveal:** sections fade up 16px + opacity 0→1 over 500ms, `ease-out`, triggered
  once at 20% viewport visibility (use `framer-motion`'s `whileInView` or an
  IntersectionObserver hook — Claude Code's choice, match whatever the repo already uses).
- **Sticky mobile call bar:** a `bg-dark` bar pinned to the bottom of the viewport on mobile
  only, containing the phone number as a full-width pill button in `accent`. It slides in
  after 200px of scroll (`translateY` 100%→0, 300ms) rather than being present on first paint,
  so the hero's own CTA gets the first click.
- **Before/after slider:** a draggable vertical divider (image comparison component) on every
  service page — drag or tap-and-hold to reveal "after." This is the single highest-value
  interactive element per the research above; do not ship it as a static side-by-side image
  pair, build the actual drag interaction.
- **Counter animation:** any stat callout (e.g. "24/7 · 365 Days" or a future "X properties
  restored" once Noah has a real number) counts up from 0 once in view, 1.2s, `ease-out`.
- **Hover:** cards lift 4px + shadow deepens over 150ms; buttons darken accent by ~8% on
  hover, no color hue shift.
- **Emergency banner pulse:** the top-of-page emergency strip ("24/7 Emergency Response —
  Call Now") gets a very subtle background pulse (opacity 100%→92%→100%, 2.4s loop,
  `ease-in-out`) — subtle enough to not look broken, present enough to read as "urgent, live."
- No parallax, no full-page scroll-jacking, no autoplaying video with sound. This is a
  service business a scared homeowner is visiting on a cracked phone screen — motion should
  feel premium and calm, never gimmicky.

---

## 7. Component specs

**Header (sticky, all pages):** logo left, nav center/right (`Services`, `Insurance
Claims`, `Renovation`, `Service Areas`, `About`), phone number as a filled `accent` pill
button, always visible, far right. On scroll past 80px, header background goes from
transparent-over-hero to solid `bg` with a `rule` bottom border.

**Hero (Home):** full-bleed background (photo of a restored/renovated interior — NOT a
damage photo; lead with the *outcome*, not the disaster, per the "opportunity for renewal"
angle already in the old copy) with a `bg-dark` gradient scrim bottom 40% so headline/CTA
stay legible (verify contrast on the actual chosen image before shipping — this is exactly
what the hero-imagery skill's luminance checks are for if that skill is available in-session).
Headline + one-line subhead + two buttons: primary `accent` "Call Now: 516.491.1601", secondary
outline "Get Emergency Help" scrolling to the contact form.

**Trust strip (Home, directly under hero):** four short items in a single row (stack on
mobile): "24/7 · 365 Days a Year", "Direct Insurance Billing", "NYC Tri-State Coverage",
"Fire · Water · Mold · Asbestos". Plain text + icon, no cards, on `surface` background band.

**Service card (grid on Home + `/services`):** icon, service name, one-sentence description,
"Learn More →" text link in `accent-2`. Card background `bg`, `rule` border, `12px` radius.

**Before/After slider component:** used on every `/services/*` page — see Motion section 6.4.

**Insurance value strip:** a distinct `accent-2`-tinted callout block (not full-bleed, a
contained card) reading roughly "We deal with your insurance company so you don't have to" —
appears on Home, every service page, and `/insurance-claims`.

**FAQ accordion:** standard single-open accordion, `surface` background per item, `+`/`–`
icon rotates 45° on open (200ms).

**Footer:** `bg-dark`. Logo + one-line tagline, service links column, service-area links
column, contact block (phone as tap-to-call, email as mailto, "24/7/365" line), copyright
line, and — **required on every page, small and unobtrusive, bottom-most line of the
footer** — `Site by vilas.studio` linking to `https://vilas.studio` in `text-on-dark`
secondary color, no special styling beyond an underline-on-hover.

---

## 8. Page-by-page copy — same meaning as the live site, all new wording

Use this copy verbatim; do not have Claude Code re-paraphrase it further. Headings are
marked `H1`/`H2`/etc. Anywhere a fact isn't available yet (team bios, certifications,
specific years in business, real testimonials), leave a bracketed placeholder — do not
invent a name, a number, or a quote.

### `/` — Home

**H1:** Disaster Doesn't Wait. Neither Do We.
**Subhead:** Fire, water, flood, mold, and asbestos restoration for the NYC tri-state area —
on call 24 hours a day, every day of the year.
**CTAs:** `Call Now: 516.491.1601` (primary) · `Get Emergency Help` (secondary, scrolls to form)

**Trust strip:** 24/7 · 365 Days a Year — Direct Insurance Billing — NYC Tri-State Coverage —
Fire · Water · Mold · Asbestos

**H2 — What We Do**
Property damage doesn't schedule itself around your calendar, so we don't either. Next
Generation Restoration responds around the clock to fire, smoke, water, flood, mold, and
asbestos emergencies across the New York metro area, working to bring every home and
business we touch back to the condition it was in before disaster struck — or better.

**H2 — The Difference Is How We Handle the Whole Job**
Restoration is only half the work. The other half is the insurance company, and that's where
most homeowners get stuck. We take that burden off your plate — managing claims, handling
adjuster communication, and pushing for every dollar of coverage you're owed — so you can
focus on your family, not paperwork.

**H2 — Recovery Can Also Be a Fresh Start**
Once the damage is handled, you're left with a choice: put everything back exactly as it
was, or use the moment to make it better. Our design and renovation team can turn a
restoration project into a real upgrade — refreshed layouts, updated finishes, a space that
works better than it did before the damage ever happened.

**Service grid (5 cards → each `/services/*` page):**
- Fire Damage Restoration — Structural repair, soot and smoke cleanup, full recovery from fire loss.
- Water Damage Restoration — Extraction, drying, and dehumidification for leaks and floods alike.
- Flood Damage Recovery — Full-scale cleanup and restoration after major flooding events.
- Mold Remediation — Identification, containment, and removal, plus prevention going forward.
- Asbestos Abatement — Safe removal handled to strict health and safety standards.

**H2 — Local, and Genuinely Local**
We work across the NYC boroughs, Long Island, Westchester, New Jersey, and Connecticut — not
as an outside contractor passing through, but as a team that lives in the same communities we
serve. When disaster hits close to home, you want a company that treats it that way too.

**Closing CTA banner (on `bg-dark`):** You're Not Doing This Alone. / Call us any hour of any
day and we'll walk you through exactly what happens next. / `Call Now: 516.491.1601`

---

### `/services` — Services Hub

**H1:** Every Kind of Damage, One Team You Can Call
**Intro:** From a single burst pipe to a full structure fire, we handle the full range of
property damage restoration — and everything that comes after it, including your insurance
claim and, if you want it, a rebuild that leaves your space better than before.

Then the same 5-card grid as Home, each linking out.

---

### `/services/fire-damage-restoration`

**H1:** Fire Damage Restoration
**Intro:** Fire damage rarely stays contained to what actually burned — smoke, soot, and
water from suppression efforts spread the damage further than the flames ever reached. We
handle the complete recovery: structural repair, soot and smoke removal, odor treatment, and
full restoration of the affected space.
**What's included:** Structural repair · Soot and smoke cleanup · Smoke odor removal ·
Content cleaning · Full rebuild coordination
**[Before/After slider placeholder — real job photos]**

---

### `/services/water-damage-restoration`

**H1:** Water Damage Restoration
**Intro:** Whether it's a slow leak you just discovered or a burst pipe flooding a room in
minutes, water damage gets worse the longer it sits. Our team responds fast with extraction,
drying, and dehumidification to stop the damage before it spreads — and before it turns into
mold.
**What's included:** Water extraction · Structural drying · Dehumidification · Moisture
monitoring · Mold-prevention treatment
**[Before/After slider placeholder — real job photos]**

---

### `/services/flood-damage-recovery`

**H1:** Flood Damage Recovery
**Intro:** Flooding brings its own set of problems beyond standard water damage — larger
volumes, contamination risk, and damage across an entire property rather than one room. We
bring the scale of response a flood actually requires, from initial cleanup through full
restoration.
**What's included:** Large-scale water removal · Contamination assessment · Structural
drying · Full property restoration
**[Before/After slider placeholder — real job photos]**

---

### `/services/mold-remediation`

**H1:** Mold Remediation
**Intro:** Mold spreads fast and often starts somewhere you can't see — behind a wall, under
flooring, inside ductwork. We find it, contain it so it can't spread further during removal,
remove it completely, and put treatments in place to keep it from coming back.
**What's included:** Mold inspection · Containment · Removal · Prevention treatment ·
Post-remediation verification
**[Before/After slider placeholder — real job photos]**
*(See also: SporesRUs, our dedicated mold-specialist brand, for deep mold-only expertise —
cross-link once that site is live, per Noah's direction.)*

---

### `/services/asbestos-abatement`

**H1:** Asbestos Abatement
**Intro:** Older properties often have asbestos in places you'd never expect — insulation,
flooring, ceiling tile. Removing it safely requires strict adherence to health and safety
standards, which is exactly how our team handles every job, start to finish.
**What's included:** Asbestos testing · Safe containment · Certified removal · Disposal
compliant with health and safety regulations
**[Before/After slider placeholder — real job photos]**

---

### `/insurance-claims`

**H1:** We Handle Your Insurance Company So You Don't Have To
**Intro:** Dealing with an insurance claim on top of property damage is its own kind of
stressful. We take that off your hands — managing the paperwork, the billing, and the
back-and-forth with adjusters — so the process moves faster and you get the full coverage
you're entitled to.
**H2 — Direct Insurance Billing:** We bill your insurance company directly, handling the
paperwork so you don't have to front the cost or manage the process yourself.
**H2 — Insurance Claim Management:** From filing to final payout, we manage your claim from
end to end, working to make sure nothing gets missed or shortchanged.
**H2 — Insurance Adjustment Services:** Our team works directly with adjusters to make sure
the damage is assessed accurately — and that your claim reflects its true, full value.
**CTA:** Already dealing with an insurance headache? Call 516.491.1601 and let us take it
from here.

---

### `/renovation-rebuild`

**H1:** Turn Restoration Into a Renovation
**Intro:** Every restoration project is also a chance to rebuild better than before. Once the
damage is handled, our design and planning team can help you reimagine the space — new
layouts, updated finishes, functional upgrades — guided by your vision and built by people
who already know every inch of the property.
**H2 — Design & Planning:** We work with you from concept through completion, planning a
renovation that fits both how you live and what the space allows.
**H2 — Renovation & Remodeling:** From small updates to full remodels, our renovation team
picks up right where restoration leaves off — no need to bring in a separate contractor who
doesn't know the property's history.
**CTA:** Talk to our team about turning your restoration into a renovation — Call 516.491.1601

---

### `/service-areas`

**H1:** Serving the NYC Tri-State Area
**Intro:** We're not an outside company passing through — we live and work across the same
communities we serve. Our team responds throughout the NYC boroughs, Long Island,
Westchester, New Jersey, and Connecticut, day or night.
**Area list (each a short block, map alongside):**
- NYC Boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island
- Long Island — Nassau County and Suffolk County
- Westchester County
- New Jersey — including Bergen County
- Connecticut — including Fairfield County
**[Map embed placeholder]**

---

### `/about`

**H1:** Your Steadfast Partner Through Property Damage
**Intro:** Disasters don't check the calendar before they strike, which is why we're
available 24 hours a day, 365 days a year. We specialize in restoring homes and businesses
after fire, smoke, water, flood, mold, and asbestos damage — working to return every property
to its pre-damage condition or better, as quickly and thoroughly as possible.
**H2 — A Client-First Approach:** What sets us apart is handling the entire job, not just the
physical repair. We take on the complicated, often frustrating process of dealing with
insurance companies directly, managing communication with insurers so the process moves
faster and you get the coverage you actually deserve.
**H2 — More Than a Service Provider:** Serving the NYC boroughs, Long Island, New Jersey,
Westchester, and Connecticut, we consider ourselves part of these communities, not an outside
company that shows up after something goes wrong and disappears once the check clears.
**H2 — Available Around the Clock:** From the moment you call to the day your space is fully
restored, we're with you at every step — working toward a fast, complete recovery that
restores not just your property, but your peace of mind.
**[Team photos placeholder]** **[Certifications/licenses placeholder]**

---

### `/faq`

Write 6–8 FAQ entries covering the questions restoration research says buyers actually ask
before calling: Does insurance cover this? How fast can someone get here? Do you handle the
insurance claim for me? What's the difference between water damage and flood damage
(coverage-wise this matters to buyers)? Do you test for mold before and after? What areas do
you serve? Is this a 24/7 line? Draft the actual answers using only the facts in Section 2 —
flag any question that needs a fact not yet on file (e.g. an exact average response time)
rather than inventing one.

---

### `/contact`

**H1:** Get Help Now
**Intro:** Available 24 hours a day, 365 days a year. Call us directly or send the details
below and we'll get back to you right away.
**Call block:** `516.491.1601` — large, tap-to-call, `accent` colored.
**Email block:** `info@nextgenrest.com` — tap-to-email.
**Form fields:** Name, Phone, Email, Property Address, Type of Damage (dropdown: Fire /
Water / Flood / Mold / Asbestos / Not Sure), Message. Submit → store in Supabase table
`contact_submissions`, and show a confirmation state referencing the phone number as the
faster option.
**[Map embed placeholder]**

---

## 9. SEO / schema

- `LocalBusiness` (or more specifically `HomeAndConstructionBusiness` — verify current
  schema.org guidance) JSON-LD on every page with name, phone, email, `areaServed` listing
  the five regions in Section 2, and `priceRange` omitted (not disclosed).
- Unique `<title>` and meta description per page, built around the specific service/area —
  do not reuse the old site's single generic meta description across every page.
- `alt` text on every image describing the actual content (never "image1.jpg" or empty alt).
- `sitemap.xml` and `robots.txt` generated for all 13 routes.

## 10. Rules for every Claude Code session on this repo

- The word **"template"** never appears in user-facing text — that's a Vilas Studio-wide
  rule; use "style" if the concept ever comes up (it likely won't on this site).
- Never invent a certification, license number, year-founded date, testimonial, or specific
  statistic. Use a bracketed placeholder and flag it in the report instead.
- Every page keeps the phone number tap-to-call in the header, no exceptions.
- `Site by vilas.studio` (linking to `https://vilas.studio`) appears in the footer on every
  single page, styled per Section 7.
- Match existing Vilas Studio repo conventions (component structure, Tailwind config,
  Supabase client setup) rather than introducing new patterns.
- If a build task turns out ambiguous, or a fact needed doesn't exist in this file — stop
  and ask. Don't guess.
