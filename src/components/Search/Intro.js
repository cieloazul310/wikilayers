import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import FlatButton from 'material-ui/FlatButton';
import { pageHeader } from '../../commonStyles';

const buttonStyle = {
  minWidth: 48
};

const Intro = ({ featureCard, locale, setLocale }) => (
  <header
    style={featureCard.status === 'none' ? pageHeader.wrapper : {
      height: 0,
    }}
  >
    {
      featureCard.status !== 'none' ? null : (
        <div>
          <div style={{
            textAlign: 'right',
          }}>
            <FlatButton
              label="EN"
              secondary={locale !== 'en'}
              style={buttonStyle}
              onClick={() => {
                if (locale === 'en') return;
                setLocale('en');
              }}
            />
            <FlatButton
              label="JA"
              secondary={locale !== 'ja'}
              style={buttonStyle}
              onClick={() => {
                if (locale === 'ja') return;
                setLocale('ja');
              }}
            />
          </div>
          <h1 style={pageHeader.appTitle}>
            WikiLayers
          </h1>
          <p style={pageHeader.appSubTitle}>
            <Translate value="intro.leader"/>
          </p>
        </div>
      )
    }
  </header>
);

Intro.propTypes = {
  featureCard: PropTypes.object,
  i18n: PropTypes.object
};

export default Intro;
