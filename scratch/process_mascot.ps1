Add-Type -AssemblyName System.Drawing
$imagePath = "C:\Users\Jorge\.gemini\antigravity\brain\eb1dcd9d-6bcb-4bd6-b02d-7c1dfaba8c00\.user_uploaded\media_1787881818376.png"
$src = [System.Drawing.Bitmap]::FromFile($imagePath)
$w = $src.Width
$h = $src.Height

# Background sample from top-left corner
$bgSample = $src.GetPixel(10, 10)
Write-Host "Background sample RGB: " $bgSample.R $bgSample.G $bgSample.B

$bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Flood fill / Chroma threshold to remove flat background
$bgR = $bgSample.R
$bgG = $bgSample.G
$bgB = $bgSample.B

for ($x = 0; $x -lt $w; $x++) {
    for ($y = 0; $y -lt $h; $y++) {
        $c = $src.GetPixel($x, $y)
        $diff = [Math]::Sqrt([Math]::Pow($c.R - $bgR, 2) + [Math]::Pow($c.G - $bgG, 2) + [Math]::Pow($c.B - $bgB, 2))
        
        if ($diff -lt 12) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($diff -lt 25) {
            $alpha = [int](($diff - 12) / 13.0 * 255.0)
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        } else {
            $bmp.SetPixel($x, $y, $c)
        }
    }
}

$bmp.Save("public\images\mascot-pucp.png", [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()
$bmp.Dispose()

Write-Host "Processed transparent mascot to public/images/mascot-pucp.png ($w x $h)"
