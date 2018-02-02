import React from 'react';
import PropTypes from 'prop-types';

import { pageHeader } from '../commonStyles';

const PageHeader = ({ title, subtitle, subElement, subElementStyle }) => (
  <header style={pageHeader.wrapper}>
    <h2 style={pageHeader.pageTitle}>{title}</h2>
    <h5 hidden={!subtitle} style={pageHeader.pageSubTitle}>
      {subtitle}
    </h5>
    <h5 hidden={!subElement} style={Object.assign({}, pageHeader.pageSubTitle, subElementStyle)}>
      {subElement}
    </h5>
  </header>
);

PageHeader.propTypes = {
  subtitle: PropTypes.string,
  subElement: PropTypes.element,
  subElementStyle: PropTypes.object
};

export default PageHeader;
