Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\Jorge\.gemini\antigravity\brain\eb1dcd9d-6bcb-4bd6-b02d-7c1dfaba8c00\.user_uploaded\media_1787971368714.jpg"
$outputPath = "public\images\mascota-fenix.png"

$src = [System.Drawing.Bitmap]::FromFile($inputPath)
$w = $src.Width
$h = $src.Height

$bgSample = $src.GetPixel(10, 10)
$bgR = $bgSample.R
$bgG = $bgSample.G
$bgB = $bgSample.B

$bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $w; $x++) {
    for ($y = 0; $y -lt $h; $y++) {
        $c = $src.GetPixel($x, $y)
        $diff = [Math]::Sqrt([Math]::Pow($c.R - $bgR, 2) + [Math]::Pow($c.G - $bgG, 2) + [Math]::Pow($c.B - $bgB, 2))
        
        if ($diff -lt 14) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($diff -lt 28) {
            $alpha = [int](($diff - 14) / 14.0 * 255.0)
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        } else {
            $bmp.SetPixel($x, $y, $c)
        }
    }
}

$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()
$bmp.Dispose()
Write-Host "Processed $outputPath ($w x $h)"
