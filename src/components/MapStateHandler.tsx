import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useAppState, useDispatch } from '../utils/AppStateContext';
import { baseLayers, BaseLayer } from '../layers/baseLayers';
import { LayersIcon } from '../icons';

function MapStateHandler(): JSX.Element {
  const { baseLayer } = useAppState();
  const dispatch = useDispatch();
  const onClick = (id: BaseLayer) => () => {
    dispatch({ type: 'SET_BASELAYER', layer: id });
  };

  return (
    <List subheader={<ListSubheader>背景地図</ListSubheader>}>
      {baseLayers.map(({ id, title }) => (
        <ListItem key={id} button onClick={onClick(id)}>
          <ListItemIcon>
            <LayersIcon color={id === baseLayer ? 'primary' : 'disabled'} />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );
}

export default MapStateHandler;
