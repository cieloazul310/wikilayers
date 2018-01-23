import {  TOGGLE_LAYER} from '../actions';
import { cjstd, seamless, relief, slope, specialRelief } from '../layers/gsi';
import { osm } from '../layers/osm';
import setLayerBlend from '../map/setLayerBlend';

const initialLayers = [cjstd, osm, seamless, relief, slope, specialRelief];

setLayerBlend(specialRelief.getLayers().getArray()[2]);

initialLayers.forEach((layer, index) => {
  layer.setVisible(index === 0);
});

function baseLayers(state = initialLayers, action) {
  switch (action.type) {
    case TOGGLE_LAYER:
      return state.map((layer, index) => {
        layer.setVisible(index === action.index);
        return layer;
      });
    default:
      return state;
  }
}

export default baseLayers;
