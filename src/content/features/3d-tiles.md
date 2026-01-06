---
title: "3D Tiles Support"
summary: "Load and render massive 3D datasets using the OGC 3D Tiles standard with automatic level-of-detail management."
icon: "cube"
category: "data-sources"
capabilities:
  - "Load 3D Tiles 1.0 and 1.1 tilesets"
  - "Automatic level-of-detail (LOD) selection"
  - "Batched and instanced 3D models"
  - "Point clouds (PNTS format)"
  - "Streaming for datasets of any size"
supportedStandards:
  - "OGC 3D Tiles 1.0"
  - "OGC 3D Tiles 1.1"
  - "Cesium 3D Tiles extensions"
relatedDocs: "https://github.com/iTowns/itowns/blob/master/docs/tutorials/3DTiles.md"
audience: "both"
order: 10
featured: true
comingSoon: false
publishDate: 2026-01-01
draft: false
---

## What are 3D Tiles?

3D Tiles is an open specification for streaming massive heterogeneous 3D geospatial datasets. It's the standard for delivering city-scale 3D content to web browsers.

## iTowns Implementation

iTowns provides first-class support for 3D Tiles, enabling you to:

### Render Large Datasets

Stream and render datasets that exceed available GPU memory through intelligent tile management. iTowns automatically loads tiles based on camera position and screen-space error thresholds.

### Support Multiple Content Types

- **Batched 3D Models (B3DM)** — Buildings, infrastructure, terrain meshes
- **Instanced 3D Models (I3DM)** — Trees, street furniture, repeated objects
- **Point Clouds (PNTS)** — LiDAR scans, photogrammetry point clouds
- **Composite Tiles** — Mixed content in a single tileset

### Optimize Performance

Built-in optimizations include:
- Frustum culling
- Screen-space error refinement
- Memory budget management
- Request prioritization

## Example Usage

```javascript
import * as itowns from 'itowns';

const layer = new itowns.C3DTilesLayer('buildings', {
  source: new itowns.C3DTilesSource({
    url: 'https://example.com/tileset.json',
  }),
  // Adjust quality vs. performance
  screenSpaceError: 16,
});

view.addLayer(layer);
```

## When to Use

3D Tiles is ideal when you need to:
- Visualize city-scale 3D models
- Display large point cloud datasets
- Stream 3D content that won't fit in memory
- Combine multiple 3D data types

## Related

- [Performance Optimization Guide](/blog/2026-01-performance-optimization)
- [3D Tiles Specification](https://docs.ogc.org/cs/22-025r4/22-025r4.html)

