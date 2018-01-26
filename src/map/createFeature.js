import olFeature from 'ol/feature';
import geomPoint from 'ol/geom/point';

import Proj from 'ol/proj';

export function createFeature(article, name) {
  const coord = article.coordinates[0];
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: Proj.fromLonLat([coord.lon, coord.lat])
    },
    properties: {
      name: name || article.title,
      article,
      visibility: true,
      selected: false,
    }
  };
}

export function createOlFeature(feature) {
  const olf = new olFeature({
    geometry: new geomPoint(feature.geometry.coordinates),
    ...feature.properties,
  });
  olf.setId(feature.id);
  return olf;
}

export function reverseOlFeature(olFeature) {
  const { name, article, visibility, selected } = olFeature.getProperties();
  return {
    type: "Feature",
    id: olFeature.getId(),
    geometry: {
      type: "Point",
      coordinates: olFeature.getGeometry().getCoordinates()
    },
    properties: {
      name,
      article,
      visibility,
      selected
    }
  };
}
