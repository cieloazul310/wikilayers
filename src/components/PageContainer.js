import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import { pageContainer } from '../commonStyles';

const PageContainer = ({ component }) => (
    <Paper style={pageContainer}>
      {component}
    </Paper>
);

PageContainer.propTypes = {
  component: PropTypes.element.isRequired
};

export default PageContainer;
