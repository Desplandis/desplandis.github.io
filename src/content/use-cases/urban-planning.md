---
title: "Urban Planning & Digital Twins"
summary: "Build interactive 3D city models for urban planning, development impact analysis, and citizen engagement."
problem: "Urban planners need to visualize proposed developments in context, assess impacts, and communicate plans to stakeholders."
solution: "iTowns enables interactive 3D city models combining existing buildings, terrain, and proposed developments with real-time visualization."
icon: "building"
industry: "urban-planning"
relatedFeatures:
  - "3d-tiles"
  - "wms-wmts"
  - "globe-view"
relatedCaseStudies:
  - "paris-3d"
typicalDataSources:
  - "3D Tiles (buildings)"
  - "WMS/WMTS (imagery)"
  - "GeoJSON (parcels)"
  - "CityGML (BIM)"
complexity: "intermediate"
audience: "both"
featured: true
order: 10
publishDate: 2026-01-01
draft: false
---

## The Challenge

Urban planners face complex visualization challenges:

- **Context**: Showing proposed developments in their real-world setting
- **Scale**: City-wide datasets with millions of buildings
- **Stakeholders**: Technical staff and non-technical citizens
- **Analysis**: Shadow studies, viewshed analysis, density calculations

Traditional 2D maps and static renders fail to communicate spatial relationships effectively.

## How iTowns Helps

### Interactive 3D City Models

Build navigable city models that stakeholders can explore themselves:

- Fly through proposed developments
- Toggle between existing and proposed states
- View from any angle or perspective
- Measure distances and heights

### Multi-Source Data Integration

Combine data from multiple sources in a single view:

- **Base terrain** from elevation services
- **Existing buildings** from 3D Tiles
- **Imagery** from WMS/WMTS
- **Proposed buildings** from BIM/CityGML
- **Parcel boundaries** from GeoJSON

### Web-Based Delivery

No software installation required:

- Runs in any modern browser
- Share via URL
- Embed in public engagement portals
- Works on tablets for field use

## Example Application

```javascript
// Load city base model
const buildings = new itowns.C3DTilesLayer('existing', {
  source: cityBuildingsSource,
  style: { color: '#cccccc' },
});

// Load proposed development
const proposed = new itowns.C3DTilesLayer('proposed', {
  source: proposedBuildingsSource,
  style: { color: '#4CAF50' },
});

// Add shadow analysis layer
const shadows = new itowns.ShadowLayer('shadows', {
  datetime: new Date('2026-06-21T12:00:00'),
});
```

## Typical Workflow

1. **Data Preparation**: Convert CAD/BIM to 3D Tiles
2. **Base Map Setup**: Configure imagery and terrain
3. **Integration**: Layer proposed developments
4. **Analysis**: Add measurement and analysis tools
5. **Publication**: Deploy to web for stakeholder access

## Key Benefits

| Stakeholder | Benefit |
|-------------|---------|
| Planners | Faster impact assessment |
| Developers | Clear communication of proposals |
| Citizens | Better understanding of changes |
| Council | Informed decision-making |

## Related

- [Case Study: Paris 3D](/case-studies/paris-3d)
- [3D Tiles Feature](/features/3d-tiles)
- [Getting Started Guide](/docs/getting-started)

