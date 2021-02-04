import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import { useAppState, useDispatch } from '../utils/AppStateContext';
import { GeolocationOnIcon, GeolocationOffIcon } from '../icons';

function AppStateHandler(): JSX.Element {
  const { geolocation } = useAppState();
  const dispatch = useDispatch();
  const toggleGeoLocation = () => {
    dispatch({ type: 'TOGGLE_GEOLOCATION' });
  };
  return (
    <List subheader={<ListSubheader>App State</ListSubheader>}>
      <ListItem>
        <ListItemIcon>{geolocation ? <GeolocationOnIcon /> : <GeolocationOffIcon />}</ListItemIcon>
        <ListItemText primary="現在地を表示" />
        <ListItemSecondaryAction>
          <Switch edge="end" checked={geolocation} onChange={toggleGeoLocation} />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default AppStateHandler;
