# Openhand Foundation — NGO website template

A complete, responsive, accessible static website for a non-profit. No build step, no
dependencies, no framework — plain HTML, CSS and vanilla JavaScript. Drop it on any host
(Netlify, GitHub Pages, Cloudflare Pages, S3, a plain Apache/nginx box) and it works.

"Openhand Foundation" is placeholder branding. Everything below tells you what to swap.

## Run it locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Opening `index.html` directly with `file://` also works, but a local server matches
production behaviour more closely.

## Two home page designs

The site ships with two alternative home pages. Both link to the same interior pages, so
you can pick one and delete the other.

| File | Style | Stylesheet |
| --- | --- | --- |
| `index.html` | Warm charity — amber `#F5B335`, near-black, cream, Bitter serif headings, square corners, black-and-white photography, donation progress bars (Humanite-inspired) | `assets/css/style.css` + `assets/css/warm.css` |
| `home-giveon.html` | Modern charity — coral `#E23B33`, navy `#232A3E`, lime `#D8F26B`, Inter Tight, floating pill nav, full-bleed colour photo hero, glass cards, 24px radii (Giveon-inspired) | `assets/css/giveon.css` (standalone) |

To make either one the site's front page, rename it to `index.html` (renaming the other
first).

`about.html` is built on the warm theme too, so it shares the header, footer and
components with `index.html`. The remaining interior pages still use the neutral system
in `assets/css/style.css` — see [Porting a page to the warm theme](#porting-a-page-to-the-warm-theme).
If you keep `home-giveon.html` as your front page instead, either restyle `about.html`
or accept that the two designs sit side by side.

### Photography

Both designs now ship with **real CC0 / public-domain photographs** in
`assets/img/photos/` — free for commercial use, no attribution required. Every file,
its creator and its source link are listed in [CREDITS.md](CREDITS.md).

They are stand-ins: the people in them were photographed at unrelated organisations, so
swap in your own pictures before launch. Keep the same paths and update the `width`/`height`
attributes to match. The amber design converts photos to black-and-white in CSS
(`filter: grayscale(100%)`), so give it colour originals.

The original labelled placeholder SVGs are still in `assets/img/` if you want to go back
to blank slots while you shoot.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home (amber design): photo hero, action cards, about collage, causes with progress bars, impact band, events, volunteer CTA |
| `home-giveon.html` | Home (coral/navy design): full-bleed hero with rotating story badge, impact counters, about, services, dark feature band, causes, programs list, testimonial, CTA |
| `about.html` | Warm theme. Photo banner, story, mission/method/values, the five-year model (`#model`), impact counters, team & trustees (`#team`), partner quote, `#finances` transparency section |
| `programs.html` | **Not yet built on the warm theme** — the "Causes" nav link points here. Program-level impact stats plus a detail block per program (`#learning`, `#livelihoods`, `#health`, `#water`) |
| `news.html` | Warm theme. Blog index: photo banner, featured post, then nine post cards three per row with pagination |
| `news-2.html` | Page two of the blog: nine more post cards and the matching pagination state |
| `news-post.html` | Warm theme. Article template opened by every Read more: banner, byline details, prose body, pull quote, figure, subscribe panel, three related posts |
| `events.html` | Warm theme. Photo banner, featured next event (`#open-day`), then **All events** — nine cards, three per row, each with an image, copy and a Read more button — and pagination |
| `events-2.html` | Page two of the events listing: nine more cards and the matching pagination state |
| `event-detail.html` | Event detail template opened by every Read more: banner, key details, article prose, running order, image gallery, register panel, three related events |
| `contact.html` | Warm theme. Validated contact form, contact detail cards, `#give` block with three giving routes, map placeholder, `<details>` FAQ accordion |
| `404.html` | Not-found page |

## Structure

```
assets/
  css/style.css   design tokens + neutral component styles (every page)
  css/warm.css    warm charity theme — opt in with <body class="warm">
  css/giveon.css  coral/navy theme, standalone (home-giveon.html only)
  js/main.js      nav, counters, filters, reveal-on-scroll, form validation
  img/            placeholder SVG artwork (replace with photography)
```

## Porting a page to the warm theme

`index.html` and `about.html` share one theme file, `assets/css/warm.css`. A page opts in
with three things:

```html
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/warm.css">   <!-- after style.css -->
...
<body class="warm">
```

plus the Google Fonts `<link>` for Bitter/Caveat/Inter that both pages carry in `<head>`.
Everything in `warm.css` is scoped to `.warm`, so a page without that class is untouched.

Copy the header and footer blocks verbatim from `about.html` — they are identical on both
pages — and build the body from the `c-` components. The ones interior pages tend to want:

| Component | What it is |
| --- | --- |
| `.c-pagehead` | Dark photo banner with `.c-crumbs` breadcrumb, `<h1>` and a lead paragraph |
| `.c-section` / `.c-section--cream` | Section padding; the `--cream` variant for alternating bands |
| `.c-head` / `.c-head--center` | Eyebrow + heading + intro paragraph |
| `.c-about` | Two-column grid, vertically centred |
| `.c-collage` | Overlapping photo pair (`.c-collage-main` + `.c-collage-sub`) |
| `.c-pillars` / `.c-pillar` | Three-up cards; add `.c-pillar--amber` to highlight one |
| `.c-steps` / `.c-step` | Numbered phase cards with a watermark numeral |
| `.c-band` (+ `.c-band--flat`) | Dark counter band; `--flat` drops the side photo and runs four across |
| `.c-team` / `.c-member` | Team cards with a `.c-monogram` initials tile |
| `.c-quote` | Pull quote with a photo and an amber badge |
| `.c-panel`, `.c-meters`, `.c-docs` | White card, labelled percentage bars, download list |
| `.c-cta` | Full-bleed closing call to action |
| `.c-spotlight` | Featured item: photo with an overlapping amber date badge, beside a body column |
| `.c-details` | Two-column `<dl>` of icon + label + value on a cream ground |
| `.c-filters` / `.c-filter` | Filter button row; the pressed one goes amber (wire it up with `data-filter-group`) |
| `.c-ecards` / `.c-ecard` | Card grid — three per row, two at 980px, one at 660px. Image with an amber date badge, chip, meta line, excerpt, and a Read more button pinned to the bottom |
| `.c-pagination` / `.c-page` | Pager; `aria-current="page"` goes amber, `aria-disabled="true"` greys out Prev/Next |
| `.c-gallery` | Three-up image strip that drops grayscale on hover |
| `.c-agenda` | Time-and-description running order |
| `.c-chip` | Small category label |
| `.c-empty` | Empty state shown when a filter matches nothing |
| `.c-numlist` | Ordered list with amber numbered squares |
| `.c-measure` / `.c-lead` | Constrain a block to the 42rem article column; intro paragraph |
| `.c-contact` | Form-beside-sidebar grid, stacking at 940px |
| `.c-infocards` / `.c-infocard` | Contact detail tiles: amber icon square beside a heading and lines of text |
| `.c-field-row` | Two form fields side by side, stacking at 620px |
| `.c-faq` | Accordion built on `<details>`/`<summary>` — no JavaScript |
| `.c-map` | Dashed placeholder block; drop a map embed inside it |

The buttons are `.c-btn` with `--amber`, `--dark` or `--outline`, and `--sm` for the
compact size.

Note that photos in this theme are greyscaled in CSS (`filter: grayscale(100%)`). A
`filter` makes an element a stacking context, so any badge you position over a photo
needs an explicit `z-index` to stay on top — see `.c-quote-mark`.

## Making it yours

**1. Name and branding.** Search-and-replace `Openhand Foundation` across the `.html`
files. Replace `assets/img/logo.svg` with your own mark (square, renders at 28px).

**2. Colours and type.** Everything lives in the `:root` block at the top of
`assets/css/style.css`:

```css
--brand: #4f46e5;   /* primary — buttons, links, active states */
--accent: #059669;  /* positive/secondary accents */
--ink / --ink-soft / --ink-faint;   /* text */
--line / --surface / --surface-alt; /* borders and backgrounds */
--font-sans: …;     /* one family, whole site */
```

The dark-mode palette is the `@media (prefers-color-scheme: dark)` block just below —
update both. No other file contains a hard-coded colour.

**3. Images.** Replace the files in `assets/img/`. Card and article images are `1200×675`
(16:9). Keep the `width`/`height` attributes in the HTML in sync so pages don't jump while
loading.

The home page hero has no image on purpose: it is a composed "impact snapshot" panel built
from HTML and CSS (`.panel` in the stylesheet), so it stays sharp at any size and needs no
photography. Edit the numbers directly in `index.html`; the bar widths are inline
`style="width:92%"` values.

**4. Copy.** All text is inline in the HTML — no CMS, no JSON. The placeholder copy is
deliberately concrete so you can see the shape of a real page; overwrite it.

## How the interactive bits work

**Animated stat counters** — any element with `data-count` counts up when scrolled into
view. It respects `prefers-reduced-motion`.

```html
<div class="stat-value" data-count="48200" data-suffix="+">0</div>
<!-- also: data-prefix="$", data-decimals="1" -->
```

**Category filters** — used on news and events. The button group points at a list by id;
each item declares its category:

```html
<div class="filters" data-filter-group="news-list">
  <button class="filter" data-filter="all" aria-pressed="true">All</button>
  <button class="filter" data-filter="impact" aria-pressed="false">Impact</button>
</div>
<div id="news-list">
  <article data-category="impact">…</article>
</div>
<p class="empty-state" data-empty-for="news-list" hidden>Nothing here yet.</p>
```

**Reveal on scroll** — add `class="reveal"` to any block.

**Forms** — the warm theme restyles `.form`/`.field` (square corners, uppercase labels,
amber focus ring); the markup and behaviour are unchanged. `contact.html` shows the full
pattern including a `<select>` and paired fields via `.c-field-row`.

**Map** — `contact.html` ships a `.c-map` placeholder rather than an embed, since the
provider is your choice. Replace its contents with an `<iframe>` from Google Maps,
OpenStreetMap or Mapbox; the block already has a 16:6 aspect ratio.

**Forms** — add `data-validate` to a `<form>` for inline validation and focus management.
With no `action` attribute the form validates and shows the message in `data-success`
without submitting, so nothing is silently lost while you are still wiring things up. To
go live, set an `action` (Formspree, Netlify Forms, your own endpoint) and the browser
submits normally:

```html
<form class="form" data-validate action="https://formspree.io/f/xxxx" method="post">
```

## Adding a donation flow

The site currently routes giving through a conversation (`contact.html#give`) rather than
a payment form — deliberate, since payment integration depends on your provider and
jurisdiction. When you're ready, the usual route is a hosted checkout: point the
"Talk to us about giving" buttons at a Stripe Payment Link, Donorbox, or GiveWP page. No
card details should ever be collected by this static site directly.

## Accessibility and SEO notes

Already handled: skip link, landmark elements, visible focus rings, `aria-current` on the
active nav item, `aria-expanded` on the mobile menu, `aria-live` validation messages,
labelled form fields, decorative images with empty `alt`, reduced-motion support, and a
light/dark palette that meets contrast in both themes.

Still yours to do before launch: real `alt` text on real photographs, a per-page
`og:image`/`og:title` set, `sitemap.xml` and `robots.txt`, a privacy notice, your charity
registration number in the footer, and analytics if you want it.
