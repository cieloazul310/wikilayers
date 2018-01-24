export const REQUEST_TEXT = 'REQUEST_TEXT';
export const RECEIVE_TEXT = 'RECEIVE_TEXT';

export function requestText(article) {
  return {
    type: REQUEST_TEXT,
    article
  };
}

export function receiveText(page) {
  return {
    type: RECEIVE_TEXT,
    page
  };
}

function createUrl(article) {
  return `https://${article.lang}.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&format=json&formatversion=2&pageids=${article.pageid}`;
}

function fetchText(article) {
  return dispatch => {
    dispatch(requestText(article));
    return fetch(createUrl(article), {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .then(json => {
              const page = json.query.pages[0];
              dispatch(receiveText(page));
              return page;
            })
            .catch(err => console.log(`There has been a problem with your fetch operation: ${err.message}`));
  }
}

// Do not fetch text if textCache has the same text.
function shouldFetchText(state, article) {
  const page = state.textCache.pages.hasOwnProperty(article.pageid);
  if (!page) {
    return true;
  } else {
    return false;
  }
}

export function fetchTextIfNeeded(article) {
  return (dispatch, getState) => {
    if (shouldFetchText(getState(), article)) {
      return dispatch(fetchText(article));
    }
  }
}
