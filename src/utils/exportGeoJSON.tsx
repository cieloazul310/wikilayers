import * as React from 'react';
import { FeatureCollection } from 'geojson';
import { PageFeature } from '../types';
import { useAppState } from './AppStateContext';
import { getCoordinate } from './helpers';

export function featuresToGeoJSON(features: PageFeature[]): FeatureCollection {
  return {
    type: 'FeatureCollection',
    features: features.map((feature) => {
      const { title, page } = feature;
      const coordinates = getCoordinate(page);

      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates,
        },
        properties: {
          name: title,
          pageTitle: page.title,
          url: `https://ja.wikipedia.org/wiki/${page.title}`,
        },
      };
    }),
  };
}

export function exportFile(geojson: FeatureCollection): string {
  const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  return url;
}

export function useGeoJSON(): string {
  const { features } = useAppState();
  return React.useMemo(() => JSON.stringify(featuresToGeoJSON(features), null, 2), [features]);
}

export function useBlobUrl(json: string): string {
  return React.useMemo(() => {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    return url;
  }, [json]);
}
