export * from './fetchArticle';
export * from './mapConfigure';
export * from './handleFeature';
export * from './mapToState';
export * from './fetchText';

export const RESIZE = 'RESIZE';
export const INITIALIZE = 'INITIALIZE';

export function resize(width, height) {
  return {
    type: RESIZE,
    width,
    height,
  };
}

export function initialize(target) {
  return {
    type: INITIALIZE,
    target
  }
}
