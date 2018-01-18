import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import WikiMenu from '../containers/WikiMenu';
import MenuItem from 'material-ui/MenuItem';
import Place from 'material-ui/svg-icons/maps/place';
import Search from 'material-ui/svg-icons/action/search';
import Settings from 'material-ui/svg-icons/action/settings';
import {
  Toolbar,
  ToolbarGroup,
} from 'material-ui/Toolbar';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <WikiMenu
            filter="/map"
            text="Map"
            icon={<Place />}
          />
          <WikiMenu
            filter="/"
            text="Search"
            icon={<Search />}
          />
          <WikiMenu
            filter="/settings"
            text="Settings"
            icon={<Settings />}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
