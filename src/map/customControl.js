import Control from 'ol/control';
import Attribution from 'ol/control/attribution';
import ScaleLine from 'ol/control/scaleline';

const customControl = Control.defaults({
  attribution: false
}).extend([
  new Attribution({
    collapsible: false
  }),
  new ScaleLine()
]);

export default customControl;
