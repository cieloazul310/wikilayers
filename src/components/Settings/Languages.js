import React from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import LangIcon from 'material-ui/svg-icons/action/language';
import SearchIcon from 'material-ui/svg-icons/action/search';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Remove from 'material-ui/svg-icons/content/remove';
import { grey500, greenA700 } from 'material-ui/styles/colors';

import { Translate } from 'react-redux-i18n';

const uiLangs = [
  { code: 'ja', title: '日本語' },
  { code: 'en', title: 'English' }
];
const searchLangs = [
  { type: 'auto', code: '', title: `Auto (${getLang()})` },
  { type: 'manually', code: 'en', title: 'English' },
  { type: 'manually', code: 'es', title: 'Español' },
  { type: 'manually', code: 'pt', title: 'Português' },
  { type: 'manually', code: 'de', title: 'Deutsch' },
  { type: 'manually', code: 'ar', title: 'العربية' },
  { type: 'manually', code: 'hi', title: 'हिन्दी' },
  { type: 'manually', code: 'ja', title: '日本語' },
  { type: 'manually', code: 'zh', title: '中文' },
  { type: 'manually', code: 'kr', title: '한국어' }
];

['en', 'es', 'de', 'zh', 'ar', 'kr', 'ja']

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

const Languages = ({ i18n, setLocale }) => (
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
              i18n.locale === lang.code ? (
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
            primaryText={`${lang.title} (${lang.code})`}
            leftIcon={
              i18n.locale === lang.code ? (
                <CheckCircle color={greenA700} />
              ) : (
                <Remove />
              )
            }
            onClick={() => {/*
              setLocale(lang.code);*/
              console.log(lang.title);
            }}
          />
        ))}
      />
    </List>
  </div>
);

Languages.propTypes = {
  setLocale: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired
};

export default Languages;
