---
title: "Climate Research Platform"
organization: "Example Research Institute"
organizationType: "research-institution"
country: "France"
website: "https://example-research.org"
projectName: "Urban Climate Observatory"
useCase: "Large-scale 3D visualization of urban environments for climate research and heat island analysis"
challenge: "Researchers needed to visualize and correlate decades of satellite data with 3D city models to understand urban heat island effects across multiple metropolitan areas."
solution: "Using iTowns, the team built a web-based 3D visualization platform that integrates multi-temporal satellite imagery with 3D building models and thermal overlays."
outcome: "The platform is now used by researchers across three continents and has contributed to multiple published papers on urban climate adaptation strategies."
industry: "research"
relatedUseCases:
  - "urban-planning"
  - "terrain-analysis"
featuresUsed:
  - "3d-tiles"
  - "wms-wmts"
dataTypes:
  - "3D Tiles (buildings)"
  - "WMS (satellite imagery)"
  - "GeoTIFF (thermal data)"
scale: "Multi-city (Paris, Lyon, Marseille)"
testimonial:
  quote: "iTowns allowed us to move from static analysis to interactive exploration. Our collaborators can now explore the data themselves, leading to insights we wouldn't have discovered otherwise."
  author: "Dr. Marie Laurent"
  role: "Lead Researcher, Climate Studies"
featured: true
order: 10
publishDate: 2026-01-01
draft: false
---

## The Challenge

The Example Research Institute needed to understand urban heat island effects across multiple French metropolitan areas. Their challenge was threefold:

1. **Data Volume**: Decades of Landsat and Sentinel-2 imagery (10+ TB)
2. **Context**: Correlating thermal patterns with 3D urban form
3. **Collaboration**: Enabling distributed teams to explore data together

Traditional desktop GIS tools couldn't handle the data volume or enable real-time collaboration.

## The Solution

### Architecture

The team built a web-based platform using iTowns:

- **Backend**: Tile server generating 3D Tiles from CityGML building data
- **Imagery**: WMTS service for multi-temporal satellite imagery
- **Frontend**: iTowns visualization with custom thermal analysis overlays

### Key Implementation Details

```javascript
// Multi-temporal imagery layer
const imagery = new itowns.ColorLayer('satellite', {
  source: new itowns.WMTSSource({
    url: 'https://data.example-research.org/wmts',
    layer: 'sentinel2',
    time: '2020-07-15', // User-selectable
  }),
});

// 3D buildings with thermal coloring
const buildings = new itowns.C3DTilesLayer('buildings', {
  source: buildingSource,
  style: {
    color: (feature) => thermalColorScale(feature.properties.lst),
  },
});
```

### Analysis Tools

Custom tools were developed for:
- Time-series animation of thermal patterns
- Cross-section profiles through heat islands
- Statistical comparison between time periods

## Results

### Research Impact

- **Publications**: 4 peer-reviewed papers citing the platform
- **Datasets**: 3 open datasets released
- **Collaborations**: 12 international research partnerships

### Technical Achievements

| Metric | Value |
|--------|-------|
| Data served | 2.5 TB imagery |
| Buildings rendered | 1.2 million |
| Concurrent users | 50+ |
| Page load time | < 3 seconds |

### User Adoption

The platform expanded beyond the original team:

- 45 registered researchers
- 3 universities using for teaching
- 2 city planning departments exploring data

## Lessons Learned

### What Worked Well

1. **Web delivery**: No software installation barriers
2. **3D Tiles streaming**: Handled scale without performance issues
3. **Open standards**: Easy integration with existing GIS workflows

### Challenges Overcome

1. **Initial learning curve**: iTowns documentation helped, but hands-on training was needed
2. **Custom styling**: Required understanding of shader-based approaches
3. **Data preparation**: CityGML to 3D Tiles conversion was the longest task

## Technology Stack

- **Visualization**: iTowns
- **Building Data**: CityGML → 3D Tiles (py3dtiles)
- **Imagery**: GeoServer (WMS/WMTS)
- **Backend**: Python (Flask)
- **Infrastructure**: Kubernetes on OpenStack

## Reproducibility

The team has open-sourced their implementation:

- [Platform code](https://github.com/example-research/urban-climate-platform)
- [Data processing scripts](https://github.com/example-research/climate-data-tools)
- [Research paper](https://doi.org/10.xxxx/example)

## Contact

Interested in learning more about this implementation?

- **Technical questions**: Open an issue on the platform repository
- **Research collaboration**: Contact Dr. Marie Laurent at the Example Research Institute
