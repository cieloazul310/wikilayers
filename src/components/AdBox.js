import React from 'react';
import PropTypes from 'prop-types';
import AdSense from 'react-adsense';

const AdBox = ({ type }) => (
  <div>
    <AdSense.Google
      client='ca-pub-7323207940463794'
      slot={type === 'top' ? '9840296819' : '4497165326'} />
  </div>
);

AdBox.propTypes = {
  type: PropTypes.string
};

export default AdBox;
