import olFeature from 'ol/Feature';
import geomPoint from 'ol/geom/Point';

import { fromLonLat } from "ol/proj";

export function createFeature(featureCard) {
  const { name, summary } = featureCard;
  const coord = summary.coordinates[0];
  return {
    type: "Feature",
    id: summary.date,
    geometry: {
      type: "Point",
      coordinates: fromLonLat([coord.lon, coord.lat])
    },
    properties: {
      name: name || summary.title,
      summary: summaryCreateURL(summary),
      visibility: true,
      selected: false,
    }
  };
}

function summaryCreateURL(summary) {
  const { lang, title } = summary;
  return {
    ...summary,
    url: `https://${lang}.wikipedia.org/wiki/${title}`,
    url_raw: `https://${lang}.wikipedia.org/wiki/${encodeURI(title)}`
  }
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
  const { name, summary, visibility, selected } = olFeature.getProperties();
  return {
    type: "Feature",
    id: olFeature.getId(),
    geometry: {
      type: "Point",
      coordinates: olFeature.getGeometry().getCoordinates()
    },
    properties: {
      name,
      summary,
      visibility,
      selected
    }
  };
}
