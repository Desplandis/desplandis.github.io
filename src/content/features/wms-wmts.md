---
title: "WMS/WMTS Imagery"
summary: "Display high-resolution imagery and maps from standard OGC web services with automatic tiling and caching."
icon: "image"
category: "data-sources"
capabilities:
  - "WMS 1.1.1 and 1.3.0 support"
  - "WMTS 1.0.0 support"
  - "Automatic tile caching"
  - "Multi-layer compositing"
  - "Time-dimension support"
supportedStandards:
  - "OGC WMS 1.1.1"
  - "OGC WMS 1.3.0"
  - "OGC WMTS 1.0.0"
audience: "developers"
order: 20
featured: true
comingSoon: false
publishDate: 2026-01-01
draft: false
---

## Web Map Services

WMS (Web Map Service) and WMTS (Web Map Tile Service) are OGC standards for serving georeferenced map imagery over HTTP.

## Key Capabilities

### Multiple Service Versions

iTowns supports both legacy and current versions of OGC services:
- WMS 1.1.1 and 1.3.0
- WMTS 1.0.0

### Intelligent Caching

Tiles are cached at multiple levels:
- In-memory cache for active tiles
- Optional IndexedDB cache for offline use
- Respect server cache headers

### Time-Dimension Support

For temporal datasets (weather, satellite imagery), iTowns supports:
- TIME parameter in WMS requests
- Animation through time steps
- Time-range queries

## Example Usage

```javascript
const imageryLayer = new itowns.ColorLayer('ortho', {
  source: new itowns.WMTSSource({
    url: 'https://wxs.ign.fr/geoportail/wmts',
    layer: 'ORTHOIMAGERY.ORTHOPHOTOS',
    format: 'image/jpeg',
    tileMatrixSet: 'PM',
  }),
});

view.addLayer(imageryLayer);
```

## Supported Image Formats

- JPEG (best for imagery)
- PNG (transparency support)
- GeoTIFF (raw data)

## Related Features

- [Elevation Data](/features/elevation)
- [Vector Tiles](/features/vector-tiles)

