Add-Type -AssemblyName System.Drawing
$imagePath = "public\images\pucp-emblem.png"
$src = [System.Drawing.Bitmap]::FromFile($imagePath)
$w = $src.Width
$h = $src.Height
$cx = $w / 2.0
$cy = $h / 2.0
$radius = ($w / 2.0) * 0.94

$bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $w; $x++) {
    for ($y = 0; $y -lt $h; $y++) {
        $c = $src.GetPixel($x, $y)
        $dx = $x - $cx
        $dy = $y - $cy
        $dist = [Math]::Sqrt($dx * $dx + $dy * $dy)
        
        # If inside circle with anti-aliasing on edge
        if ($dist -lt ($radius - 1.5)) {
            $bmp.SetPixel($x, $y, $c)
        } elseif ($dist -lt ($radius + 1.5)) {
            $alphaRatio = 1.0 - (($dist - ($radius - 1.5)) / 3.0)
            $alpha = [int]($c.A * $alphaRatio)
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        } else {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$bmp.Save("public\images\pucp-emblem-clean.png", [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()
$bmp.Dispose()

Write-Host "Processed clean circular emblem to public/images/pucp-emblem-clean.png"
