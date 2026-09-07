#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Rebuilds the AOPK CR vector assets used by the Quarto reveal.js theme.
#
# Usage:  bash tools/build-assets.sh [DIR_WITH_SOURCE_MATERIALS]
#         (default DIR is "..", i.e. the folder holding "AOPK CR_logo/")
#
# Requires: poppler's pdftocairo on PATH.
#
# WHY WE REBUILD INSTEAD OF SHIPPING THE SUPPLIED FILES
#   The six supplied logo PDFs have DIFFERENT page padding
#   (317.0x191.6, 284.3x186.8 and 295.9x209.3 pt), so dropping them into a
#   layout as-is makes the logo shift and change size when you switch colour
#   variant. We take ONE geometry per language, trim it to its ink bounding
#   box, and emit every colour variant from that single geometry.
#
# MEASUREMENTS
#   All boxes below were measured from 200-300 dpi renders of the source PDFs
#   by scanning for non-white pixels; see docs/DESIGN-SPEC.md.
# ---------------------------------------------------------------------------
set -euo pipefail

SRC_DIR="${1:-..}"
OUT="$(cd "$(dirname "$0")/../_extensions/aopk/assets" && pwd)"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

# Brand colours - manual p.10 "BARVY", stated RGB column.
GREEN="#006B4D"   # tmave zelena  CMYK 100/30/80/25  Pantone 342
WHITE="#FFFFFF"
BLACK="#231F20"   # rich black, as authored in the supplied "cerna" logo files

# Ink bounding boxes (pt) in each source PDF's own coordinate space.
CZ_VB="44.98 40.99 217.69 122.96";  CZ_W=217.69;  CZ_H=122.96
EN_VB="44.98 41.35 243.24 123.32";  EN_W=243.24;  EN_H=123.32
SYM_VB="45.114 41.035 99.587 92.628"; SYM_W=99.587; SYM_H=92.628

# --- pictogram clip ---------------------------------------------------------
# A viewBox only maps coordinates, it does NOT clip, so the wordmark stays
# visible unless we clip it away. A single rect cannot do it either: the
# pictogram box (x 45.11-144.70, y 41.04-133.42) OVERLAPS the wordmark box
# (x 110.63-262.77, y 113.51-163.66).
# Measured: wordmark top edge y=113.506; below that the only pictogram ink is
# the stem, x 96.468-103.187, ending at y=133.423; wordmark starts at x=110.626.
# So we clip with the UNION of two rects, splitting at x=107 (safely between
# the stem's right edge and the wordmark's left edge).
SYM_CLIP='<rect x="45.114" y="41.035" width="99.587" height="72.471"/><rect x="45.114" y="113.506" width="61.886" height="19.917"/>'

emit () { # 1=src 2=out 3=viewBox 4=w 5=h 6=colour 7=clipShapes("" for none)
  local defs="" open="" close=""
  if [ -n "$7" ]; then
    defs="<defs><clipPath id=\"crop\">$7</clipPath></defs>"
    open='<g clip-path="url(#crop)">'; close='</g>'
  fi
  sed -e "s|width=\"[^\"]*\" height=\"[^\"]*\" viewBox=\"[^\"]*\"|width=\"$4pt\" height=\"$5pt\" viewBox=\"$3\"|" \
      -e "s|fill=\"rgb([^\"]*)\"|fill=\"$6\"|g" \
      -e "s|<svg |<svg role=\"img\" |" \
      -e "s|\(viewBox=\"[^\"]*\">\)|\1$defs$open|" \
      -e "s|</svg>|$close</svg>|" "$1" > "$2"
  echo "  $(basename "$2")"
}

echo "Extracting logo geometry with pdftocairo..."
pdftocairo -svg "$SRC_DIR/AOPK CR_logo/AOPK CR_logo-zel.pdf"    "$TMP/cz.svg"
pdftocairo -svg "$SRC_DIR/AOPK CR_logo/AOPK CR_logo-zel AJ.pdf" "$TMP/en.svg"

echo "Logo variants (full lockup: pictogram + wordmark):"
emit "$TMP/cz.svg" "$OUT/logo-cz-green.svg" "$CZ_VB" $CZ_W $CZ_H "$GREEN" ""
emit "$TMP/cz.svg" "$OUT/logo-cz-white.svg" "$CZ_VB" $CZ_W $CZ_H "$WHITE" ""
emit "$TMP/cz.svg" "$OUT/logo-cz-black.svg" "$CZ_VB" $CZ_W $CZ_H "$BLACK" ""
emit "$TMP/en.svg" "$OUT/logo-en-green.svg" "$EN_VB" $EN_W $EN_H "$GREEN" ""
emit "$TMP/en.svg" "$OUT/logo-en-white.svg" "$EN_VB" $EN_W $EN_H "$WHITE" ""
emit "$TMP/en.svg" "$OUT/logo-en-black.svg" "$EN_VB" $EN_W $EN_H "$BLACK" ""

echo "Pictogram (symbol) variants, wordmark clipped away:"
emit "$TMP/cz.svg" "$OUT/symbol-green.svg" "$SYM_VB" $SYM_W $SYM_H "$GREEN" "$SYM_CLIP"
emit "$TMP/cz.svg" "$OUT/symbol-white.svg" "$SYM_VB" $SYM_W $SYM_H "$WHITE" "$SYM_CLIP"

echo "Core assets written (dvojlist.svg is hand-authored, not regenerated here)."

# --- slogan lockups ---------------------------------------------------------
# Manual p.9 "SLOGAN": variants are "jednoradkova s logem" (1 line + logo),
# "dvouradkova s logem" (2 lines + logo) and the slogan on its own.
# Ink boxes measured the same way (see tools/measure-ink.ps1).
SL2_CZ="45.682 39.526 301.789 62.883"; SL2_CZ_W=301.789; SL2_CZ_H=62.883
SL2_EN="32.733 39.526 319.414 62.883"; SL2_EN_W=319.414; SL2_EN_H=62.883
SL1_CZ="45.717 38.784 718.513 63.204"; SL1_CZ_W=718.513; SL1_CZ_H=63.204
SL1_EN="32.038 38.784 734.712 63.204"; SL1_EN_W=734.712; SL1_EN_H=63.204

echo "Slogan lockups (logo + vertical rule + slogan):"
pdftocairo -svg "$SRC_DIR/AOPK CR_logo-slogan/AOPK CR_logo-slogan_zel.pdf"              "$TMP/sl2cz.svg"
pdftocairo -svg "$SRC_DIR/AOPK CR_logo-slogan/AOPK CR_logo-slogan_zel_AJ.pdf"           "$TMP/sl2en.svg"
pdftocairo -svg "$SRC_DIR/AOPK CR_logo-slogan 1radkovy/AOPK CR_logo-slogan 1r_zel.pdf"    "$TMP/sl1cz.svg"
pdftocairo -svg "$SRC_DIR/AOPK CR_logo-slogan 1radkovy/AOPK CR_logo-slogan 1r_zel_AJ.pdf" "$TMP/sl1en.svg"

emit "$TMP/sl2cz.svg" "$OUT/logo-slogan-2r-cz-green.svg" "$SL2_CZ" $SL2_CZ_W $SL2_CZ_H "$GREEN" ""
emit "$TMP/sl2cz.svg" "$OUT/logo-slogan-2r-cz-white.svg" "$SL2_CZ" $SL2_CZ_W $SL2_CZ_H "$WHITE" ""
emit "$TMP/sl2en.svg" "$OUT/logo-slogan-2r-en-green.svg" "$SL2_EN" $SL2_EN_W $SL2_EN_H "$GREEN" ""
emit "$TMP/sl2en.svg" "$OUT/logo-slogan-2r-en-white.svg" "$SL2_EN" $SL2_EN_W $SL2_EN_H "$WHITE" ""
emit "$TMP/sl1cz.svg" "$OUT/logo-slogan-1r-cz-green.svg" "$SL1_CZ" $SL1_CZ_W $SL1_CZ_H "$GREEN" ""
emit "$TMP/sl1cz.svg" "$OUT/logo-slogan-1r-cz-white.svg" "$SL1_CZ" $SL1_CZ_W $SL1_CZ_H "$WHITE" ""
emit "$TMP/sl1en.svg" "$OUT/logo-slogan-1r-en-green.svg" "$SL1_EN" $SL1_EN_W $SL1_EN_H "$GREEN" ""
emit "$TMP/sl1en.svg" "$OUT/logo-slogan-1r-en-white.svg" "$SL1_EN" $SL1_EN_W $SL1_EN_H "$WHITE" ""

echo "All assets written."

# --- data-URI stylesheet ----------------------------------------------------
# The compiled theme CSS is emitted deep inside <doc>_files/libs/revealjs/dist/
# theme/, where a relative url(assets/...) cannot reach this folder. Inlining
# the two decorative marks as data URIs makes the theme a single self-contained
# stylesheet that also survives `embed-resources: true`.
ASSETS_SCSS="$(dirname "$OUT")/aopk-assets.scss"
{
  echo "/*-----------------------------------------------------------------"
  echo "  GENERATED by tools/build-assets.sh - do not edit by hand."
  echo "  Decorative marks inlined as data URIs; see the note in that script."
  echo "-----------------------------------------------------------------*/"
  echo
  echo "/*-- scss:defaults --*/"
  echo
  echo "\$aopk-img-dvojlist: url(\"data:image/svg+xml;base64,$(base64 -w0 "$OUT/dvojlist.svg")\") !default;"
  echo "\$aopk-img-symbol-white: url(\"data:image/svg+xml;base64,$(base64 -w0 "$OUT/symbol-white.svg")\") !default;"
  echo "\$aopk-img-symbol-green: url(\"data:image/svg+xml;base64,$(base64 -w0 "$OUT/symbol-green.svg")\") !default;"
} > "$ASSETS_SCSS"
echo "Generated $(basename "$ASSETS_SCSS") ($(wc -c < "$ASSETS_SCSS") bytes)"
