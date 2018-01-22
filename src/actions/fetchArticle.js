import { fetch } from 'cross-fetch';

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const SELECT_TITLE = 'SELECT_TITLE';
export const INVALIDATE_TITLE = 'INVALIDATE_TITLE';

export function selectTitle(title) {
  return {
    type: SELECT_TITLE,
    title
  };
}

export function invalidateTitle(title) {
  return {
    type: INVALIDATE_TITLE,
    title
  };
}

function requestTitle(title) {
  return {
    type: REQUEST_ARTICLE,
    title
  };
}

function receiveArticle(title, json) {
  return {
    type: RECEIVE_ARTICLE,
    data: json,
    receivedAt: Date.now(),
    title
  }
}

function titleParser(input) {
  // parse URL ex. https://ja.wikipedia.org/wiki/%E9%81%8A%E5%AD%90%E6%B0%B4%E8%8D%B7%E6%B5%A6%E3%81%AE%E6%AE%B5%E7%95%91
  if (input.slice(0, 4) === 'http') {
    const url = new URL(input);
    return decodeURI(url.pathname.slice(6));
  } else if (input.slice(0, 12) === 'ja.wikipedia') {
    const url = new URL(`https://${input}`);
    return decodeURI(url.pathname.slice(6));
  } else {
    return input;
  }
}

const requestURL = 'https://ja.wikipedia.org/w/api.php?'
  + 'origin=*'
  + '&action=query' + '&prop=extracts|pageimages|coordinates'
  + '&exintro&explaintext'
  + '&pithumbsize=200'
  + '&coprimary=all' + '&coprop=type|name|dim|country|region'
  + '&format=json' + '&formatversion=2'

export function fetchArticle(input) {
  return dispatch => {
    if (input === '') return;

    const title = titleParser(input);

    dispatch(requestTitle(title));

    return fetch(requestURL + `&titles=${encodeURI(title)}`,
      {
        method: 'GET',
        mode: 'cors'
      }
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        if (json.query.pages[0].hasOwnProperty('missing')) {
          dispatch(invalidateTitle(title));
        } else {
          dispatch(receiveArticle(title, json));
        }
      })
      .catch(err => console.log(`There has been a problem with your fetch operation: ${err.message}`));
  }
}
