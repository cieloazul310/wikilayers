import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import commonStyles from '../../commonStyles';

const MapInfo = ({ selectedFeature }) => (
  <Card style={commonStyles.mapInfo}>
    <CardHeader
      title={selectedFeature ? selectedFeature.get('name') : '選択なし'}
      actAsExpander={typeof selectedFeature !== 'boolean'}
      showExpandableButton={typeof selectedFeature !== 'boolean'}
    />
    <CardText
      expandable={true}
      hidden={!selectedFeature}
    >
      {selectedFeature ? `${selectedFeature.get('extract').slice(0, 80)}...` : ''}
    </CardText>
    <CardActions
      expandable={true}
      hidden={!selectedFeature}
    >
      <FlatButton
        label="続きを読む"
        primary={true}
      />
    </CardActions>
  </Card>
);

export default MapInfo;
