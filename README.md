# Truly Asia Global Trade — Website

A production-ready corporate website for Truly Asia Global Trade, built with
Next.js (App Router), TypeScript, and Tailwind CSS.

## 1. Architecture overview

```
app/                    Routes (App Router)
  layout.tsx            Global <html>/<body>, fonts, SEO metadata, Navbar/Footer
  page.tsx              Home
  about/page.tsx         About
  products/page.tsx      Products
  contact/page.tsx       Contact
  globals.css            Tailwind layers + base styles
  sitemap.ts / robots.ts Auto-generated sitemap.xml and robots.txt
  icon.png               Favicon (generated from the placeholder logo)

components/             Reusable UI building blocks (Navbar, Footer, Hero,
                        ProductCard/Grid, CEOSection, ContactCard,
                        WhatsAppButton, CtaButton, Lightbox, Reveal, etc.)

data/
  company.ts            Single source of truth for contact details, the
                         phone-number toggle, WhatsApp numbers, and social
                         links
  products.ts            Product catalog — add a new product by adding one
                         object to the array; every page that lists
                         products reads from here

lib/utils.ts            Small class-name merge helper

public/images/           Image assets, organized by purpose (see section 4)
```

Design tokens (colors, type, spacing, shadows) live in `tailwind.config.ts`.
The palette is a deep navy (`port`), a warm neutral background (`sand`), and
a turmeric-gold accent (`clay`) — chosen to reflect the actual products
being sourced rather than a generic template look.

There is no database, backend, authentication, or shopping cart, by design —
this is a brochure/lead-generation site whose primary conversion path is
WhatsApp and email.

## 2. Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To confirm a production build has no errors:

```bash
npm run build
npm start
```

## 3. Deploy to Vercel

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — leave the default build settings
   (`npm run build`, output handled automatically).
4. Click **Deploy**. Vercel will give you a `*.vercel.app` URL immediately.
5. To use your paid domain: in the Vercel project, go to
   **Settings → Domains**, add your domain, and follow Vercel's DNS
   instructions (usually an A record or CNAME at your domain registrar).
6. Once the domain is live, update `siteUrl` in `app/layout.tsx`,
   `app/sitemap.ts`, and `app/robots.ts` to match it exactly (currently set
   to a placeholder: `https://www.trulyasiaglobaltrade.com`).

Alternatively, from the command line:

```bash
npm install -g vercel
vercel        # first deploy / preview
vercel --prod # production deploy
```

## 4. Replacing placeholder content

All current images are generated placeholders (navy/brand-colored panels
with a label) so the layout, cropping, and aspect ratios can be judged
immediately. Replace them by keeping the same file name and dimensions
(or similar aspect ratio) — no code changes needed.

| What | File to replace | Used in |
|---|---|---|
| **Logo** | `public/images/logo/logo.png` | Navbar, Footer, favicon source (`app/icon.png` — regenerate or replace separately) |
| **CEO photo** | `public/images/ceo/mehboob-ali-khan.jpg` | Home (CEO preview), About (Founder & CEO section) |
| **Hero photo (main)** | `public/images/hero/hero-main.jpg` | Home hero |
| **Hero photo (secondary)** | `public/images/hero/hero-secondary.jpg` | Home, "Built Around Reliable Trade" |
| **About story photo** | `public/images/hero/about-story.jpg` | About, "Our Story" |
| **Open Graph image** | `public/images/hero/og-image.jpg` | Social share previews (1200×630) |
| **Broomsticks photos** | `public/images/products/broomsticks.jpg`, `broomsticks-2.jpg` | Home featured product, Products page (gallery/lightbox) |
| **Turmeric photo** | `public/images/products/turmeric.jpg` | Products page |
| **Coffee beans photo** | `public/images/products/coffee-beans.jpg` | Products page |
| **Cacao photo** | `public/images/products/cacao.jpg` | Products page |

Keep product photos roughly square (1:1) and hero/story photos roughly 4:3
or 4:5 to match the existing crops.

## 5. Adding the telephone number later

Open `data/company.ts` and set:

```ts
PHONE_NUMBER: "+92 91 1234567",
```

The Navbar and Footer call buttons are already wired to this value and
appear automatically as soon as it's non-empty — no other file needs to
change.

## 6. Adding social media links later

In `data/company.ts`:

```ts
social: {
  facebook: "https://facebook.com/yourpage",
  instagram: "https://instagram.com/yourpage",
  linkedin: "https://linkedin.com/company/yourpage",
},
```

Any entry left as `""` stays hidden. Icons appear in the Footer
automatically once a URL is added.

## 7. Changing company/contact/domain information later

Everything else — company name, WhatsApp numbers, email, office address,
founding year — is also in `data/company.ts`. The production domain used
for SEO metadata (Open Graph, sitemap, robots) is set as `siteUrl` near the
top of `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.

## 8. Adding a new product later

Add one object to the `products` array in `data/products.ts`:

```ts
{
  slug: "new-product",
  name: "New Product",
  origin: "Thailand",              // optional
  availability: "AVAILABLE",       // or "UNAVAILABLE"
  summary: "One-line summary for cards.",
  description: "Longer description shown on the Products page.",
  image: "/images/products/new-product.jpg",
  imageAlt: "Description of the photo for screen readers",
  whatsappMessage: "Hello Truly Asia Global Trade, I am interested in ...",
}
```

Drop the matching image into `public/images/products/`. The Products page
and the homepage "other products" section pick it up automatically.

## 9. Design refresh (v3) — a real redesign, not just polish

After feedback that the site still felt template-y despite v2's motion
additions, this version changes the actual structure and typography rather
than adding more effects on top of the same layout:

- **Typeface change**: headings now use Fraunces, a characterful serif,
  instead of a generic sans-serif — paired with Inter for body text and UI.
  This is the single biggest lever for making a site feel premium/editorial
  rather than templated, and it's why the same layout can look completely
  different with a font swap.
- **Full-bleed dark hero**: the homepage hero is now a full-width image
  with a navy duotone overlay and large serif headline overlaid directly on
  it, instead of a boxed image sitting beside text. It bridges into the
  next section with an overlapping "fact card" (Founded / Based in / Sourcing
  from) — a common technique in premium editorial sites for adding depth.
- **De-templated sections**: the "what we focus on" section on the
  homepage is now a numbered editorial list (large serif numerals, hairline
  dividers) instead of four identical icon cards — the repeated card grid
  was a big part of what read as generic.
- **Editorial product cards**: product cards are now image-forward, with
  the name overlaid on the photo via a gradient scrim, rather than a photo
  sitting above a plain white text block.
- **CEO section**: added a pull-quote treatment with a large decorative
  quotation mark and an italic serif statement above the biography.
- **Sub-page heroes** (About/Products/Contact) got a matching treatment:
  larger serif headlines with an italic accent word, a small uppercase
  eyebrow label, and a soft background glow, so they feel connected to the
  homepage instead of reverting to a plain heading-and-paragraph banner.

## 10. Design refresh (v4) — spacing, color, and motion coverage

Follow-up round based on specific feedback:

- **Tighter spacing**: reduced vertical section padding and grid gaps across
  all four pages — the site no longer feels like it has large empty gaps
  between sections.
- **Removed the small decorative ring** that sat at the bottom-right of the
  CEO's circular photo.
- **Two-tone navy/off-white identity**: the background palette moved from a
  warm cream tone to a cleaner, more neutral off-white
  (`tailwind.config.ts` → `sand` colors), and several sections that were
  plain white were converted to full dark-navy bands (the featured-product
  section on the homepage now uses the same navy gradient as the hero and
  "Why work with us" section) so the navy/off-white contrast reads clearly
  as you scroll, rather than several near-identical off-white/white shades
  blending together.
- **Fixed small broomstick gallery images**: the two broomstick photos on
  the Products page were being squeezed into an unnecessarily narrow
  container; removed that constraint so they display at the same visual
  weight as the other product photos.
- **3D tilt effect extended sitewide**: the mouse-based 3D tilt
  (`components/tilt.tsx`) is now applied to the CEO photo, contact cards,
  the "what we focus on" list rows, the "why work with us" tiles, the
  hero's floating fact card, and the product images on the Products page —
  in addition to the product cards and hero image from the previous round.

## 11. Design refresh (v5) — full navy theme, larger CEO photo, tilt everywhere

- **The whole site is now dark navy**, not just accent sections: body
  background, navbar, mobile menu, every section on all four pages, and
  every card (product cards, contact cards, approach cards) use dark navy
  backgrounds with off-white text. The only intentionally light element is
  the solid button style (a white pill), which stays light specifically so
  it's visible against the navy — everything else is dark.
- **CEO photo**: rebuilt with a thicker clay-gold ring (higher contrast
  against navy than the earlier white ring) and sized up to 240px, so it
  reads clearly rather than blending into the background.
- **3D tilt extended to every image on the site**, including the "Our
  story" photo on the About page and the gallery thumbnails in the product
  lightbox (previously only some images had it).

## 12. Design refresh (v6) — rounded corners, borders, motion, second office

- **Rounded corners**: every sharp `rounded-sm` corner site-wide has been
  replaced — large image/card containers now use a soft `rounded-2xl`,
  smaller elements use `rounded-xl`, and all buttons/pills (CTAs, WhatsApp
  buttons, badges, the navbar WhatsApp button, mobile menu buttons) are now
  fully rounded (`rounded-full`) for a softer, more modern feel.
- **Visible borders on images**: image containers that had a thin, barely
  visible border now use a clearer `border-2 border-white/15` so photos
  read as intentionally framed against the dark background.
- **More hover motion**: every remaining static image (the "Our story"
  photo, the featured product image, the Products page photos, and the CEO
  portrait) now zooms slightly on hover in addition to the existing 3D
  tilt, matching the effect already on the product grid.
- **Second office added**: `data/company.ts` now has an `offices` array
  (Peshawar, Pakistan and Jakarta, Indonesia). The About page has a new
  "Our Offices" section generated from that list — add a third office
  later by adding one more object to the array, no other changes needed.
- Fixed two contrast bugs introduced by the v5 navy conversion: a route
  line and a couple of cards were rendering in dark text/colors that
  blended into their now-dark backgrounds instead of showing light text.

## 13. Design refresh (v7) — both offices on the Contact page

The Contact page previously only showed the Peshawar address (via
`company.address`). It now has its own "Our Offices" section, generated
from the same `company.offices` array used on the About page, showing both
Peshawar and Jakarta side by side. The WhatsApp/Email cards above it were
simplified from a 3-column to a 2-column layout to make room. Adding a
third office updates both pages automatically since they share one data
source.

## 14. Notes

- `gen_placeholders.py` (in the project root) is the script used to
  generate the placeholder images; it's not part of the running site and
  can be deleted at any time.
- Tailwind, TypeScript, and ESLint are configured; `npm run lint` is
  available if you want to run it as part of CI.
