export * from './fetchArticle';
export * from './mapConfigure';
export * from './handleFeature';
export * from './mapToState';
export * from './fetchText';

export const RELOAD = 'RELOAD';
export const RESIZE_WINDOW = 'RESIZE_WINDOW';
export const RESIZE = 'RESIZE';

export function reload(date) {
  return {
    type: RELOAD,
    date
  };
};

export function resize(width, height) {
  return {
    type: RESIZE,
    width,
    height,
  };
}
