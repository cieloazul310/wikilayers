import { reverseOlFeature } from './createFeature';

function createVectorEvent(map, obj) {
  map.on('singleclick', function(evt) {
    const olFeature = map.forEachFeatureAtPixel(evt.pixel,
      olFeature => olFeature,
      {
        layerFilter: (layer) => layer.get('title') === 'features',
        hitTolerance: 5
      });
    if (olFeature) {
      obj.selectFeature(reverseOlFeature(olFeature));
    } else {
      obj.clearSelectedFeature();
    }
  });
}

export default createVectorEvent;
