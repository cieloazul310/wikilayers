import Proj from 'ol/proj';

function featuresToGeoJSON(features) {
  return {
    type: "FeatureCollection",
    features: features.map(feature => {
      const { geometry, properties } = feature;
      delete properties.selected;
      delete properties.visibility;

      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: Proj.toLonLat(feature.geometry.coordinates)
        },
        properties
      };
    })
  };
}
/*
JSON.stringify(featuresToGeoJSON(features), null, '\t');
*/
