
export const RELOAD = 'RELOAD';

export function reload(date) {
  return {
    type: RELOAD,
    date
  };
};
