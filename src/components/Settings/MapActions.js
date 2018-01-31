import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Restore from 'material-ui/svg-icons/action/restore';
import LayersClear from 'material-ui/svg-icons/maps/layers-clear';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
/*
import { featuresToGeoJSON, exportFile } from '../../map/exportGeoJSON';
*/
function handleFocus(event) {
  event.target.select();
}

const GeoJSONArea = ({ value }) => (
  <textarea
    value={value}
    rows={20}
    onChange={() => {}}
    style={{
      width: '100%',
    }}
    onFocus={handleFocus}
  />
);


class MapActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 'default',
      dialog: 'Dialog',
      action: () => {},
      textValue: 'GeoJSON',
      href: '',
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setDialog = this.setDialog.bind(this);
    this.onExportClick = this.onExportClick.bind(this);
  }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  setDialog = ({type, dialog}, action) => {
    this.setState({
      type,
      dialog,
      action: action
    });
  };

  onExportClick() {
    import('../../map/exportGeoJSON')
      .then(({ featuresToGeoJSON, exportFile }) => {
        const geojson = JSON.stringify(featuresToGeoJSON(this.props.features), null, 2);

        this.setState({
          textValue: geojson,
          href: exportFile(geojson)
        });

        this.setDialog({
          type: 'export',
          dialog: 'GeoJSONファイル'
        }, () => {});

        this.handleOpen();

      });
  }

  render() {
    const actions = [
      <FlatButton
        label="キャンセル"
        onClick={this.handleClose}
      />,
      <FlatButton
        label={this.state.type === 'export' ? 'ダウンロード' : '実行'}
        primary={true}
        onClick={() => {
          this.state.action();
          this.handleClose();
        }}
        href={this.state.type === 'export' ? this.state.href : ''}
        target={this.state.type === 'export' ? '_blank' : null}
        download={this.state.type === 'export'}
      />,
    ];

    return (
      <div>
        <List>
          <Subheader>機能</Subheader>
          <ListItem
            onClick={() => {
              /*
              this.setState({
                href: exportFile(this.state.textValue)
              });
              this.setDialog({
                type: 'export',
                dialog: 'GeoJSONファイル'
              }, () => {});
              this.handleOpen();*/
              this.onExportClick();
            }}
            leftIcon={
              <FileDownload />
            }
          >
            アイテムをGeoJSONで出力
          </ListItem>
          <ListItem
            onClick={() => {
              this.setDialog({
                type: 'default',
                dialog: '全てのアイテムを消去しますか？'
              }, () => {
                 this.props.initialize('features');
               });
              this.handleOpen();
            }}
            leftIcon={
              <LayersClear />
            }
          >
            全てのアイテムを削除
          </ListItem>
          <ListItem
            onClick={() => {
              this.setDialog({
                type: 'default',
                dialog: '設定を初期化しますか？'
              }, () => {
                 this.props.initialize('ALL');
               });
              this.handleOpen();
            }}
            leftIcon={
              <Restore />
            }
          >
            設定を初期化する
          </ListItem>
        </List>
        <div>
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            {
              (this.state.type === 'export') ? (
                <GeoJSONArea
                  value={this.state.textValue}
                />
              ) : this.state.dialog
            }
          </Dialog>
        </div>
      </div>
    );
  }
}

MapActions.propTypes = {
  initialize: PropTypes.func.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default MapActions;
