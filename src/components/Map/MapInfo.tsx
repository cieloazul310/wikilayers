import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FlatButton from '@material-ui/core/Button';

import { mapInfo as mapInfoStyle } from '../../commonStyles';

const MapInfo = ({ selectedFeature, moveToArticle }) => {
  const isSelected = Object.keys(selectedFeature).length > 0;
  return (
    <Card hidden={!isSelected}>
      <CardHeader
        title={isSelected ? selectedFeature.properties.name : '選択なし'}
        actAsExpander={isSelected}
        showExpandableButton={isSelected}
        textStyle={{ paddingRight: '1em' }}
      />
      {/*<CardContent
        expandable={true}
        hidden={!isSelected}
        style={{
          maxHeight: 100,
          overflowY: 'scroll',
        }}
      >
        {isSelected ? `${selectedFeature.properties.summary.extract}` : ''}
      </CardContent>
      <CardActions expandable={true} hidden={!isSelected}>
        <FlatButton label={<Translate value="card.readMore" />} primary={true} onClick={() => moveToArticle()} />
      </CardActions>*/}
    </Card>
  );
}

MapInfo.propTypes = {
  moveToArticle: PropTypes.func.isRequired,
  selectedFeature: PropTypes.object.isRequired
};

export default MapInfo;