import React from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Restore from 'material-ui/svg-icons/action/restore';
import LayersClear from 'material-ui/svg-icons/maps/layers-clear';/*
import FileDownload from 'material-ui/svg-icons/file/file-download';
*/
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/*
<ListItem
  onClick={() => console.log('file download')toggleShowLabels()}
  leftIcon={
    <FileDownload />
  }
>
  アイテムをGeoJSONで出力
</ListItem>
*/

const MapActions = ({ mapConfigure, toggleGeolocation, toggleShowLabels, initialize }) => (
  <div>
    <List>
      <Subheader>機能</Subheader>
      <ListItem
        onClick={() => initialize('features')}
        leftIcon={
          <LayersClear />
        }
      >
        全てのアイテムを削除
      </ListItem>
      <ListItem
        onClick={() => initialize('ALL')}
        leftIcon={
          <Restore />
        }
      >
        設定を初期化する
      </ListItem>
    </List>
    <div>
        <Dialog
          title="Dialog With Actions"
          actions={false}
          modal={false}
          open={false}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
  </div>
);

MapActions.propTypes = {
  initialize: PropTypes.func.isRequired,
};

export default MapActions;
