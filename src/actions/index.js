export * from './fetchArticle';
export * from './toggleLayer';
export * from './handleFeature';
export * from './mapToState';

export const RELOAD = 'RELOAD';

export function reload(date) {
  return {
    type: RELOAD,
    date
  };
};
