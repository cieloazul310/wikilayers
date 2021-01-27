import { Attribution, ScaleLine, defaults as defaultControl } from "ol/control";

const customControl = defaultControl({
  attribution: false
}).extend([
  new Attribution({
    collapsible: false
  }),
  new ScaleLine()
]);

export default customControl;
