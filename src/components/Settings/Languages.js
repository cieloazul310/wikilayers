import React from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import LangIcon from 'material-ui/svg-icons/action/language';
import SearchIcon from 'material-ui/svg-icons/action/search';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Remove from 'material-ui/svg-icons/content/remove';
import { greenA700 } from 'material-ui/styles/colors';

import { Translate } from 'react-redux-i18n';
import langs from '../../data/languages.json';

const uiLangs = [
  { code: 'ja', title: '日本語' },
  { code: 'en', title: 'English' }
];

const searchLangs = [
  { type: 'auto', Wiki: getLang(), lang_name: `Auto` },
  ...langs
];

function getLang() {
  // attributed to https://qiita.com/shogo82148/items/548a6c9904eb19269f8c
  const lang =
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage;
  const primary = lang.split('-')[0];
  return primary;
}

const Languages = ({ locale, setLocale, searchLang, setSearchLang }) => (
  <div>
    <List>
      <Subheader>
        <Translate value="settings.langTitle" />
      </Subheader>
      <ListItem
        leftIcon={<LangIcon />}
        initiallyOpen={true}
        primaryText={<Translate value="settings.uiLang" />}
        nestedItems={uiLangs.map((lang, index) => (
          <ListItem
            key={index}
            primaryText={lang.title}
            leftIcon={
              locale === lang.code ? (
                <CheckCircle color={greenA700} />
              ) : (
                <Remove />
              )
            }
            onClick={() => {
              setLocale(lang.code);
            }}
          />
        ))}
      />
      <ListItem
        leftIcon={<SearchIcon />}
        initiallyOpen={false}
        primaryText={<Translate value="settings.searchLang" />}
        nestedItems={searchLangs.map((lang, index) => (
          <ListItem
            key={index}
            primaryText={`${lang.lang_name} (${lang.Wiki})`}
            leftIcon={
              searchLang.type === lang.type &&
              searchLang.code === lang.Wiki ? (
                <CheckCircle color={greenA700} />
              ) : (
                <Remove />
              )
            }
            onClick={() => {
              setSearchLang(lang);
            }}
          />
        ))}
      />
    </List>
  </div>
);

Languages.propTypes = {
  setLocale: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};

export default Languages;
