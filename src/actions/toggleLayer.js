export const TOGGLE_LAYER = 'TOGGLE_LAYER';

export function toggleLayer(index) {
  return {
    type: TOGGLE_LAYER,
    index
  };
}
