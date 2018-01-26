import React from 'react';
import PropTypes from 'prop-types';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import commonStyles from '../../commonStyles';

const MapInfo = ({ selectedFeature, moveToArticle }) => (
  <Card style={commonStyles.mapInfo}
        zDepth={3}
        hidden={selectedFeature ? false : true}>
    <CardHeader
      title={selectedFeature ? selectedFeature.properties.name : '選択なし'}
      actAsExpander={typeof selectedFeature !== 'boolean'}
      showExpandableButton={typeof selectedFeature !== 'boolean'}
    />
    <CardText
      expandable={true}
      hidden={!selectedFeature}
      style={{
        maxHeight: 100,
        overflowY: 'scroll'
      }}
    >
      {selectedFeature ? `${selectedFeature.properties.summary.extract}` : ''}
    </CardText>
    <CardActions
      expandable={true}
      hidden={!selectedFeature}
    >
      <FlatButton
        label="続きを読む"
        primary={true}
        onClick={() => moveToArticle()}
      />
    </CardActions>
  </Card>
);

MapInfo.propTypes = {
  moveToArticle: PropTypes.func.isRequired,
};

export default MapInfo;
