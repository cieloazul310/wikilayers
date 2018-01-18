import {  TOGGLE_LAYER} from '../actions';
import { cjstd, seamless, relief, slope } from '../layers/gsi';
import { osm } from '../layers/osm';

const initialLayers = [cjstd, osm, seamless, relief, slope];
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
