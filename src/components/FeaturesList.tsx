import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useAppState } from '../utils/AppStateContext';
import { MapIcon } from '../icons';

function FeaturesList() {
  const { features } = useAppState();
  return (
    <List subheader={<ListSubheader>アイテム</ListSubheader>}>
      {features.map(({ properties }, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary={properties.title} />
          <ListItemSecondaryAction>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default FeaturesList;
