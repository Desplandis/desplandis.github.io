---
title: "Globe & Planar Views"
summary: "Visualize geospatial data on a 3D globe or 2.5D planar map with seamless transitions and accurate projections."
icon: "globe"
category: "visualization"
capabilities:
  - "3D globe visualization (WGS84)"
  - "2.5D planar map views"
  - "Multiple coordinate reference systems"
  - "Smooth camera transitions"
  - "Accurate geodetic calculations"
supportedStandards:
  - "WGS84 (EPSG:4326)"
  - "Web Mercator (EPSG:3857)"
  - "Custom CRS via proj4"
audience: "both"
order: 5
featured: true
comingSoon: false
publishDate: 2026-01-01
draft: false
---

## Visualization Modes

iTowns provides two primary visualization modes:

### GlobeView

A true 3D representation of Earth with:
- Accurate spherical geometry
- Atmospheric effects
- Day/night visualization
- Seamless zoom from space to street level

### PlanarView

A 2.5D map view ideal for:
- Regional datasets
- Urban environments
- When globe curvature isn't needed
- Better performance for dense local data

## Coordinate Reference Systems

iTowns natively supports multiple CRS:
- **WGS84 (EPSG:4326)** — Geographic coordinates (lat/lon)
- **Web Mercator (EPSG:3857)** — Standard web mapping
- **Custom CRS** — Define your own via proj4 definitions

## Example: Globe View

```javascript
const view = new itowns.GlobeView(container, {
  initialPosition: {
    longitude: 2.35,
    latitude: 48.85,
    altitude: 25000000,
  },
});
```

## Example: Planar View

```javascript
const view = new itowns.PlanarView(container, extent, {
  camera: {
    type: 'perspective',
    position: { x: 0, y: 0, z: 5000 },
  },
});
```

## When to Choose

| Use Case | Recommended View |
|----------|------------------|
| Global visualization | GlobeView |
| City-scale data | PlanarView |
| Cross-continental | GlobeView |
| High-density local | PlanarView |

