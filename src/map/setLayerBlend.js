export default function setLayerBlend(layer, blendmode = 'multiply') {
  layer.on("precompose", (evt) => {
    evt.context.globalCompositeOperation = blendmode;
  });
  layer.on("postcompose", (evt) => {
    evt.context.globalCompositeOperation = "source-over";
  });
}