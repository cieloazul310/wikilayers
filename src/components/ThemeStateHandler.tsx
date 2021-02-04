import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import { useTheme } from '@material-ui/core/styles';
import { useToggleDarkMode } from '../utils/DispatchContext';
import { LightModeIcon, DarkModeIcon } from '../icons';

function ThemeStateHandler(): JSX.Element {
  const { palette } = useTheme();
  const toggleDarkMode = useToggleDarkMode();
  return (
    <List subheader={<ListSubheader>Theme State</ListSubheader>}>
      <ListItem>
        <ListItemIcon>{palette.type === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}</ListItemIcon>
        <ListItemText primary="ダークモード" />
        <ListItemSecondaryAction>
          <Switch edge="end" checked={palette.type === 'dark'} onChange={toggleDarkMode} />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default ThemeStateHandler;
