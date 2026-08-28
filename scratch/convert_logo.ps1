Add-Type -AssemblyName System.Drawing
$imagePath = "C:\Users\Jorge\.gemini\antigravity\brain\eb1dcd9d-6bcb-4bd6-b02d-7c1dfaba8c00\.user_uploaded\media_1787879888846.png"
$src = [System.Drawing.Bitmap]::FromFile($imagePath)
$w = $src.Width
$h = $src.Height

$bmpWhite = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bmpNavy = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$minX = $w
$minY = $h
$maxX = 0
$maxY = 0

for ($x = 0; $x -lt $w; $x++) {
    for ($y = 0; $y -lt $h; $y++) {
        $c = $src.GetPixel($x, $y)
        # Check if it's the logo (darker than white threshold)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
            
            $brightness = ($c.R + $c.G + $c.B) / (3.0 * 255.0)
            $alpha = [Math]::Min(255, [Math]::Max(0, [int]((1.0 - $brightness) * 255 * 1.5)))
            if ($alpha -gt 255) { $alpha = 255 }
            
            $bmpWhite.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
            $bmpNavy.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 4, 35, 84))
        } else {
            $bmpWhite.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
            $bmpNavy.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 4, 35, 84))
        }
    }
}

$margin = 6
$cropX = [Math]::Max(0, $minX - $margin)
$cropY = [Math]::Max(0, $minY - $margin)
$cropW = [Math]::Min($w - $cropX, ($maxX - $minX) + ($margin * 2))
$cropH = [Math]::Min($h - $cropY, ($maxY - $minY) + ($margin * 2))
$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)

$croppedWhite = $bmpWhite.Clone($rect, $bmpWhite.PixelFormat)
$croppedNavy = $bmpNavy.Clone($rect, $bmpNavy.PixelFormat)

$croppedWhite.Save("public\images\pucp-logo-white.png", [System.Drawing.Imaging.ImageFormat]::Png)
$croppedNavy.Save("public\images\pucp-logo-navy.png", [System.Drawing.Imaging.ImageFormat]::Png)

$src.Dispose()
$bmpWhite.Dispose()
$bmpNavy.Dispose()
$croppedWhite.Dispose()
$croppedNavy.Dispose()

Write-Host "SUCCESS: Generated public/images/pucp-logo-white.png and public/images/pucp-logo-navy.png ($cropW x $cropH)"
