import Proj from 'ol/proj';

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
          coordinates: Proj.toLonLat(geometry.coordinates)
        },
        properties: {
          name,
          summary
        }
      };
    })
  };
}

/*
JSON.stringify(featuresToGeoJSON(features), null, '\t');
*/
