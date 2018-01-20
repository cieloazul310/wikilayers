function createVectorEvent(map, popup) {
  map.on('click', function(evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, feature => feature);
    if (feature) {
      const coordinates = feature.getGeometry().getCoordinates();
      popup.setPosition(coordinates);
      popup.getElement().innerHTML = feature.get('name');
/*
      $(element).popover({
        'placement': 'top',
        'html': true,
        'content': feature.get('name')
      });
      $(element).popover('show');
      */
    } else {
      /*
      $(element).popover('destroy');
      */
    }
  });

  // change mouse cursor when over marker
  map.on('pointermove', e => {
    if (e.dragging) {
      /*
      $(element).popover('destroy');*/
      return;
    }
    const pixel = map.getEventPixel(e.originalEvent);
    const hit = map.hasFeatureAtPixel(pixel);/*
    map.getTarget().style.cursor = hit ? 'pointer' : '';*/
  });
}

export default createVectorEvent;
