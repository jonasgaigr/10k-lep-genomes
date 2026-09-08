# AOPK ČR — Quarto reveal.js template (16:9)

A Quarto presentation format implementing the corporate visual style of the
**Agentura ochrany přírody a krajiny České republiky**, as defined in
*Grafický manuál AOPK ČR 2026 — Hlavní část*.

The manual specifies two presentation formats (p. 18): „Úzký – 4:3" and
„Široký – 16:9". This is the **16:9** one.

Every colour, size and position is traceable to the manual — see
[`docs/DESIGN-SPEC.md`](docs/DESIGN-SPEC.md), which documents each value, the
page it comes from, the measurements taken from the manual's own mockups, and
a fidelity check of the rendered output against them.

---

## Quick start

```bash
quarto render template.qmd
```

Then open `template.html`. `template.qmd` is a working starter deck showing
every slide type.

To use the format in your own deck, copy the `_extensions/` folder next to your
`.qmd` and set:

```yaml
---
title: "Název prezentace"
author: "Jan Novák"
institute: "Sekce, odbor AOPK ČR"
date: 2025-07-28
date-format: "D. MMMM YYYY"
lang: cs
format: aopk-revealjs
---
```

Requires Quarto ≥ 1.4.

---

## Slide types

### Title slide

Generated from the YAML above. The three centred blocks map as:

| Metadata | Renders as |
|---|---|
| `title` | NÁZEV PREZENTACE — dark green, heavy, capitals |
| `author` | AUTOR — světle zelená, demi, capitals |
| `institute` (or `subtitle`) | Sekce, odbor AOPK ČR — dark green, book |

The bar reads „Agentura ochrany přírody a krajiny ČR | aopk.gov.cz"; override it
with `title-footer: "…"`.

### Content slide

```markdown
## Titulek

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
```

Heading, bullets and footer all sit on the manual's 7.7 % left margin; the
dvojlist sits bottom-right above the bar.

### Two columns (text + picture)

```markdown
## Titulek s obrázkem

::: {.aopk-cols}
::: {}
- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
:::

::: {}
![](images/photo.jpg)
:::
:::
```

The columns reproduce the mockup's proportions: the picture starts at 48.26 % of
the slide and runs out to the right margin.

### Dense paragraph

```markdown
## Titulek s odstavcem

::: {.smaller}
Lorem ipsum dolor sit amet, consectetur adipiscing elit…
:::
```

### Section divider

```markdown
## Oddíl prezentace {.aopk-section}

Optional standfirst.
```

Solid dark green with a white pictogram. Not one of the manual's presentation
mockups — it applies the manual's rule for the logo on a brand-coloured ground
(p. 6–7).

### Closing slide

```markdown
## {.aopk-closing}

::: {.aopk-mission}
**Zajišťujeme** odbornou i praktickou péči o naši přírodu a krajinu.<br>
**Spravujeme** 25 chráněných krajinných oblastí a více než
200 národních přírodních rezervací a památek.<br>
**Chráníme** vzácné a ohrožené druhy rostlin a živočichů.<br>
**Ukazujeme** krásy přírody lidem.
:::

::: {.aopk-lockup}
![](_extensions/aopk/assets/logo-slogan-2r-cz-green.svg)
:::

::: {.aopk-web}
aopk.gov.cz
:::
```

Note the empty `##` — it starts the slide and carries the class. The bar on this
slide is intentionally blank.

---

## The footer bar

Per the manual the bar carries the deck name and date on the left and a fixed
AOPK line on the right. Both are composed automatically:

| Option | Default |
|---|---|
| `footer-left` | `"<title> | <date>"` |
| `footer-right` | `"AOPK ČR | aopk.gov.cz"` |
| `footer: false` | removes the bar from content slides |

```yaml
footer-left: "Konference Natura 2000 | 12. května 2026"
footer-right: "AOPK ČR | aopk.gov.cz"
```

**Czech dates.** Quarto's `MMMM` gives the nominative month („28. červenec"),
while Czech usage wants the genitive („28. července"). If that matters, set
`footer-left` explicitly, or write `date` as a plain string and set
`footer-left` yourself.

---

## Per-slide classes

| Class | Effect |
|---|---|
| `.aopk-section` | Dark green divider slide with white pictogram |
| `.aopk-closing` | Closing slide layout, blank bar, centred dvojlist |
| `.aopk-center-leaf` | Centre the dvojlist (the manual allows right or centre) |
| `.no-leaf` | Remove the dvojlist, and give the slide the extra height back |
| `.no-footer` | Blank bar on this slide |
| `.smaller` | Denser body text |
| `.aopk-cols` | Two-column grid |
| `.aopk-bleed` | Let an element span the full slide width |

Text colour helpers: `.text-green`, `.text-lightgreen`, `.text-orange`,
`.text-yellow`, `.text-gray`.

---

## The safe area

Slide content stops **above the dvojlist**, not merely above the footer bar, so
nothing runs into the leaf in the bottom-right corner. On the 1280 × 720 canvas:

```
body anchor      194.8 px   ← copy and pictures start here
usable height    376.3 px
leaf top edge    571.2 px   ← copy and pictures stop here
bar top edge     654.7 px
```

The manual's own content mockup does the same thing: the picture's bottom edge
lands exactly on the dvojlist's top edge.

Pictures are capped to that height as well as to the column width, so an
oversized image is scaled down to fit rather than growing into the leaf.

If a slide needs the full height, mark it `{.no-leaf}` — the dvojlist goes and
the extra 83 px comes back.

**Overflow.** Roughly nine bullets or eleven lines fit in the safe area. Beyond
that the copy simply keeps going and will run under the footer bar; the template
does not silently shrink or clip it, so you can see the slide is overfull. Split
it, or use `.smaller`.

Gradients from p. 12: `.aopk-gradient-green-sat`, `.aopk-gradient-green`,
`.aopk-gradient-orange`.

---

## Assets

`_extensions/aopk/assets/` holds SVGs rebuilt from the supplied vector originals
(see `docs/DESIGN-SPEC.md` §7 for why they are rebuilt rather than used as-is):

| File | Contents |
|---|---|
| `logo-{cz,en}-{green,white,black}.svg` | Full logo lockup |
| `symbol-{green,white}.svg` | Pictogram only |
| `logo-slogan-2r-{cz,en}-{green,white}.svg` | Logo + two-line slogan |
| `logo-slogan-1r-{cz,en}-{green,white}.svg` | Logo + one-line slogan |
| `dvojlist.svg` | Dvojlist, 80 % opacity as specified |

All are trimmed to their ink bounding box, so you can size them by height and
position them directly.

**Clear space.** The manual requires „ochranná zóna" of **1/5 of the pictogram's
width** around the logo (p. 5). In these trimmed files the pictogram is
99.587 pt wide and the Czech lockup is 217.69 × 122.96 pt, so the clear space is
19.92 pt — **16.2 % of the logo's height**, or 9.2 % of its width — on every
side. Leave that room when you place a logo yourself.

To regenerate the assets (needs [poppler](https://poppler.freedesktop.org/) on
`PATH`, for `pdftocairo`):

```bash
bash tools/build-assets.sh ..      # .. = folder holding "AOPK CR_logo/"
```

`tools/measure-ink.ps1` reproduces every ink bounding box the build hard-codes.

---

## Customising

Override any token in your own SCSS and add it after the theme:

```yaml
format:
  aopk-revealjs:
    theme: [default, _extensions/aopk/aopk-assets.scss, _extensions/aopk/aopk.scss, custom.scss]
```

```scss
/*-- scss:defaults --*/
$aopk-author-uppercase: false;   // keep the author's name in normal case
$aopk-green-dark: #006647;       // match a specific CMYK print run
```

The palette and the layout metrics are also CSS custom properties on `.reveal`
(`--aopk-green-dark`, `--aopk-margin-left`, `--aopk-footer-h`, …), so they can be
overridden per slide.

Changing the canvas means changing three things together — `width:` and
`height:` in `_extension.yml`, and `$aopk-canvas-w` / `$aopk-canvas-h` in the
SCSS. Everything else is derived from those.

### 4:3

The manual also allows „Úzký – 4:3". Set `width: 1024`, `height: 768` and
`$aopk-canvas-w: 1024px`, `$aopk-canvas-h: 768px`. The measured ratios still
apply; note the manual's mockups are 16:9, so the 4:3 result is a proportional
adaptation, not a documented layout.

---

## Published site

The repository doubles as the published site (GitHub Pages, served from the
repository root — hence `.nojekyll`):

```
index.html                     signposting page
  ├─ genetic-monitoring.html   Genetic Monitoring in Czech Insect Conservation
  ├─ genome-information.html   Access to and Use of Insect Genome Information
  ├─ 10klepgenomes.eu          (external) 10,000 Lepidoptera Genomes
  └─ aopk.gov.cz/web/en        (external) Nature Conservation Agency of the CR
```

`index.html` is plain hand-written HTML in the manual's colours and typeface,
not a rendered `.qmd`, so `quarto render` on either deck never overwrites it.
Rebuild the decks with:

```bash
quarto render genetic-monitoring.qmd
quarto render genome-information.qmd
```

---

## Files

```
_extensions/aopk/
  _extension.yml        format definition (canvas, margins, defaults)
  aopk.scss             the theme — every value cited to the manual
  aopk-assets.scss      GENERATED: decorative marks as data URIs
  aopk-slides.lua       injects the per-slide footer bar
  title-slide.html      title slide partial
  assets/*.svg          logo, pictogram, slogan lockups, dvojlist
docs/DESIGN-SPEC.md     full specification, measurements, fidelity check
tools/build-assets.sh   regenerates assets from the supplied PDFs
tools/measure-ink.ps1   reproduces the measurements the build uses
template.qmd            starter deck showing every slide type
images/priklad.svg      placeholder picture — replace it

index.html              landing page — hand-written, NOT generated by Quarto
genetic-monitoring.qmd  deck: Genetic Monitoring in Czech Insect Conservation
genome-information.qmd  deck: Access to and Use of Insect Genome Information
```

---

## Fonts

The manual's typeface is **Franklin Gothic**, with **Arial** as the prescribed
alternative (p. 11). The theme uses Franklin Gothic where it is installed —
mapping Windows' four separate families onto real CSS weights — and otherwise
falls through to Arial. No web font is fetched and no lookalike is substituted
ahead of Arial.

Decks will therefore render slightly differently on machines without Franklin
Gothic. That is the manual's own fallback, not a defect.

---

## Scope

This template covers the presentation rules in *Hlavní část*. The manual's other
parts — *Publikace pro odbornou veřejnost*, *Dům přírody*, *WEB* — carry their
own rules and are not implemented here. *Dům přírody* in particular has a
separate identity and should not be mixed into an agency deck.

The manual's own appendix „Šablona pro powerpointovou prezentaci" was not among
the supplied materials; the layout here is measured from the mockups printed on
p. 18. If the official appendix template is obtained later, it is worth
diffing against `docs/DESIGN-SPEC.md` §4.
