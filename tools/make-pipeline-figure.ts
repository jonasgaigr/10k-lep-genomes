// ---------------------------------------------------------------------------
// Draws images/pipeline.svg — the sample-to-indicator chain
//
//     sampling → short-term storage → laboratory → bioinformatics → EBVs
//
// banded by WHO is responsible for each step, which is the point of the
// figure: the NCA is not a laboratory, so the diagram has to make the handover
// points visible rather than hide them inside one undifferentiated arrow.
//
// Usage:  quarto run tools/make-pipeline-figure.ts
//
// WHY A SCRIPT AND NOT A DRAWING
//   The figure has to sit on a 1280x720 AOPK slide at exactly the theme's
//   content width and safe height, in the manual's five colours, in the
//   manual's typeface. Every one of those numbers already exists in
//   _extensions/aopk/aopk.scss; a hand-drawn SVG would restate them by eye and
//   drift the first time the theme is touched. Here they are DERIVED from the
//   same ratios, and the script fails loudly if a label no longer fits.
//
// WHY quarto run
//   `quarto run` executes TypeScript on Quarto's own bundled Deno, so the
//   figure is reproducible with nothing on PATH but Quarto — the same
//   requirement the decks already have. No R, no Python, no Graphviz.
//
// TRACEABILITY
//   Colours     — Grafický manuál AOPK ČR 2026, p. 10 "BARVY", stated RGB
//                 column; identical to $aopk-* in aopk.scss.
//   Typeface    — manual p. 11: Franklin Gothic, Arial as the prescribed
//                 alternative. The @font-face block below is copied verbatim
//                 from aopk.scss so a standalone SVG (which cannot see the
//                 deck's stylesheet) resolves the same four local families.
//   Geometry    — aopk.scss §3 LAYOUT, measured from the manual's p. 18
//                 mockups. Re-derived here, not re-typed as literals.
// ---------------------------------------------------------------------------

// ═══════════════════════════════════════════════════════════════════════════
// 1. PALETTE  (manual p. 10)
// ═══════════════════════════════════════════════════════════════════════════
const GREEN_DARK = "#006B4D"; // tmavě zelená — primary
const GREEN_LIGHT = "#8CC83C"; // světle zelená
const ORANGE = "#F68B1F"; // oranžová
const GRAY = "#B1B1B1"; // šedá
const BLACK = "#000000";
const WHITE = "#ffffff";

// Ink that is not part of the brand palette: hairlines and annotation. Kept to
// two neutrals so the brand colours stay the only colour SIGNAL in the figure.
const RULE = "#E2E2E2";
const ANNOT = "#4A4A4A";

// ═══════════════════════════════════════════════════════════════════════════
// 2. SLIDE GEOMETRY  (derived exactly as aopk.scss derives it)
//
// The figure is authored 1:1 with the box it will occupy, so its type sizes are
// the type sizes the audience sees. It goes on a `{.no-leaf}` slide: no
// dvojlist to avoid, so the picture may run down to the footer bar.
// ═══════════════════════════════════════════════════════════════════════════
const CANVAS_W = 1280, CANVAS_H = 720;

const MARGIN_L = CANVAS_W * 0.0770; //  98.56  left content margin
const MARGIN_R = CANVAS_W * 0.0408; //  52.22  right edge of elements
const FOOTER_H = CANVAS_H * 0.0907; //  65.30  footer bar
const DVOJLIST_H = CANVAS_W * 0.1540 * 0.42367; // 83.52  leaf, from its own aspect

// aopk-cap-top(): the manual anchors the TOP OF THE CAPITALS, a browser
// positions the line box. Same function as the SCSS mixin.
const capTop = (ratio: number, size: number, lh = 1.15) =>
  CANVAS_H * ratio - ((lh * size - 1.117 * size) / 2 + 0.189 * size);

const BODY_TOP = capTop(0.2780, 25.9); // 194.84  first bullet's cap top
const CONTENT_H = CANVAS_H - BODY_TOP - (FOOTER_H + DVOJLIST_H); // 376.33
const W = CANVAS_W - MARGIN_L - MARGIN_R; // 1129.22
const H = CONTENT_H + DVOJLIST_H; //  459.85  the .no-leaf max-height

// ═══════════════════════════════════════════════════════════════════════════
// 3. GRID
//
// A gutter of lane names on the left, then five equal columns reading as time.
// The gap has to be wide enough to carry a vertical arrow corridor between two
// columns, which is what sets it at 34 rather than something tighter.
// ═══════════════════════════════════════════════════════════════════════════
const GUTTER = 162, GAP = 34, NCOL = 5, NLANE = 4;
const COL_W = (W - GUTTER - GAP * (NCOL - 1)) / NCOL; // 166.24
const LANE_H = H / NLANE; // 114.96
// Tall enough for the worst box — two title lines over two descriptor lines —
// and no taller, so ~31 px of lane still shows between vertically adjacent
// boxes for the arrows and their labels to run in.
const BOX_H = 84;

/** Left edge of column i (0-based). */
const cx0 = (i: number) => GUTTER + i * (COL_W + GAP);
/** Width of a box spanning columns i..j inclusive. */
const span = (i: number, j: number) => (j - i + 1) * COL_W + (j - i) * GAP;
/** Vertical centre of lane i. */
const lym = (i: number) => i * LANE_H + LANE_H / 2;

// ═══════════════════════════════════════════════════════════════════════════
// 4. TYPE, AND A FIT CHECK THAT ACTUALLY MEASURES
//
// Labels are hand-broken into lines rather than auto-wrapped, so the breaks are
// reviewable in the diff. That is only safe if something checks they still fit,
// hence the width table: Helvetica's AFM advance widths, which Arial matches
// for this character set. Franklin Gothic Book is NARROWER than Arial, so a
// line that fits the table fits both — the check errs in the right direction.
// ═══════════════════════════════════════════════════════════════════════════
const AFM_REG =
  ("278 278 355 556 556 889 667 191 333 333 389 584 278 333 278 278 556 556 556 556 556 556 " +
    "556 556 556 556 278 278 584 584 584 556 1015 667 667 722 722 667 611 778 722 278 500 667 " +
    "556 833 722 778 667 778 722 667 611 722 667 944 667 667 611 278 278 278 469 556 333 556 " +
    "556 500 556 556 278 556 556 222 222 500 222 833 556 556 556 556 333 500 278 556 500 722 " +
    "500 500 500 334 260 334 584").split(" ").map(Number);
const AFM_BOLD =
  ("278 333 474 556 556 889 722 238 333 333 389 584 278 333 278 278 556 556 556 556 556 556 " +
    "556 556 556 556 333 333 584 584 584 611 975 722 722 722 722 667 611 778 722 278 556 722 " +
    "611 833 722 778 667 778 722 667 611 722 667 944 667 667 611 333 278 333 584 556 333 556 " +
    "611 556 611 556 333 611 611 278 278 556 278 889 611 611 611 611 389 556 333 611 556 778 " +
    "556 556 500 389 280 389 584").split(" ").map(Number);
// The handful of non-ASCII glyphs this figure uses, same units.
const AFM_EXTRA: Record<string, number> = { "Δ": 612, "·": 278, "–": 556, "—": 1000, "×": 584 };

type Run = { t: string; sub?: boolean; italic?: boolean };
type Line = string | Run[];
const runs = (l: Line): Run[] => (typeof l === "string" ? [{ t: l }] : l);
const plain = (l: Line): string => runs(l).map((r) => r.t).join("");

function glyph(ch: string, bold: boolean): number {
  const c = ch.codePointAt(0)!;
  if (c >= 32 && c <= 126) return (bold ? AFM_BOLD : AFM_REG)[c - 32];
  return AFM_EXTRA[ch] ?? 556;
}
const SUB = 0.72; // subscript size ratio
function width(line: Line, size: number, bold = false): number {
  let w = 0;
  for (const r of runs(line)) {
    const s = size * (r.sub ? SUB : 1);
    for (const ch of r.t) w += glyph(ch, bold) * s / 1000;
  }
  return w;
}

const F_LANE = 14, F_TITLE = 16, F_DESC = 12, F_ANNOT = 12;
const PAD_X = 14; // box text inset
const LANE_X = 18, CHIP_W = 5; // lane-name inset, and its colour swatch
const LEAD_TITLE = 18, LEAD_DESC = 14, GAP_TD = 10; // title→descriptor step
/** Height of a box's whole text block, title lines + gap + descriptor lines. */
const blockH = (b: { title: Line[]; desc: Line[] }) =>
  b.title.length * LEAD_TITLE + GAP_TD + b.desc.length * LEAD_DESC;

// ═══════════════════════════════════════════════════════════════════════════
// 5. THE MODEL
//
// Lane order is not arbitrary. It is the one order in which no arrow crosses
// another: putting the joint NCA+partner lane directly under the NCA lane keeps
// the occurrence-record feed short and leaves the left half of that lane empty,
// which is where the two arrows rising out of bioinformatics go. Museums come
// last because the vault is a terminus, not a stage.
// ═══════════════════════════════════════════════════════════════════════════
type Lane = { name: string[]; color: string; ink: string };
const LANES: Lane[] = [
  { name: ["NCA"], color: GREEN_DARK, ink: WHITE },
  { name: ["NCA +", "research", "partners"], color: GREEN_LIGHT, ink: BLACK },
  { name: ["Research", "partners"], color: ORANGE, ink: BLACK },
  { name: ["Museums"], color: GRAY, ink: BLACK },
];

type Box = { id: string; lane: number; c0: number; c1: number; title: Line[]; desc: Line[] };
const BOXES: Box[] = [
  {
    id: "sampling", lane: 0, c0: 0, c1: 0,
    title: ["Sampling"],
    desc: ["2027 field season,", "one protocol, one register"],
  },
  {
    id: "storage", lane: 0, c0: 1, c1: 1,
    title: ["Short-term", "storage"],
    desc: ["ethanol or freezer,", "chain of custody"],
  },
  {
    id: "occurrence", lane: 0, c0: 2, c1: 3,
    title: ["Species Occurrence Database"],
    desc: [
      "materialSampleID · event date · coordinates · permit,",
      "then the ENA and BOLD accessions the analysis returns",
    ],
  },
  {
    id: "ebv", lane: 1, c0: 4, c1: 4,
    title: ["EBVs &", "dashboards"],
    desc: [
      [{ t: "ΔH, ΔF" }, { t: "ST", sub: true }, { t: ", " },
       { t: "N", italic: true }, { t: "e", sub: true }, { t: "," }],
      "Populations Maintained",
    ],
  },
  {
    id: "lab", lane: 2, c0: 2, c1: 2,
    title: ["Laboratory"],
    desc: ["extraction, barcoding,", "sequencing"],
  },
  {
    id: "bioinf", lane: 2, c0: 3, c1: 3,
    title: ["Bioinformatics"],
    desc: ["assembly, genotyping,", "quality control"],
  },
  {
    id: "report", lane: 2, c0: 4, c1: 4,
    title: ["Report"],
    desc: ["study deliverable,", "ENA + BOLD deposition"],
  },
  {
    id: "vault", lane: 3, c0: 2, c1: 2,
    title: ["Long-term", "storage"],
    desc: ["voucher + surplus tissue,", "the museum vault"],
  },
];

// Resolve every box to absolute geometry once, and key it by id so the arrow
// list below can talk about edges rather than about numbers.
const B = Object.fromEntries(BOXES.map((b) => {
  const x = cx0(b.c0), w = span(b.c0, b.c1), y = lym(b.lane) - BOX_H / 2;
  return [b.id, {
    ...b, x, y, w, h: BOX_H,
    r: x + w, bot: y + BOX_H, mx: x + w / 2, my: y + BOX_H / 2,
  }];
}));

// ── arrows ────────────────────────────────────────────────────────────────
// Points are orthogonal polylines; corners are rounded when drawn. `dash` marks
// the one arrow that is a return, not a hand-off.
type Arrow = { pts: [number, number][]; color: string; dash?: boolean };
const A: Arrow[] = [];
const arrow = (color: string, pts: [number, number][], dash = false) => A.push({ pts, color, dash });

const TRUNK_X = B.storage.mx; // where physical material leaves NCA custody

arrow(GREEN_DARK, [[B.sampling.r, B.sampling.my], [B.storage.x, B.storage.my]]);
arrow(GREEN_DARK, [[B.storage.r, B.storage.my], [B.occurrence.x, B.occurrence.my]]);
// Material leaves once and then splits: tissue to the lab, the rest to the
// vault. Drawn as one trunk with a junction dot so the split is explicit.
arrow(GREEN_DARK, [[TRUNK_X, B.storage.bot], [TRUNK_X, B.vault.my], [B.vault.x, B.vault.my]]);
arrow(GREEN_DARK, [[TRUNK_X, B.lab.my], [B.lab.x, B.lab.my]]);
arrow(ORANGE, [[B.lab.r, B.lab.my], [B.bioinf.x, B.bioinf.my]]);
arrow(ORANGE, [[B.bioinf.r, B.bioinf.my], [B.report.x, B.report.my]]);
// Two arrows rise out of bioinformatics through the empty left half of the
// joint lane: results to the EBVs, identifiers back to the occurrence record.
const X_RESULTS = B.bioinf.x + COL_W * 0.78;
const X_ACCESS = B.bioinf.mx;
arrow(ORANGE, [[X_RESULTS, B.bioinf.y], [X_RESULTS, B.ebv.my], [B.ebv.x, B.ebv.my]]);
arrow(ORANGE, [[X_ACCESS, B.bioinf.y], [X_ACCESS, B.occurrence.bot]], true);
// The occurrence record is the other input to the EBVs — Populations Maintained
// needs no DNA at all.
arrow(GREEN_DARK, [
  [B.occurrence.r, B.occurrence.my], [B.ebv.mx, B.occurrence.my], [B.ebv.mx, B.ebv.y],
]);

// ── annotations on the arrows ─────────────────────────────────────────────
type Note = { x: number; y: number; lines: string[]; anchor: "start" | "end" | "middle" };
const NOTES: Note[] = [
  { x: B.lab.x - 8, y: B.lab.my - 10, anchor: "end", lines: ["tissue subsample"] },
  { x: B.vault.x - 8, y: B.vault.my - 24, anchor: "end", lines: ["voucher &", "surplus material"] },
  { x: X_ACCESS - 10, y: lym(1) - 20, anchor: "end", lines: ["ENA / BOLD", "accessions returned"] },
  { x: B.ebv.mx - 20, y: B.occurrence.my + 22, anchor: "end", lines: ["occurrence &", "metadata"] },
];

// ═══════════════════════════════════════════════════════════════════════════
// 6. RENDER
// ═══════════════════════════════════════════════════════════════════════════
const n = (v: number) => Number(v.toFixed(2)).toString();
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Orthogonal polyline with rounded corners. */
function elbow(pts: [number, number][], r = 10): string {
  let d = "M " + n(pts[0][0]) + " " + n(pts[0][1]);
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1], [cx, cy] = pts[i], [nx, ny] = pts[i + 1];
    const d1 = Math.hypot(cx - px, cy - py), d2 = Math.hypot(nx - cx, ny - cy);
    const rr = Math.min(r, d1 / 2, d2 / 2);
    d += " L " + n(cx + (px - cx) / d1 * rr) + " " + n(cy + (py - cy) / d1 * rr) +
      " Q " + n(cx) + " " + n(cy) +
      " " + n(cx + (nx - cx) / d2 * rr) + " " + n(cy + (ny - cy) / d2 * rr);
  }
  const e = pts[pts.length - 1];
  return d + " L " + n(e[0]) + " " + n(e[1]);
}

/** One line of text, with optional subscript / italic runs. */
function text(
  line: Line, x: number, y: number, size: number,
  cls: string, extra = "", anchor = "start",
): string {
  let shift = 0;
  const tspans = runs(line).map((r) => {
    const target = r.sub ? size * 0.2 : 0;
    const dy = target - shift;
    shift = target;
    const attrs = [
      r.sub ? 'font-size="' + n(size * SUB) + '"' : "",
      r.italic ? 'font-style="italic"' : "",
      dy ? 'dy="' + n(dy) + '"' : "",
    ].filter(Boolean).join(" ");
    return "<tspan" + (attrs ? " " + attrs : "") + ">" + esc(r.t) + "</tspan>";
  }).join("");
  return '<text class="' + cls + '" x="' + n(x) + '" y="' + n(y) + '" font-size="' + n(size) + '"' +
    (anchor === "start" ? "" : ' text-anchor="' + anchor + '"') +
    (extra ? " " + extra : "") + ">" + tspans + "</text>";
}

const out: string[] = [];

// lane bands, separators, gutter names
for (let i = 0; i < NLANE; i++) {
  const L = LANES[i], y = i * LANE_H;
  out.push('<rect x="0" y="' + n(y) + '" width="' + n(W) + '" height="' + n(LANE_H) +
    '" fill="' + L.color + '" fill-opacity="0.06"/>');
  if (i) {
    out.push('<line x1="0" y1="' + n(y) + '" x2="' + n(W) + '" y2="' + n(y) +
      '" stroke="' + RULE + '" stroke-width="1"/>');
  }
  // The lane's own colour would fail on white for světle zelená and šedá, so
  // it goes in a swatch and the name is set in the deck's heading colour.
  out.push('<rect x="0" y="' + n(lym(i) - 15) + '" width="' + CHIP_W +
    '" height="30" fill="' + L.color + '"/>');
  const top = lym(i) - ((L.name.length - 1) * F_LANE * 1.2) / 2 + F_LANE * 0.36;
  L.name.forEach((s, k) =>
    out.push(text(s, LANE_X, top + k * F_LANE * 1.2, F_LANE, "lane"))
  );
}
out.push('<line x1="' + n(GUTTER - GAP / 2) + '" y1="0" x2="' + n(GUTTER - GAP / 2) +
  '" y2="' + n(H) + '" stroke="' + RULE + '" stroke-width="1"/>');

// boxes
for (const b of Object.values(B)) {
  const L = LANES[b.lane];
  out.push('<rect x="' + n(b.x) + '" y="' + n(b.y) + '" width="' + n(b.w) +
    '" height="' + n(b.h) + '" rx="4" fill="' + L.color + '"/>');
  let y = b.my - blockH(b) / 2 + F_TITLE * 0.72;
  for (const t of b.title) {
    out.push(text(t, b.x + PAD_X, y, F_TITLE, "bt", 'fill="' + L.ink + '"'));
    y += LEAD_TITLE;
  }
  y += GAP_TD - (F_TITLE - F_DESC) * 0.72; // step to the descriptor baseline
  const op = L.ink === WHITE ? "0.85" : "0.72";
  for (const d of b.desc) {
    out.push(text(d, b.x + PAD_X, y, F_DESC, "bd", 'fill="' + L.ink + '" fill-opacity="' + op + '"'));
    y += LEAD_DESC;
  }
}

// arrows, then the junction dot on the material split
const marks = [...new Set(A.map((a) => a.color))];
for (const a of A) {
  out.push('<path d="' + elbow(a.pts) + '" fill="none" stroke="' + a.color +
    '" stroke-width="' + (a.dash ? "1.8" : "2.2") + '"' +
    (a.dash ? ' stroke-dasharray="6 4"' : "") +
    ' marker-end="url(#h-' + a.color.slice(1) + ')"/>');
}
out.push('<circle cx="' + n(TRUNK_X) + '" cy="' + n(B.lab.my) + '" r="4.2" fill="' + GREEN_DARK + '"/>');

// annotations
for (const nt of NOTES) {
  nt.lines.forEach((s, k) =>
    out.push(text(s, nt.x, nt.y + k * LEAD_DESC, F_ANNOT, "an", "", nt.anchor))
  );
}

const defs = marks.map((c) =>
  '<marker id="h-' + c.slice(1) + '" markerWidth="9" markerHeight="7" refX="9" refY="3.5"' +
  ' orient="auto" markerUnits="userSpaceOnUse">' +
  '<path d="M0,0 L9,3.5 L0,7 z" fill="' + c + '"/></marker>'
).join("\n");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${n(W)}" height="${n(H)}" viewBox="0 0 ${n(W)} ${n(H)}" role="img" aria-labelledby="figtitle figdesc">
<title id="figtitle">From sample to indicator: who is responsible for each step</title>
<desc id="figdesc">Four responsibility bands. The Nature Conservation Agency samples in the field, holds the samples in short-term storage, and mints the occurrence record that carries the sample identifier. Material then splits: tissue goes to research partners for laboratory work and bioinformatics, which produce the study report and return ENA and BOLD accessions to the occurrence record; the voucher and surplus material go to museums for long-term storage in the vault. The Agency and its research partners jointly compile the Essential Biodiversity Variables and dashboards from the analytical results and from the occurrence records.</desc>
<style>
/* Copied from _extensions/aopk/aopk.scss: a standalone SVG cannot see the
   deck's stylesheet, so it has to alias Windows' four separate Franklin
   Gothic families itself. local() only — nothing is fetched. */
@font-face{font-family:"AOPK Franklin Gothic";font-weight:400;font-style:normal;src:local("Franklin Gothic Book"),local("FranklinGothic-Book"),local("ITC Franklin Gothic Std Book");}
@font-face{font-family:"AOPK Franklin Gothic";font-weight:500;font-style:normal;src:local("Franklin Gothic Medium"),local("FranklinGothic-Medium"),local("ITC Franklin Gothic Std Medium");}
@font-face{font-family:"AOPK Franklin Gothic";font-weight:600;font-style:normal;src:local("Franklin Gothic Demi"),local("FranklinGothic-Demi"),local("ITC Franklin Gothic Std Demi");}
@font-face{font-family:"AOPK Franklin Gothic";font-weight:800;font-style:normal;src:local("Franklin Gothic Heavy"),local("FranklinGothic-Heavy"),local("ITC Franklin Gothic Std Heavy");}
text{font-family:"AOPK Franklin Gothic","Franklin Gothic Book",Arial,"Helvetica Neue",Helvetica,sans-serif;}
.lane{font-weight:600;letter-spacing:0.4px;text-transform:uppercase;fill:${GREEN_DARK};}
.bt{font-weight:600;}
.bd{font-weight:400;}
.an{font-weight:400;fill:${ANNOT};paint-order:stroke;stroke:${WHITE};stroke-width:3.5px;stroke-linejoin:round;}
</style>
<defs>
${defs}
</defs>
<rect width="${n(W)}" height="${n(H)}" fill="${WHITE}"/>
${out.join("\n")}
</svg>
`;

Deno.writeTextFileSync(new URL("../images/pipeline.svg", import.meta.url), svg);

// ═══════════════════════════════════════════════════════════════════════════
// 7. FIT CHECK — the reason the hand-made line breaks above can be trusted
// ═══════════════════════════════════════════════════════════════════════════
const bad: string[] = [];
for (const b of Object.values(B)) {
  const avail = b.w - 2 * PAD_X;
  for (const t of b.title) {
    const w = width(t, F_TITLE, true);
    if (w > avail) bad.push("  " + b.id + ' title "' + plain(t) + '" ' + w.toFixed(1) + " > " + avail.toFixed(1));
  }
  for (const d of b.desc) {
    const w = width(d, F_DESC);
    if (w > avail) bad.push("  " + b.id + ' desc  "' + plain(d) + '" ' + w.toFixed(1) + " > " + avail.toFixed(1));
  }
  if (blockH(b) > BOX_H - 8) {
    bad.push("  " + b.id + " text block " + blockH(b) + "px too tall for " + BOX_H + "px");
  }
}
const laneAvail = GUTTER - LANE_X - GAP / 2;
for (const L of LANES) {
  for (const s of L.name) {
    const w = width(s.toUpperCase(), F_LANE, true) + s.length * 0.4; // .lane is uppercase + tracked
    if (w > laneAvail) bad.push('  lane "' + s + '" ' + w.toFixed(1) + " > " + laneAvail.toFixed(1));
  }
}

console.log("images/pipeline.svg  " + n(W) + " x " + n(H) + " px  (" +
  BOXES.length + " boxes, " + A.length + " arrows)");
if (bad.length) {
  console.error("FIT CHECK FAILED — re-break these labels:\n" + bad.join("\n"));
  Deno.exit(1);
}
console.log("fit check: every label fits its box");
