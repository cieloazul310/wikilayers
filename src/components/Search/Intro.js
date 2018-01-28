import React from 'react';
import PropTypes from 'prop-types';

import { pageHeader } from '../../commonStyles';

const Intro = ({ featureCard }) => (
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
          Wikipediaを検索して地図に表示しよう！
          </p>
        </div>
      )
    }
  </header>
);

Intro.propTypes = {
  featureCard: PropTypes.object
};

export default Intro;
