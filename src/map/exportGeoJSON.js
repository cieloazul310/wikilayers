import { toLonLat } from 'ol/proj';

export function featuresToGeoJSON(features) {
  return {
    type: "FeatureCollection",
    features: features.map(feature => {
      const { geometry, properties } = feature;
      const { name, summary } = properties;

      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: toLonLat(geometry.coordinates)
        },
        properties: {
          name,
          summary
        }
      };
    })
  };
}

export function exportFile(geojson) {
  const blob = new Blob([geojson], {type : 'application/json'});
  const url = URL.createObjectURL(blob);
  return url;
}
