$folders = @('bedroom', 'commercial', 'kitchen', 'living_room', 'residential', 'architecture', 'others')

foreach ($folder in $folders) {
    if (Test-Path $folder) {
        $files = Get-ChildItem -Path $folder -File
        
        $maxNum = 0
        foreach ($file in $files) {
            if ($file.Name -match "^${folder}_(\d+)\.webp$") {
                $num = [int]$matches[1]
                if ($num -gt $maxNum) { $maxNum = $num }
            }
        }
        
        $badFiles = $files | Where-Object { $_.Name -notmatch "^${folder}_\d+\.webp$" } | Sort-Object Name
        
        foreach ($badFile in $badFiles) {
            $maxNum++
            $newName = "${folder}_${maxNum}.webp"
            Rename-Item -Path $badFile.FullName -NewName $newName
            Write-Host "Renamed $($badFile.Name) to $newName"
        }
    }
}
