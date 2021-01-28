import { FirstQueryPages, PageFeature } from '../types';

export function pageToFeature(page: FirstQueryPages): PageFeature {
  const { coordinates } = page;
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [coordinates[0].lon, coordinates[0].lat],
    },
    properties: {
      title: page.title,
      pageid: page.pageid,
      extract: page.extract,
    },
  };
}
