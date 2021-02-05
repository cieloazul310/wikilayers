import * as React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';

function Credit(): JSX.Element {
  return (
    <List subheader={<ListSubheader>WikiLayers</ListSubheader>}>
      <ListItem button component={Link} to="/about">
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="WikiLayersについて" />
      </ListItem>
    </List>
  );
}

export default Credit;
