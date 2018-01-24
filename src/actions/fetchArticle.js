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

function receiveArticle(article, title) {
  return {
    type: RECEIVE_ARTICLE,
    article,
    title
  }
}

/** Input Parser
  *
  * return Object {...url, title}
  */
function titleParser(input) {
  // parse URL ex. https://ja.wikipedia.org/wiki/%E9%81%8A%E5%AD%90%E6%B0%B4%E8%8D%B7%E6%B5%A6%E3%81%AE%E6%AE%B5%E7%95%91
  const splitBySlash = input.split('/');
  if (splitBySlash[1] === '' && splitBySlash[2].split('.').indexOf('wikipedia') > 0) {
    /** https: / / ja . wikipedia . org / wiki / title
      *         ^
      *   splitBySlash[1] === 0
      */
    const url = new URL(input);
    return {
      origin: url.origin,
      lang: url.hostname.split('.')[0],
      title: decodeURI(url.pathname.split('/')[2]),
    };
  } else if (splitBySlash[0].split('.').indexOf('wikipedia') > 0) {
    /** 1) ja . wikipedia . org / wiki / title
      * 2) ja . m . wikipedia . org / wiki / title
      */
    const url = new URL(`https://${input}`);
    return {
      origin: url.origin,
      lang: url.hostname.split('.')[0],
      title: decodeURI(url.pathname.split('/')[2])
    };
  } else {
    return {
      origin: 'https://ja.wikipedia.org',
      title: input,
      lang: 'ja'
    };
  }
}

/*
const requestURL = 'https://ja.wikipedia.org/w/';*/
const query = 'api.php?' + 'origin=*'
  + '&action=query' + '&prop=extracts|pageimages|coordinates|langlinks'
  + '&exintro&explaintext'
  + '&pithumbsize=200'
  + '&coprimary=all'
  + '&format=json' + '&formatversion=2' + '&redirects';

const query2 = 'api.php?' + 'origin=*'
  + '&action=query' + '&prop=coordinates' + '&coprimary=all'
  + '&format=json' + '&formatversion=2';

const fetchOptions = {method: 'GET', mode: 'cors'};
const langOrder = ['en', 'es', 'de', 'zh', 'ar', 'kr', 'ja'];

function createFirstURL(lang, title) {
  return `https://${lang}.wikipedia.org/w/${query}&titles=${encodeURI(title)}`;
}

function createURLByLang(lang) {
  return `https://${lang.lang}.wikipedia.org/w/${query2}&titles=${encodeURI(lang.title)}`;
}

export function fetchArticle(input) {

  return dispatch => {
    if (input === '') return;

    const post = titleParser(input);
    const firstURL = createFirstURL(post.lang, post.title);

    dispatch(requestTitle(post.title));

    return fetch(firstURL, fetchOptions)
      .then(response => response.json())
      .then(json => {
        const article = json.query.pages[0];
        article.lang = post.lang;

        if (article.hasOwnProperty('missing')) {
          dispatch(invalidateTitle(post.title));
        } else if (article.hasOwnProperty('coordinates')) {
          dispatch(receiveArticle(article, post.title));
        } else if (article.hasOwnProperty('langlinks')) {

          const langs = article.langlinks
                          .filter(obj => langOrder.indexOf(obj.lang) >= 0)
                          .sort((a, b) => langOrder.indexOf(a.lang) - langOrder.indexOf(b.lang));

          function fetchAnotherBites(lang, article) {
            return () => {
              return new Promise((resolve, reject) => {
                console.log(lang.lang);
                if (!article.hasOwnProperty('coordinates')) {
                  console.log(`${lang.lang} fetching!`);
                  fetch(createURLByLang(lang), fetchOptions)
                    .then(response => response.json())
                    .then(data => {
                      const page = data.query.pages[0];
                      if (page.hasOwnProperty('coordinates')) {
                        article.coordinates = page.coordinates;
                        return data;
                      }
                    })
                    .then(data => {
                      dispatch(receiveArticle(article, post.title));
                      resolve();
                    })
                    .catch(err => console.log(`There has been a problem with your fetch operation: ${err.message}`));
                } else {
                  resolve();
                }
              })
            }
          }

          langs.map(lang => fetchAnotherBites(lang, article))
              .reduce((prev, curr) => prev.then(curr), Promise.resolve());
          dispatch(receiveArticle(article, post.title));

        } else {
          dispatch(receiveArticle(article, post.title));
        }
      })
      .catch(err => console.log(`There has been a problem with your fetch operation: ${err.message}`));
  }
}
