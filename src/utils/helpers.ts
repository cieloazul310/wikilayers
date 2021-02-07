import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Coordinate } from 'ol/coordinate';
import { QueryPage, QueryPageWithCoord, PageFeature } from '../types';

export function isRecord(obj: any): obj is Record<string, unknown> {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object';
}

export function isQueryPage(obj: any): obj is QueryPage {
  return isRecord(obj) && typeof obj.pageid === 'number' && typeof obj.title === 'string' && typeof obj.extract === 'string';
}

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

export function definedProps<T extends Record<string, unknown>>(obj: T | Partial<T>): Partial<T> {
  function fromEntries(arr: [keyof T, unknown][]): T | Partial<T> {
    return Object.assign({}, ...arr.map(([k, v]) => ({ [k]: v })));
  }
  return fromEntries(Object.entries(obj).filter(([k, v]) => v !== undefined));
}
