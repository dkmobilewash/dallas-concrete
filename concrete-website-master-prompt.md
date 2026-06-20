# Universal Concrete Business Website — Master Build Prompt

> **How to use:** Paste this entire prompt into a new Claude Code session. Fill in the [BRACKETS] with your business details before running. Everything else is ready to go — the SEO structure, content frameworks, and technical architecture are built in.

---

## BUSINESS DETAILS (fill these in)

```
BUSINESS_NAME: [Your Business Name]
PHONE: [xxx-xxx-xxxx]
PHONE_HREF: [tel:+1xxxxxxxxxx]
EMAIL: [info@yourdomain.com]
DOMAIN: [https://www.yourdomain.com]
CITY: [Primary City]
STATE: [State]
STATE_CODE: [XX]
HOURS_WEEKDAYS: [Monday–Saturday: 8:00 AM – 6:00 PM]
HOURS_WEEKEND: [Sunday: Closed]
REPO_OWNER: [github-org-or-user]
REPO_NAME: [repo-name]
```

## SERVICE AREA CITIES (list 6–10 cities)

For each city, provide:
```
- City Name
- County
- 3–4 local landmarks or well-known areas
- 4–5 neighborhood names
```

Example:
```
1. Dallas — Dallas County
   Landmarks: White Rock Lake, Deep Ellum, Uptown Dallas, Bishop Arts District
   Neighborhoods: Oak Cliff, Lake Highlands, Preston Hollow, North Dallas, East Dallas

2. [City 2] — [County]
   Landmarks: [landmark1], [landmark2], [landmark3]
   Neighborhoods: [neighborhood1], [neighborhood2], [neighborhood3], [neighborhood4]
```

---

## PHASE 1: Project Setup & Tech Stack

**Non-negotiable stack:**
- Next.js 14 (NOT 15, NOT 16) — `npx create-next-app@14`
- React 18 (NOT 19)
- Tailwind CSS v3 with `tailwind.config.ts` (NOT v4 CSS-first config)
- TypeScript strict mode
- SSG via `generateStaticParams` for all dynamic routes
- `next/image` exclusively for images
- Lucide React for icons
- Deployment target: Vercel

**After scaffolding, verify:**
```bash
npx next --version   # Must show 14.x.x
cat package.json | grep '"next"'  # Must show "14.x.x"
cat package.json | grep '"react"' # Must show "^18"
```

**Next.js 14 params convention (NOT Next.js 16):**
```ts
// CORRECT — Next.js 14
export function generateMetadata({ params }: { params: { slug: string } }) { }
export default function Page({ params }: { params: { slug: string } }) { }

// WRONG — Next.js 16 (do NOT use)
// export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { }
```

**Install additional dependencies after scaffold:**
```bash
npm install lucide-react gray-matter next-mdx-remote resend @tailwindcss/typography
```

---

## PHASE 2: Design Tokens

**`tailwind.config.ts`** — implement exactly:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#1C1C1E',
          orange: '#E8520A',
          'orange-dark': '#C4420A',
          gray: '#6B7280',
          'gray-light': '#F3F4F6',
          'gray-mid': '#D1D5DB',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
```

**Google Fonts** — load via `<link>` tags in `<head>` inside `layout.tsx` (NOT `next/font/google`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

Apply `font-sans` class to `<body>` to activate Inter from tailwind config.

---

## PHASE 3: Data Layer

### `src/data/services.ts`

Create 7 services with this exact interface:
```ts
export interface Service {
  slug: string
  name: string
  shortName: string
  headline: string
  metaTitle: string
  metaDescription: string
  heroSubhead: string
  icon: string
  relatedSlugs: string[]
}
```

The 7 services (these are universal for concrete businesses):
1. **Concrete Driveways** — slug: `concrete-driveways`, icon: `Car`
2. **Concrete Patios** — slug: `concrete-patios`, icon: `Sofa`
3. **Concrete Walkways** — slug: `concrete-walkways`, icon: `FootprintsIcon`
4. **Concrete Foundations** — slug: `concrete-foundations`, icon: `Building2`
5. **Retaining Walls** — slug: `retaining-walls`, icon: `Layers`
6. **Stamped Concrete** — slug: `stamped-concrete`, icon: `Palette`
7. **Commercial Concrete** — slug: `commercial-concrete`, icon: `Warehouse`

**IMPORTANT for metaTitle:** Do NOT include the business name in metaTitle values. The layout template `'%s | [BUSINESS_NAME]'` appends it automatically. Including it in metaTitle causes duplicate brand names in title tags.

For each service, write:
- `metaTitle`: "[Service] Installation [CITY] [STATE_CODE]" (NO business name)
- `metaDescription`: 1 sentence with city, service, and phone number
- `headline`: "[Service] in [CITY], [STATE_CODE]"
- `heroSubhead`: 1 sentence describing the service value

### `src/data/cities.ts`

Create entries for each city in the service area:
```ts
export interface City {
  slug: string
  name: string
  county: string
  metaTitle: string
  metaDescription: string
  headline: string
  subhead: string
  landmarks: string[]
  neighborhoods: string[]
  intro: string
}
```

**IMPORTANT for metaTitle:** Same rule — do NOT include business name. Use format: "Concrete Contractor [City] [STATE_CODE]"

For each city write:
- `metaTitle`: "Concrete Contractor [City] [STATE_CODE]" (NO business name)
- `metaDescription`: 1 sentence with city name and phone number
- `headline`: "Concrete Contractor in [City], [STATE_CODE]"
- `subhead`: 1 sentence about serving this city
- `intro`: 2–3 sentences referencing the city's landmarks and neighborhoods naturally

### `src/data/site.ts`

```ts
export const site = {
  name: '[BUSINESS_NAME]',
  phone: '[PHONE]',
  phoneHref: '[PHONE_HREF]',
  email: '[EMAIL]',
  address: {
    city: '[CITY]',
    state: '[STATE]',
    stateCode: '[STATE_CODE]',
  },
  hours: {
    weekdays: '[HOURS_WEEKDAYS]',
    weekend: '[HOURS_WEEKEND]',
  },
  baseUrl: '[DOMAIN]',
  primaryKeywords: [
    '[CITY] Concrete Contractors',
    'Concrete Contractors [CITY] [STATE_CODE]',
    'Concrete Company [CITY]',
  ],
}
```

---

## PHASE 4: Folder & File Structure

Scaffold this exact structure:
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/page.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── ContactForm.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── services/
│   │   └── [slug]/page.tsx
│   ├── service-areas/
│   │   └── [slug]/page.tsx
│   ├── api/
│   │   └── contact/route.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── CityCard.tsx
│   │   ├── FaqAccordion.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── BreadcrumbNav.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ServiceAreasSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── CtaSection.tsx
│   └── seo/
│       ├── LocalBusinessSchema.tsx
│       ├── ServiceSchema.tsx
│       ├── FaqSchema.tsx
│       └── BreadcrumbSchema.tsx
├── content/
│   └── blog/          ← MDX blog posts go here
├── data/
│   ├── services.ts
│   ├── cities.ts
│   └── site.ts
└── lib/
    ├── metadata.ts
    └── blog.ts
```

---

## PHASE 5: SEO Infrastructure

### `src/lib/metadata.ts`

```ts
import { site } from '@/data/site'
import type { Metadata } from 'next'

export function buildMetadata({
  title,
  description,
  canonical,
}: {
  title: string
  description: string
  canonical: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
  }
}
```

**CRITICAL:** The layout template is `'%s | [BUSINESS_NAME]'`. The `title` passed to `buildMetadata` must NOT contain the business name — the template adds it. Failing this creates duplicate title tags like "Page | Business | Business" which Google truncates and flags.

### Root Layout Metadata

```ts
export const metadata: Metadata = {
  title: {
    default: '[BUSINESS_NAME]',
    template: '%s | [BUSINESS_NAME]',
  },
  description: 'Professional concrete contracting for driveways, patios, foundations, and more throughout [CITY] and the surrounding areas.',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
}
```

### JSON-LD Schemas

Create 4 schema components in `src/components/seo/`:

1. **LocalBusinessSchema** — LocalBusiness with name, phone, email, address, areaServed (all cities), openingHours, hasOfferCatalog (5 key services). Renders via `<script type="application/ld+json" dangerouslySetInnerHTML>`.
2. **ServiceSchema** — Service schema with name, description, provider, areaServed
3. **FaqSchema** — FAQPage schema with Question/Answer pairs
4. **BreadcrumbSchema** — BreadcrumbList with position, name, item URL

### Google Analytics

Add GA4 in layout.tsx via `next/script` with `strategy="afterInteractive"`, gated by `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID` env var. No tracking loads without the var.

---

## PHASE 6: Component Specifications

### Header
- Sticky with `bg-brand-charcoal`
- Text logo: "[BUSINESS_NAME]" in white bold
- Desktop: Services dropdown, Service Areas dropdown, About, Blog, Contact
- Dropdowns: hover on desktop, tap on mobile
- CTA: `bg-brand-orange` pill button — "Call [PHONE]"
- Mobile: hamburger icon, full-screen slide-down, uses `useState`
- Scroll past 80px: add `border-b border-brand-gray-mid/20`

### Footer
- `bg-brand-charcoal`, 4 columns: Company + hours | Services | Service Areas | Contact
- Bottom bar: copyright + "Licensed & Insured Concrete Contractor in [CITY], [STATE_CODE]"
- All content from `src/data/` — no placeholders

### Button
- `primary`: `bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-md`
- `secondary`: `border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white`
- `ghost`: `text-white underline underline-offset-4`
- Render as `<a>` for phone/mailto links, `<Link>` for internal navigation

### ServiceCard
- White card with Lucide icon (24px, `text-brand-orange`), h3 name, 1-sentence description
- "Learn More" link with arrow → `/services/[slug]`
- Hover: lift shadow + orange bottom border

### FaqAccordion
- Use `<details>`/`<summary>` for no-JS fallback, enhanced with `useState`
- Question: `font-semibold`, Answer: `text-brand-gray`
- Orange `+`/`−` indicator
- Injects FaqSchema for the page's FAQ items

### TestimonialCard
- Props: `{ quote: string, attribution: string }`
- Attribution format: "Homeowner in [City]" — NO fake names, NO star counts
- Add comment: `// TODO: Replace with verified Google/Yelp reviews before launch`

---

## PHASE 7: Page Content Requirements

### Homepage
- H1: "[CITY] Concrete Contractors"
- Title (via buildMetadata): "[CITY] Concrete Contractors" (template adds business name)
- Sections in order: HeroSection, ServicesGrid, WhyChooseUs, ServiceAreasSection, TestimonialsSection, FaqSection, CtaSection
- Hero CTAs: "Get Free Estimate" → `/contact`, "Call [PHONE]" → `tel:` link
- Homepage title must use `{ absolute: '[CITY] Concrete Contractors | [BUSINESS_NAME]' }` to ensure full title in static HTML

**WhyChooseUs — 6 items (NO fake statistics or years-in-business claims):**
1. Quality workmanship on every pour
2. Experienced, professional crews
3. Residential and commercial capacity
4. Clear communication and honest timelines
5. Durable installs built for [region] conditions
6. Attention to finish, detail, and cleanup

**Homepage FAQs — 5 questions:**
1. How much does a concrete driveway cost in [CITY]?
2. How long does concrete take to cure in [state climate description] heat?
3. Do you offer free estimates?
4. What cities do you serve in the [CITY] area?
5. Are you licensed and insured?

### Service Pages (`/services/[slug]`)
- `generateStaticParams` from services data
- `generateMetadata` using service metaTitle/metaDescription
- Breadcrumb: Home > Services > [Service Name] with BreadcrumbSchema
- ServiceSchema JSON-LD

**Section order:**
1. Breadcrumb
2. Hero (H1 from headline + heroSubhead)
3. Overview (H2: "What Are [Service Name] in [CITY]?") — 2 unique paragraphs
4. Benefits (H2: "Benefits of [Service Name]") — 4 items with icons
5. Our Process (H2: "How We Install [Service Name]") — 3–4 numbered steps
6. FAQs (H2: "Common Questions") — 4 FAQs with FaqSchema
7. Related Services — links from relatedSlugs
8. Service Area callout — "We install [service] throughout [City1], [City2], [City3], and surrounding cities."
9. CTA section

**Content differentiation anchors per service:**
- Driveways: vehicle weight, crack-free finishes, apron transitions, local weather
- Patios: outdoor living, shade considerations, drainage slope, expansion joints
- Walkways: ADA compliance, slip-resistant finishes, trip hazard prevention, curb-to-door flow
- Foundations: local soil type, pier and beam vs. slab, drainage proximity
- Retaining Walls: soil pressure, drainage behind walls, tiered vs. single-wall
- Stamped Concrete: pattern options, color hardeners, sealing schedule, UV stability
- Commercial: liability surfaces, heavy-load specs, ADA parking, business downtime minimization

### City Pages (`/service-areas/[slug]`)
- `generateStaticParams` from cities data
- Breadcrumb: Home > Service Areas > [City Name] with BreadcrumbSchema
- LocalBusinessSchema with city-specific addressLocality

**Section order:**
1. Breadcrumb + Hero (H1: headline, subhead)
2. Intro (city.intro + 1 additional paragraph referencing landmarks)
3. Services (H2: "Concrete Services in [City]") — all 7 with links
4. Neighborhoods (H2: "Concrete Work in [City] Neighborhoods") — reference neighborhoods, mention 1–2 common project types
5. City FAQs — 4 FAQs including city name
6. CTA

### Contact Page
- H1: "Get a Free Concrete Estimate in [CITY]"
- Form fields: Name, Phone, Email, Service (dropdown), City (dropdown), Project Description (textarea)
- API route `/api/contact` using Resend — gated by `RESEND_API_KEY` env var
- Contact details block: phone, email, hours
- LocalBusinessSchema on this page

### About Page
- H1: "About [BUSINESS_NAME]"
- Mark editable sections with `[PLACEHOLDER]` comments
- Safe claims: professional crews, quality materials, licensed and insured
- Do NOT invent founding year, owner name, or team size

### Blog
- H1: "Concrete Tips & Resources for [CITY] Homeowners"
- MDX-powered via `gray-matter` + `next-mdx-remote`
- Blog helper in `src/lib/blog.ts` reads from `src/content/blog/*.mdx`
- Dynamic `[slug]` route with `generateStaticParams`
- `@tailwindcss/typography` prose styling

---

## PHASE 8: Sitemap & Robots

### `src/app/sitemap.ts`
```ts
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'
import { getAllPosts } from '@/lib/blog'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = services.map(s => ({
    url: `${site.baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  const cityUrls = cities.map(c => ({
    url: `${site.baseUrl}/service-areas/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  const blogUrls = getAllPosts().map(post => ({
    url: `${site.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))
  return [
    { url: site.baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${site.baseUrl}/about`, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${site.baseUrl}/contact`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${site.baseUrl}/blog`, priority: 0.5, changeFrequency: 'weekly' },
    ...serviceUrls,
    ...cityUrls,
    ...blogUrls,
  ]
}
```

### `public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: [DOMAIN]/sitemap.xml
```

---

## PHASE 9: Environment Variables (set in Vercel)

| Variable | Purpose | Required |
|---|---|---|
| `RESEND_API_KEY` | Contact form email delivery | Yes (for form to work) |
| `CONTACT_EMAIL` | Where form submissions go | Optional (defaults to site.email) |
| `FROM_EMAIL` | Resend verified sender | Optional (defaults to onboarding@resend.dev) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | Optional |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console | Optional |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools | Optional |

---

## PHASE 10: Build Verification

After completing all pages, run:
```bash
npm run build
```

Fix all TypeScript errors and Next.js warnings before considering the build complete. The build must succeed with zero errors.

**Verify:**
- Total pages generated (expect 24+ static pages)
- No duplicate title tags (grep all `<title>` tags from build output)
- All dynamic routes generate via `generateStaticParams`
- sitemap.xml includes all pages
- Contact form API route compiles (shows as ƒ Dynamic)

**Then output a summary of:**
- Total pages generated
- All routes listed
- Any TODOs remaining in the code
- Post-launch checklist (Resend setup, GA4, Search Console, GBP, real photos, real reviews)

---

## POST-LAUNCH SEO CHECKLIST

After deploying:
1. □ Add `RESEND_API_KEY` in Vercel — test the contact form
2. □ Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel
3. □ Verify domain in Google Search Console, submit sitemap
4. □ Verify domain in Bing Webmaster Tools, submit sitemap
5. □ Claim/verify Google Business Profile, link to website
6. □ Replace testimonial placeholders with real reviews
7. □ Fill in About page `[PLACEHOLDER]` sections
8. □ Add real project photos to service pages
9. □ Write 1–2 blog posts per month targeting local long-tail keywords
10. □ Build local backlinks (chamber of commerce, supplier directories)

---

## BLOG POST STRATEGY

Drop `.mdx` files in `src/content/blog/` with this frontmatter format:
```yaml
---
title: "Post Title Here"
description: "Meta description for search results"
date: "YYYY-MM-DD"
excerpt: "Short excerpt for the blog listing page"
---
```

**Recommended first 7 posts (adapt city/region names):**
1. "How Much Does a Concrete Driveway Cost in [CITY]?" — cost guide
2. "How Much Does a Concrete Patio Cost in [CITY]?" — cost guide
3. "The Best Time of Year to Pour Concrete in [Region]" — seasonal guide
4. "Stamped Concrete vs. Pavers: Which Is Right for Your [CITY] Patio?" — comparison
5. "Understanding Concrete Curing in [Climate] Heat" — educational
6. "5 Signs Your Concrete Driveway Needs Replacement" — problem-aware
7. "Why [CITY] Homes Have Foundation Problems" — local authority (if clay soil applies)
