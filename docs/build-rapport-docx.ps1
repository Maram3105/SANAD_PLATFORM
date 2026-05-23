param(
    [string]$SourceHtml = (Join-Path $PSScriptRoot 'rapport-sanad.html'),
    [string]$OutputDocx = (Join-Path $PSScriptRoot 'Rapport_SANAD.docx')
)

$ErrorActionPreference = 'Stop'

function Write-Utf8File {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path,
        [Parameter(Mandatory = $true)]
        [string]$Content
    )

    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $Content, $utf8NoBom)
}

$stagingRoot = Join-Path $PSScriptRoot ".rapport-docx-staging-$PID"
$zipPath = Join-Path $PSScriptRoot "Rapport_SANAD-$PID.zip"
$logoPath = Join-Path (Split-Path $PSScriptRoot -Parent) 'src\assets\logo.png'

New-Item -ItemType Directory -Force -Path `
    $stagingRoot, `
    (Join-Path $stagingRoot '_rels'), `
    (Join-Path $stagingRoot 'docProps'), `
    (Join-Path $stagingRoot 'word'), `
    (Join-Path $stagingRoot 'word\_rels') | Out-Null

$html = [System.IO.File]::ReadAllText($SourceHtml)
if (Test-Path $logoPath) {
    $logoBase64 = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes($logoPath))
    $html = $html.Replace('../src/assets/logo.png', "data:image/png;base64,$logoBase64")
}

$contentTypes = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="html" ContentType="text/html"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
'@

$packageRels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
'@

$documentXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    <w:altChunk r:id="htmlChunk"/>
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1080" w:right="1020" w:bottom="1080" w:left="1020" w:header="360" w:footer="360" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>
'@

$documentRels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="htmlChunk" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk" Target="afchunk.html"/>
</Relationships>
'@

$coreProps = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>Rapport du projet SANAD</dc:title>
  <dc:subject>Plateforme web solidaire</dc:subject>
  <dc:creator>Équipe SANAD</dc:creator>
  <cp:keywords>SANAD, Angular, PHP, MySQL, Scrum</cp:keywords>
  <dc:description>Rapport final du projet SANAD.</dc:description>
  <dcterms:created xsi:type="dcterms:W3CDTF">2026-05-22T00:00:00Z</dcterms:created>
</cp:coreProperties>
'@

$appProps = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Codex</Application>
</Properties>
'@

Write-Utf8File -Path (Join-Path $stagingRoot '[Content_Types].xml') -Content $contentTypes
Write-Utf8File -Path (Join-Path $stagingRoot '_rels\.rels') -Content $packageRels
Write-Utf8File -Path (Join-Path $stagingRoot 'word\document.xml') -Content $documentXml
Write-Utf8File -Path (Join-Path $stagingRoot 'word\_rels\document.xml.rels') -Content $documentRels
Write-Utf8File -Path (Join-Path $stagingRoot 'word\afchunk.html') -Content $html
Write-Utf8File -Path (Join-Path $stagingRoot 'docProps\core.xml') -Content $coreProps
Write-Utf8File -Path (Join-Path $stagingRoot 'docProps\app.xml') -Content $appProps

Compress-Archive -Path (Join-Path $stagingRoot '*') -DestinationPath $zipPath -Force
Copy-Item -LiteralPath $zipPath -Destination $OutputDocx -Force
Remove-Item -LiteralPath $zipPath -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $stagingRoot -Recurse -Force -ErrorAction SilentlyContinue

Get-Item -LiteralPath $OutputDocx | Select-Object FullName, Length, LastWriteTime
