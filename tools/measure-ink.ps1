# Reproduces every ink bounding box hard-coded in build-assets.sh.
# Renders each source PDF at 200 dpi, scans for non-white pixels, and prints the
# resulting SVG viewBox in PDF points. Run:  powershell -File tools/measure-ink.ps1
param([string]$SrcDir = "..", [string]$PopplerBin = "")
Add-Type -AssemblyName System.Drawing
if (-not $PopplerBin) {
  $c = Get-Command pdftoppm.exe -ErrorAction SilentlyContinue
  if ($c) { $PopplerBin = Split-Path $c.Source } else { throw "pdftoppm not on PATH; pass -PopplerBin" }
}
$tmp = Join-Path $env:TEMP ("aopk-ink-" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Force -Path $tmp | Out-Null
$files = @(
 "AOPK CR_logo\AOPK CR_logo-zel.pdf",
 "AOPK CR_logo\AOPK CR_logo-zel AJ.pdf",
 "AOPK CR_logo-slogan\AOPK CR_logo-slogan_zel.pdf",
 "AOPK CR_logo-slogan\AOPK CR_logo-slogan_zel_AJ.pdf",
 "AOPK CR_logo-slogan 1radkovy\AOPK CR_logo-slogan 1r_zel.pdf",
 "AOPK CR_logo-slogan 1radkovy\AOPK CR_logo-slogan 1r_zel_AJ.pdf")
foreach ($n in $files) {
  $pdf = Join-Path $SrcDir $n
  if (-not (Test-Path $pdf)) { "MISSING: $n"; continue }
  $tag = [IO.Path]::GetFileNameWithoutExtension($n) -replace '[^A-Za-z0-9]','_'
  & "$PopplerBin\pdftoppm.exe" -png -r 200 $pdf "$tmp\$tag" | Out-Null
  $png = Get-ChildItem "$tmp\$tag-*.png" | Select-Object -First 1
  $b = New-Object System.Drawing.Bitmap($png.FullName)
  $minx=99999;$maxx=0;$miny=99999;$maxy=0
  for ($y=0; $y -lt $b.Height; $y++) { for ($x=0; $x -lt $b.Width; $x++) { $c=$b.GetPixel($x,$y)
    if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
      if($x -lt $minx){$minx=$x}; if($x -gt $maxx){$maxx=$x}
      if($y -lt $miny){$miny=$y}; if($y -gt $maxy){$maxy=$y} } } }
  $info = & "$PopplerBin\pdfinfo.exe" $pdf | Select-String "Page size"
  $m = [regex]::Match($info, "([\d.]+) x ([\d.]+)")
  $sx = [double]$m.Groups[1].Value / $b.Width
  $sy = [double]$m.Groups[2].Value / $b.Height
  "{0,-46} viewBox=`"{1:N3} {2:N3} {3:N3} {4:N3}`"" -f ([IO.Path]::GetFileName($n)),
    ($minx*$sx), ($miny*$sy), (($maxx-$minx+1)*$sx), (($maxy-$miny+1)*$sy)
  $b.Dispose()
}
Remove-Item -Recurse -Force $tmp
