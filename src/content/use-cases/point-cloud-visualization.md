---
title: "Point Cloud Visualization"
summary: "Render and explore massive LiDAR and photogrammetry point clouds with real-time styling and measurement tools."
problem: "Point cloud datasets from LiDAR and photogrammetry can contain billions of points, making visualization challenging."
solution: "iTowns streams point clouds using 3D Tiles, enabling interactive exploration of datasets of any size with dynamic styling."
icon: "scatter"
industry: "research"
relatedFeatures:
  - "3d-tiles"
typicalDataSources:
  - "3D Tiles (PNTS)"
  - "Potree"
  - "LAS/LAZ"
complexity: "advanced"
audience: "developers"
featured: false
order: 30
publishDate: 2026-01-01
draft: false
---

## The Challenge

Point cloud visualization presents unique challenges:

- **Scale**: Billions of points in a single dataset
- **Performance**: Can't load everything at once
- **Styling**: Color by classification, intensity, elevation
- **Analysis**: Measurements, cross-sections, filtering

Desktop GIS tools often struggle with web delivery.

## How iTowns Helps

### Streaming Architecture

Point clouds are streamed using 3D Tiles:

- Only visible points are loaded
- Level-of-detail based on camera distance
- Memory budget management
- Request prioritization

### Dynamic Styling

Style points based on attributes:

```javascript
layer.style = {
  // Color by classification
  color: (point) => {
    switch (point.classification) {
      case 2: return '#8B4513'; // Ground
      case 6: return '#228B22'; // Vegetation
      case 9: return '#0000FF'; // Water
      default: return '#888888';
    }
  },
  // Size based on distance
  pointSize: (point, camera) => {
    return Math.min(4, 1000 / camera.distance);
  },
};
```

### Measurement Tools

Built-in tools for point cloud analysis:

- Distance measurement
- Area calculation
- Volume estimation
- Cross-section extraction

## Data Preparation

### From LAS/LAZ to 3D Tiles

```bash
# Using py3dtiles
py3dtiles convert input.las --out output_tiles/

# Using Cesium tools
npx 3d-tiles-tools tilesetToDatabase -i input.las
```

### Recommended Tiling

| Dataset Size | Tile Size | Max Points/Tile |
|--------------|-----------|-----------------|
| < 100M points | 50MB | 500,000 |
| 100M-1B points | 20MB | 200,000 |
| > 1B points | 10MB | 100,000 |

## Applications

- **Survey & Mapping**: As-built documentation
- **Archaeology**: Site recording
- **Forestry**: Vegetation analysis
- **Mining**: Volume calculations
- **Construction**: Progress monitoring

## Performance Tips

1. **Tile appropriately** — Smaller tiles for denser data
2. **Set memory budget** — Prevent browser crashes
3. **Use LOD** — Higher SSE for overview, lower for detail
4. **Filter early** — Remove noise before tiling

