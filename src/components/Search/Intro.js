import React from 'react';
import PropTypes from 'prop-types';

import commonStyles from '../../commonStyles';

const Intro = ({ featureCard }) => (
  <div
    style={featureCard.status === 'none' ? commonStyles.pageHeader : {
      height: 0,
    }}
  >
    {
      featureCard.status !== 'none' ? <div /> : (
        <div>
          <h1 style={commonStyles.appTitle}>
            WikiLayers
          </h1>
          <p style={{
            fontSize: 14,
            color: '#777'
          }}>
          Wikipediaを検索して地図に表示しよう！
          </p>
        </div>
      )
    }
  </div>
);

Intro.propTypes = {
  featureCard: PropTypes.object
};

export default Intro;
