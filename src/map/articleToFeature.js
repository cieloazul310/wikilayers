import olFeature from 'ol/feature';
import geomPoint from 'ol/geom/point';
import Proj from 'ol/proj';

function articleToFeature(article) {
  const coord = article.coordinates[0];
  const feature = new olFeature({
    geometry: new geomPoint(Proj.fromLonLat([coord.lon, coord.lat])),
    name: article.title,
    pageid: article.pageid,
    visibility: true,
    selected: false
  });

  return feature;
}

export default articleToFeature;
