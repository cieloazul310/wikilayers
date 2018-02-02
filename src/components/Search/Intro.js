import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { pageHeader } from '../../commonStyles';

const Intro = ({ featureCard, i18n }) => (
  <header
    style={featureCard.status === 'none' ? pageHeader.wrapper : {
      height: 0,
    }}
  >
    {
      featureCard.status !== 'none' ? null : (
        <div>
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
