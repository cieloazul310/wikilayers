import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import commonStyles from '../commonStyles';

const MapInfo = ({title}) => (
  <Card style={commonStyles.mapInfo}>
    <CardHeader
      title={title}
      actAsExpander={true}
      showExpandableButton={title !== '選択なし'}
    />
    <CardActions expandable={true} >
      <FlatButton label="記事を読む" />
    </CardActions>
  </Card>
);

export default MapInfo;
