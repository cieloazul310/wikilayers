import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import commonStyles from '../commonStyles';

const MapInfo = ({ feature }) => (
  <Card style={commonStyles.mapInfo}>
    <CardHeader
      title={feature ? feature.get('name') : '選択なし'}
      actAsExpander={typeof feature !== 'boolean'}
      showExpandableButton={typeof feature !== 'boolean'}
    />
    <CardText expandable={true} >
      {feature ? `${feature.get('extract').slice(0, 80)}...` : ''}
    </CardText>
    <CardActions expandable={true} >
      <FlatButton
        label="続きを読む"
        primary={true}
      />
    </CardActions>
  </Card>
);

export default MapInfo;
