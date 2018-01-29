import React from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';

const ListAbout = ({ onClick }) => (
  <div>
    <List>
      <Subheader>About WikiLayers</Subheader>
        <ListItem
          primaryText="WikiLayersについて"
          leftIcon={<InfoOutline />
          }
          onClick={() => {
            onClick('/about');
          }}
        />
    </List>
  </div>
);

ListAbout.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ListAbout;
