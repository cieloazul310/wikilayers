import React from 'react';
import PropTypes from 'prop-types';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { mapInfo as mapInfoStyle } from '../../commonStyles';

const MapInfo = ({ selectedFeature, moveToArticle }) => {
  const isSelected = Object.keys(selectedFeature).length > 0;
  return (
    <Card style={mapInfoStyle}
          zDepth={3}
          hidden={!isSelected}>
      <CardHeader
        title={isSelected ? selectedFeature.properties.name : '選択なし'}
        actAsExpander={isSelected}
        showExpandableButton={isSelected}
      />
      <CardText
        expandable={true}
        hidden={!isSelected}
        style={{
          maxHeight: 100,
          overflowY: 'scroll'
        }}
      >
        {isSelected ? `${selectedFeature.properties.summary.extract}` : ''}
      </CardText>
      <CardActions
        expandable={true}
        hidden={!isSelected}
      >
        <FlatButton
          label="続きを読む"
          primary={true}
          onClick={() => moveToArticle()}
        />
      </CardActions>
    </Card>
  );
}

MapInfo.propTypes = {
  moveToArticle: PropTypes.func.isRequired,
  selectedFeature: PropTypes.object.isRequired
};

export default MapInfo;
