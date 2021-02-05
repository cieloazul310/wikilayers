import { toLonLat } from 'ol/proj';
import { FeatureCollection } from 'geojson';
import { PageFeature } from '../types';

export function featuresToGeoJSON(features: PageFeature[]): FeatureCollection {
  return {
    type: 'FeatureCollection',
    features: features.map((feature) => {
      const { title, page } = feature;
      const { coordinates } = page;
      const coord = coordinates ? [coordinates[0].lon, coordinates[0].lat] : null;

      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: toLonLat(coord),
        },
        properties: {
          name: title,
          pageTitle: page.title,
          extract: page.extract,
        },
      };
    }),
  };
}

export function exportFile(geojson: FeatureCollection): string {
  const blob = new Blob([geojson], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  return url;
}
