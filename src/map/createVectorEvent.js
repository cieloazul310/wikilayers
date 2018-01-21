function createVectorEvent(map, obj) {
  map.on('singleclick', function(evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, feature => feature);
    if (feature) {
      obj.selectFeature(feature);
    } else {
      obj.clearSelectedFeature();
    }
  });
}

export default createVectorEvent;
