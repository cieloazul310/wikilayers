import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { PageFeature } from '../types';

export function pageToFeature(feature: PageFeature): Feature {
  const { coordinates, title, pageid } = feature.page;
  if (!coordinates) throw new Error('coordinates missing');
  const point = [coordinates[0].lon, coordinates[0].lat];
  return new Feature({
    pageid,
    title: feature.title,
    id: pageid,
    pageTitle: title,
    visibility: true,
    selected: false,
    geometry: new Point(fromLonLat(point)),
  });
}

export default { pageToFeature };
