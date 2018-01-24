import olFeature from 'ol/feature';
import geomPoint from 'ol/geom/point';
import Proj from 'ol/proj';

function articleToFeature(article, title) {
  const coord = article.coordinates[0];
  const feature = new olFeature({
    article: article,
    name: title || article.title,
    geometry: new geomPoint(Proj.fromLonLat([coord.lon, coord.lat])),
    visibility: true,
    selected: false,
  });

  return feature;
}

export default articleToFeature;
