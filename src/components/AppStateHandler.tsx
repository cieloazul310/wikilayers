import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import { useAppState, useDispatch } from '../utils/AppStateContext';
import { GeolocationOnIcon, GeolocationOffIcon, ShowLabelsIcon } from '../icons';

function AppStateHandler(): JSX.Element {
  const { geolocation, alwaysShowLabels } = useAppState();
  const dispatch = useDispatch();
  const toggleGeoLocation = () => {
    dispatch({ type: 'TOGGLE_GEOLOCATION' });
  };
  const toggleAlwaysShowLabels = () => {
    dispatch({ type: 'TOGGLE_ALWAYSSHOWLABELS' });
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
      <ListItem>
        <ListItemIcon>
          <ShowLabelsIcon />
        </ListItemIcon>
        <ListItemText primary="ラベルを常に表示" />
        <ListItemSecondaryAction>
          <Switch edge="end" checked={alwaysShowLabels} onChange={toggleAlwaysShowLabels} />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default AppStateHandler;
