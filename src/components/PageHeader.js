import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title, subtitle, style }) => (
  <div style={{
    textAlign: 'center',
    marginBottom: '2em',
    paddingTop: '2em',
  }}>
    <h2 style={{
      fontSize: 24,
      fontWeight: 400,
      margin: 'auto'
    }}>
      {title}
    </h2>
    <h5
      hidden={!subtitle || true}
      style={{
        color: '#777',
        fontWeight: 300,
        margin: 'auto'
      }}
    >
      {subtitle}
    </h5>
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  style: PropTypes.shape({
    wrapper: PropTypes.object,
    title: PropTypes.object,
    subtitle: PropTypes.object
  })
};

export default PageHeader;
