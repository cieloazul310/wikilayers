export * from './fetchArticle';
export * from './mapConfigure';
export * from './handleFeature';
export * from './mapToState';
export * from './fetchText';

export const RELOAD = 'RELOAD';

export function reload(date) {
  return {
    type: RELOAD,
    date
  };
};
