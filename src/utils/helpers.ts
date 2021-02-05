import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Coordinate } from 'ol/coordinate';
import { QueryPage, QueryPageWithCoord, PageFeature } from '../types';

export function hasCoords(page: QueryPage): page is QueryPageWithCoord {
  return Boolean(page.coordinates);
}

export function pageToFeature(title: string, page: QueryPageWithCoord): PageFeature {
  return {
    title,
    page,
  };
}

export function getCoordinate({ coordinates }: QueryPageWithCoord): Coordinate {
  const [coord] = coordinates;
  return [coord.lon, coord.lat];
}

export function pageToOlFeature(feature: PageFeature): Feature {
  const { title, pageid } = feature.page;
  return new Feature({
    pageid,
    title: feature.title,
    id: pageid,
    pageTitle: title,
    visibility: true,
    selected: false,
    geometry: new Point(fromLonLat(getCoordinate(feature.page))),
  });
}
