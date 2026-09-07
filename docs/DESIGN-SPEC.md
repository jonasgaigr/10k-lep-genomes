# AOPK ČR reveal.js template — design specification

Everything this template does, and where each value comes from.

Two kinds of source are used throughout:

* **Stated** — written in words or numbers in *Grafický manuál AOPK ČR 2026 —
  Hlavní část*. Cited as `(p. N)`. The manual's printed page numbers match the
  PDF page numbers, so `p. 18` is also PDF page 18.
* **Measured** — obtained by rendering the manual's own mockups at 400 dpi and
  measuring the pixels, because the manual shows those layouts without
  dimensioning them. Marked `[measured]`, always expressed as a fraction of the
  slide box so it is resolution-independent.

The manual is explicit that its rules are binding:

> Pravidla uvedená v tomto manuálu jsou ZÁVAZNÁ. Pokud není uvedené pravidlo
> výslovně označeno jako doporučené, je toto pravidlo závazné. (p. 2)

---

## 1. What the manual says about presentations

The whole presentation specification is one page — p. 18,
*POWERPOINTOVÁ PREZENTACE*, in section 2 *FIREMNÍ MATERIÁLY*:

| Field | Text |
|---|---|
| Purpose | „Používá se při přednáškách, seminářích, konferencích apod." |
| **FORMÁT** | „Úzký – 4:3 / **Široký – 16:9**" |
| **PÍSMO** | „Franklin Gothic nebo Arial CE" |
| **JAZYKOVÉ VERZE** | „Česká / Anglická" |
| Templates | „Šablony jsou přílohou tohoto manuálu." |

This extension implements the **16:9 (široký)** variant.

The page carries four mockups, which are the only visual definition of the
deck's layout. They are reproduced here as the *title*, *content*,
*content-with-paragraph* and *closing* slides.

The contents page also lists „Šablona pro powerpointovou prezentaci" among the
manual's appendices (p. 3). Those appendix files were **not** among the supplied
materials, so every layout figure below was measured from the p. 18 mockups.

---

## 2. Colours (p. 10)

The manual gives CMYK, RGB and Pantone for each colour.

| Manual name | CMYK | **RGB (used)** | Hex | Pantone |
|---|---|---|---|---|
| tmavě zelená (base) | 100/30/80/25 | 0/107/77 | `#006B4D` | 342 |
| žlutá | 0/18/100/0 | 255/205/0 | `#FFCD00` | 116 |
| světle zelená | 50/0/100/0 | 140/200/60 | `#8CC83C` | 376 |
| oranžová | 0/55/100/0 | 246/139/31 | `#F68B1F` | Orange 021 |
| šedá | 35/27/25/0 | 177/177/177 | `#B1B1B1` | Cool Gray 7 |

Body copy on white measures as **pure black** `#000000` in the mockups.

### Why the stated RGB and not the artwork's RGB

Extracting the colour swatches on p. 10 as vectors gives slightly different
numbers — `#006647`, `#FFD000`, `#95C11F`, `#F18700`, `#B3B3B7` — and the
p. 18 mockups yield a third set again (světle zelená appears as `#84BF41`).

Those are **not** competing specifications. The swatches are CMYK artwork, and
those values are what a CMYK→RGB conversion produces; they are not reproducible
without knowing the exact profile, and they are not what the manual tells a
designer to use. A naive conversion would give different numbers again
(CMYK 50/0/100/0 → `#80FF00`, nothing like any of the three), which confirms a
profile is in play rather than a stated intent.

The RGB column on p. 10 *is* the manual's stated specification for RGB media,
and a presentation is RGB media. So the table above is authoritative here, and
the artwork values are recorded only as provenance.

All five are exposed as SCSS variables and as CSS custom properties, so a deck
that must match a specific print run can override them.

---

## 3. Typography (p. 11 and p. 18)

> „Písmem jednotného vizuálního stylu AOPK ČR je Franklin Gothic." (p. 11)
>
> „DOPLŇKOVÉ PÍSMO — Doplňkovým písmem je Arial. Je určen pro použití v běžné
> komunikaci, dokumenty související s výkonem státní správy, elektronickou
> korespondenci a další." (p. 11)
>
> „PÍSMO — Franklin Gothic nebo Arial CE" (p. 18, presentations)

The manual shows four Franklin Gothic weights — Book, Medium, Demi, Heavy — and
Arial / Arial Bold / Arial Black.

It also warns:

> „Přesný název fontu a jeho řezů se může v různých programech lišit (každý
> program má v rámci své licence integrovánu určitou verzi fontu)." (p. 11)

### How the stack is built

Windows registers Franklin Gothic as **four separate font families**, not as one
family with four weights, so `font-weight: 600` alone can never reach
*Franklin Gothic Demi*. The theme therefore declares `@font-face` rules that
alias the four families into a single family with real weights:

| CSS weight | Franklin Gothic face |
|---|---|
| 400 | Book |
| 500 | Medium |
| 600 | Demi |
| 800 | Heavy |

If Franklin Gothic is not installed, every `local()` lookup fails and the stack
falls through to **Arial** — which is precisely the substitute the manual
prescribes. No web font is downloaded, and no lookalike is substituted ahead of
Arial.

### Type scale [measured]

Cap heights were measured on unaccented capitals and divided by 0.716 (the
cap-height ratio of Arial and, near enough, Franklin Gothic) to recover the font
size.

| Element | cap height | font size | px @720 |
|---|---|---|---|
| Title (title slide) | 7.38 % | 10.31 % | 74.2 |
| TITULEK (`h2`) | 3.99 % | 5.57 % | 40.1 |
| Author | 2.66 % | 3.72 % | 26.8 |
| Institute / section line | 2.54 % | 3.55 % | 25.6 |
| Body, list items | 2.54 % | 3.60 % | 25.9 |
| Footer bar | 1.93 % | 2.70 % | 19.4 |

Percentages are of **slide height**.

### Leading [measured]

The two content mockups disagree, and the difference is informative:

* the paragraph mockup steps **33.2 px** per line on a ~30 px font → 1.10;
* the bullet mockup steps **46.7 px** between items.

That is the same leading plus space *between list items*, not a larger type
size. The theme models it exactly that way: `line-height: 1.15` everywhere, plus
`0.42em` between list items, which reproduces a 46.5 px step.

---

## 4. Layout [measured from p. 18]

Mockup slide box: 1469 × 827 px at 400 dpi → aspect **1.776**, i.e. 16:9.

| Element | Measured | Of |
|---|---|---|
| Left content margin | 7.69 / 7.76 / 7.69 % | width |
| Right edge of image, dvojlist | 4.08 % | width |
| Footer bar height | 9.07 % (title slide 9.20 %) | height |
| TITULEK cap top | 11.25 % | height |
| First bullet cap top | 27.80 % | height |
| Bullet glyph left | 7.76 % | width |
| Image block left / width / top | 48.26 / 47.72 / 26.60 % | width, width, height |

Three independent elements — the heading, the bullets and the footer's left text
— all land on **7.7 %**, so that is taken as the real left margin. The right-hand
elements agree on **4.08 %**. The grid is genuinely asymmetric; this is
reproduced rather than "corrected".

### Title slide

| Element | Cap top |
|---|---|
| Title | 29.06 % |
| Author | 57.02 % |
| Institute | 69.37 % |

All three are centred. The footer bar carries one centred line,
„Agentura ochrany přírody a krajiny ČR | aopk.gov.cz", and the dvojlist is
centred (centre-x 49.93 %).

### Closing slide

| Element | Left | Top |
|---|---|---|
| Mission text | 41.87 % | 16.93 % |
| Logo + slogan lockup | centred (25.19–75.15 %) | 47.52 %, height 12.09 % |
| `aopk.gov.cz` | 41.73 % | 65.42 % |
| Dvojlist | centred (centre-x 49.97 %) | — |

The bar on this slide carries no text.

### Safe area

Content stops above the **dvojlist**, not merely above the bar, so nothing runs
into the leaf. This is what the manual's own content mockup does: the picture's
bottom edge (80.65 % of slide height) lands on the dvojlist's top edge
(80.29 %).

| | px @720 | of slide height |
|---|---|---|
| Body anchor (content top) | 194.8 | 27.06 % |
| Usable content height | 376.3 | 52.27 % |
| Leaf top edge (content bottom) | 571.2 | 79.33 % |
| Bar top edge | 654.7 | 90.93 % |

Implemented as the section's `padding-bottom` = bar height + leaf height. It is
lifted back to the bar on `.no-leaf` slides and on the title slide, neither of
which has a leaf in that corner to avoid.

Pictures are additionally capped with `max-height`. `max-width` alone only
constrains width, so a tall image in a narrow column would still grow down into
the leaf; capping both makes the browser fit the box and keep the aspect ratio.

reveal.js also puts a 12 px vertical margin on images. On the first picture of a
slide that margin collapses out through its `<p>` and drops the whole block
12 px, which was enough to push the bottom edge back under the leaf, so slide
images are set to zero vertical margin — the vertical rhythm here comes from the
measured anchors, not from image margins.

**Overflow is not clipped.** Roughly nine list items or eleven lines fit in the
safe area; beyond that copy runs on under the bar. Clipping or auto-shrinking
would hide the fact that the slide is overfull, so the template leaves it
visible and documents `.no-leaf` and `.smaller` as the remedies.

### Footer bar colours [measured]

The bar is the brand dark green and the text is **světle zelená, not white** —
sampled at `#84BF41` across all three mockups. This is easy to get wrong by eye
and is one of the more visible details of the style.

---

## 5. Supporting elements (p. 12)

### Symbol / pictogram

> „Symbol, který spolu s textem tvoří logo, je možné použít namísto loga jako
> signaturu např. na fotografiích. Symbol lze také použít jako designový prvek."

Shipped as `symbol-green.svg` / `symbol-white.svg`.

### Dvojlist

> „Používá se ke zvýraznění jednotného vizuálního stylu v prezentacích, na
> rollupech a podobně. Umísťuje se v dolní části stránky **v pravo nebo
> uprostřed**. Barvy: světle zelená a oranžová barva, **obě s průhledností
> 80 %**."

Both statements are confirmed by the artwork: the two leaf paths on p. 12 each
carry an 80 % opacity mask in the PDF, and the mockups place the dvojlist
bottom-**right** on content slides and **centred** on the title and closing
slides. The theme does both — right by default, centred on
`.aopk-title-slide`, `.aopk-closing` and anything marked `.aopk-center-leaf`.

The artwork is traced 1:1 from the manual (see §7), and its flat bottom edge
sits flush on the top of the footer bar, as in every mockup.

### Gradients

Three are defined; all three ship as utility classes:

| Manual | Class |
|---|---|
| „zelená tmavá v sytosti 100 % –> 80 %" | `.aopk-gradient-green-sat` |
| „zelená tmavá –> zelená světlá" | `.aopk-gradient-green` |
| „oranžová –> žlutá" | `.aopk-gradient-orange` |

---

## 6. Logo (p. 5–8)

* Built from the pictogram plus the organisation's full name on three lines, in
  capitals, in **Franklin Gothic Demi**. Czech and English versions exist.
* Colour: CMYK 100/30/80/25, Pantone 342 — the same tmavě zelená as the palette.
* **Ochranná zóna** (clear space): „Ochranná zóna loga AOPK ČR je **1/5 šířky
  piktogramu**." The pictogram measures 99.587 pt wide in the supplied artwork,
  so the clear space is **19.92 pt** at that size — i.e. 20 % of the pictogram's
  width on every side, at any scale.
* On backgrounds that would harm legibility the logo may be placed on a
  rectangle, or set in white; on busy backgrounds the manual recommends white
  logo or pictogram on the corporate dark green (p. 6–7). This is what the
  `.aopk-section` slide does.
* p. 8 lists forbidden variants: elements may not be moved, distorted,
  re-proportioned, recoloured or re-set.

The template does **not** put the logo on content slides — the p. 18 mockups
don't either. The wordmark appears on the closing slide, as the manual shows.

---

## 7. How the vector assets were produced

`tools/build-assets.sh` regenerates everything; `tools/measure-ink.ps1`
reproduces every measurement it hard-codes.

**Why rebuild rather than ship the supplied files.** The six supplied logo PDFs
have *different page padding* — 317.0 × 191.6, 284.3 × 186.8 and
295.9 × 209.3 pt — so dropping them into a layout makes the logo jump and change
size when the colour variant changes. The build takes **one** geometry per
language, trims it to its ink bounding box, and emits every colour from that
single geometry. All 48 paths are identical across the colour variants, so this
is lossless.

| Asset | Source | Notes |
|---|---|---|
| `logo-{cz,en}-{green,white,black}.svg` | `AOPK CR_logo/…-zel[ AJ].pdf` | trimmed to ink box |
| `symbol-{green,white}.svg` | same | wordmark clipped away |
| `logo-slogan-{1r,2r}-{cz,en}-{green,white}.svg` | slogan lockup PDFs | trimmed to ink box |
| `dvojlist.svg` | main manual p. 12 | paths + 80 % opacity, traced 1:1 |

Black uses `#231F20`, the rich black authored in the supplied „cerna" files.

Three traps worth recording, because all three fail *silently*:

1. **A `viewBox` does not clip.** It maps coordinates. Cropping the pictogram
   out of the logo by shrinking the viewBox left the wordmark visible whenever
   the `<img>` box was not exactly the viewBox's aspect ratio. An explicit
   `clipPath` is required.
2. **A single clip rect cannot isolate the pictogram**, because its box
   (x 45.11–144.70) *overlaps* the wordmark's (x 110.63–262.77). The clip is the
   union of two rects — the full width above the wordmark's top edge
   (y 113.506) and, below it, only as far right as x 107, which is safely
   between the stem's right edge (103.187) and the wordmark's left edge
   (110.626).
3. **`currentColor` in an `<img>`-loaded SVG resolves to black.** An SVG used as
   an image has no CSS context to inherit from, so colour variants must be
   separate files, not one recolourable file.

The decorative marks are additionally inlined into `aopk-assets.scss` as data
URIs. Quarto compiles the theme to
`<doc>_files/libs/revealjs/dist/theme/quarto-*.css`, from which a relative
`url(assets/…)` cannot reach the extension folder; inlining also keeps the theme
working under `embed-resources: true`.

---

## 8. Implementation decisions worth knowing

### The footer bar is injected per slide, not `footer:`

`aopk-slides.lua` adds a `.aopk-bar` to every slide instead of using reveal.js's
own footer. Two reasons, both fatal to fidelity:

1. `footer` is a Quarto **format option**, resolved from the document YAML
   before any filter runs, so a filter cannot compose it from `title` + `date`.
   (Setting `meta.footer` from a filter — even at `pre-quarto` — has no effect;
   verified.)
2. Quarto renders that footer as a `position: fixed` sibling of `.slides`, so it
   is measured in **viewport** pixels and does not scale with the slide. The
   manual specifies the bar as 9.07 % of slide *height*; on any window that is
   not exactly 16:9 a viewport-fixed bar drifts off the slide edge.

The injected bar is a child of the section, so reveal's transform scales it with
everything else.

It is appended as the **last** block of each slide rather than after the
heading: the theme offsets slide body copy with `h2 + *`, and a bar sitting
between heading and content would absorb that offset itself — gaining a `top`
that over-constrains its `bottom: 0` and parking it in mid-slide.

### Percentages of height must not be written as CSS percentages

A percentage `padding-top` resolves against the containing block's **width**.
Writing the measured "9.07 % of slide height" as `9.07%` silently produced
9.07 % of 1280 px. All height-derived figures are therefore kept as unitless
ratios and multiplied by `$aopk-canvas-h`, giving exact px on the fixed canvas.

### Cap-top anchors

The manual's mockups are measured to the top of the **capitals**; CSS positions
the **line box**. `aopk-cap-top()` converts between them using
half-leading + (ascender − cap-height), with ascender+descender ≈ 1.117 em,
ascender ≈ 0.905 em, cap-height ≈ 0.716 em.

### Content column as padding, not child margins

The margins are padding on the section. Absolutely positioned children (heading,
bar, dvojlist) resolve against the section's *padding box*, so padding moves the
flowing copy without dragging them — whereas a child margin was added on top of
the heading's own `left`, indenting it twice.

---

## 9. Fidelity check

Rendered at 1280 × 720 in headless Chrome and measured the same way as the
manual's mockups.

| Metric | Target | Rendered | Δ px |
|---|---|---|---|
| Title cap top | 209.2 | 213 | +3.8 |
| Author cap top | 410.5 | 411 | +0.5 |
| Institute cap top | 499.5 | 500 | +0.5 |
| Title dvojlist centre-x | 640.0 | 639 | −1.0 |
| TITULEK left | 98.6 | 99 | +0.4 |
| TITULEK cap top | 81.0 | 83 | +2.0 |
| Bullet glyph left | 99.3 | 99 | −0.3 |
| First bullet cap top | 200.2 | 201 | +0.8 |
| Footer bar top | 654.7 | 655 | +0.3 |
| Dvojlist right inset | 52.2 | 56 | +3.8 |
| Image left edge | 617.7 | 618 | +0.3 |
| Image right edge | 1227.8 | 1227 | −0.8 |

Worst deviation **3.8 px = 0.3 %** of the slide dimension.

The two heading deviations (+2.0, +3.8) are font-metric residue: the cap-top
conversion assumes Arial's ratios, and the heavy weight actually rendering
(Franklin Gothic Heavy, where installed) has a slightly different cap height.
The deviation therefore depends on which fonts the viewer has. It was left as
principled arithmetic rather than a hard-coded fudge for one machine.

---

## 10. Deliberate departures from the mockups

| What | Why |
|---|---|
| `.aopk-section` green divider slide | Not in the p. 18 mockups. It applies the manual's own rule for the logo on a solid brand ground (p. 6–7). Flagged as an extension, not as manual content. |
| Author line set in capitals | The mockup's placeholder reads „AUTOR" in capitals; applied via `text-transform` so authors write normal case. Set `$aopk-author-uppercase: false` to disable. |
| No date on the title slide | The mockup shows none. `date` is still used for the footer bar. |
| Table, blockquote, code styling | The manual does not cover them for presentations. Derived from the palette only. |

## 11. Material not used

`02_… Publikace pro odbornou veřejnost`, `03_… Dům přírody` and `04_… WEB`
cover other media with their own rules and were not applied here. The
*Dům přírody* programme in particular has a separate visual identity; do not
mix it into an agency deck.
