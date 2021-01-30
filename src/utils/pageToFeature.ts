import { FirstQueryPages } from '../types';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';

export function pageToFeature(page: FirstQueryPages): Feature {
  const { coordinates, title, pageid } = page;
  const point = [coordinates[0].lon, coordinates[0].lat];
  return new Feature({
    pageid,
    title,
    id: pageid,
    visibility: true,
    selected: false,
    geometry: new Point(fromLonLat(point)),
  });
  /*
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
  };*/
}
