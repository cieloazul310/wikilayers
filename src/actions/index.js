export * from './fetchArticle';
export * from './mapConfigure';
export * from './handleFeature';
export * from './mapToState';
export * from './fetchText';

export const RELOAD = 'RELOAD';
export const RESIZE_WINDOW = 'RESIZE_WINDOW';

export function reload(date) {
  return {
    type: RELOAD,
    date
  };
};

export function resizeWindow(win) {
  return {
    type: RESIZE_WINDOW,
    win
  };
}
