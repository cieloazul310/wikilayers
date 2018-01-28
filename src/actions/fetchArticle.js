import { fetch } from 'cross-fetch';

export const REQUEST_NAME = 'REQUEST_NAME';
export const RECEIVE_SUMMARY = 'RECEIVE_SUMMARY';
export const INVALIDATE_NAME = 'INVALIDATE_NAME';

export function invalidateName(name) {
  return {
    type: INVALIDATE_NAME,
    name
  };
}

function requestName(name) {
  return {
    type: REQUEST_NAME,
    name
  };
}

function receiveSummary(summary, name) {
  return {
    type: RECEIVE_SUMMARY,
    summary,
    name,
    date: Date.now()
  };
}

/** Input Parser
 *
 * return Object {...url, title}
 */
function titleParser(input) {
  // parse URL ex. https://ja.wikipedia.org/wiki/%E9%81%8A%E5%AD%90%E6%B0%B4%E8%8D%B7%E6%B5%A6%E3%81%AE%E6%AE%B5%E7%95%91
  const splitBySlash = input.split('/');
  if (
    splitBySlash[1] === '' &&
    splitBySlash[2].split('.').indexOf('wikipedia') > 0
  ) {
    /** https: / / ja . wikipedia . org / wiki / title
     *         ^
     *   splitBySlash[1] === 0
     */
    const url = new URL(input);
    return {
      origin: url.origin,
      lang: url.hostname.split('.')[0],
      name: decodeURI(url.pathname.split('/')[2])
    };
  } else if (splitBySlash[0].split('.').indexOf('wikipedia') > 0) {
    /** 1) ja . wikipedia . org / wiki / title
     * 2) ja . m . wikipedia . org / wiki / title
     */
    const url = new URL(`https://${input}`);
    return {
      origin: url.origin,
      lang: url.hostname.split('.')[0],
      name: decodeURI(url.pathname.split('/')[2])
    };
  } else {
    return {
      origin: 'https://ja.wikipedia.org',
      name: input,
      lang: 'ja'
    };
  }
}

/*
const requestURL = 'https://ja.wikipedia.org/w/';*/
const query =
  'api.php?' +
  'origin=*' +
  '&action=query' +
  '&prop=extracts|pageimages|coordinates|langlinks' +
  '&exintro&explaintext' +
  '&pithumbsize=200' +
  '&coprimary=all' +
  '&format=json' +
  '&formatversion=2' +
  '&redirects';

const query2 =
  'api.php?' +
  'origin=*' +
  '&action=query' +
  '&prop=coordinates' +
  '&coprimary=all' +
  '&format=json' +
  '&formatversion=2';

const fetchOptions = { method: 'GET', mode: 'cors' };
const langOrder = ['en', 'es', 'de', 'zh', 'ar', 'kr', 'ja'];

function createFirstURL(lang, title) {
  return `https://${lang}.wikipedia.org/w/${query}&titles=${encodeURI(title)}`;
}

function createURLByLang(lang) {
  return `https://${lang.lang}.wikipedia.org/w/${query2}&titles=${encodeURI(
    lang.title
  )}`;
}

export function fetchSummary(input) {
  return dispatch => {
    if (input === '') return;

    const post = titleParser(input);
    const firstURL = createFirstURL(post.lang, post.name);

    dispatch(requestName(post.name));

    return fetch(firstURL, fetchOptions)
      .then(response => response.json())
      .then(json => {
        const summary = json.query.pages[0];
        summary.lang = post.lang;

        if (summary.hasOwnProperty('missing')) {
          dispatch(invalidateName(post.name));
        } else if (summary.hasOwnProperty('coordinates')) {
          dispatch(receiveSummary(summary, post.name));
        } else if (summary.hasOwnProperty('langlinks')) {
          const langs = summary.langlinks
            .filter(obj => langOrder.indexOf(obj.lang) >= 0)
            .sort(
              (a, b) => langOrder.indexOf(a.lang) - langOrder.indexOf(b.lang)
            );

          function fetchAnotherBites(lang, summary) {
            return () => {
              return new Promise((resolve, reject) => {
                if (!summary.hasOwnProperty('coordinates')) {
                  fetch(createURLByLang(lang), fetchOptions)
                    .then(response => response.json())
                    .then(data => {
                      const page = data.query.pages[0];
                      if (page.hasOwnProperty('coordinates')) {
                        summary.coordinates = page.coordinates;
                        return data;
                      }
                    })
                    .then(data => {
                      dispatch(receiveSummary(summary, post.name));
                      resolve();
                    })
                    .catch(err =>
                      console.log(
                        `There has been a problem with your fetch operation: ${
                          err.message
                        }`
                      )
                    );
                } else {
                  resolve();
                }
              });
            };
          }

          langs
            .map(lang => fetchAnotherBites(lang, summary))
            .reduce((prev, curr) => prev.then(curr), Promise.resolve());
          dispatch(receiveSummary(summary, post.name));
        } else {
          dispatch(receiveSummary(summary, post.name));
        }
      })
      .catch(err =>
        console.log(
          `There has been a problem with your fetch operation: ${err.message}`
        )
      );
  };
}
