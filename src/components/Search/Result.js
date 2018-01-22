import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import articleToFeature from '../../map/articleToFeature';
import commonStyles from '../../commonStyles';

class Result extends Component {
  render() {
    const latestArticle = this.props.latestArticle;
    return (
        <Card
          style={commonStyles.result}
          hidden={!latestArticle.hasOwnProperty('title')}>
        >
          <CardHeader
            title={latestArticle.title || 'title'}
            subtitle={
              latestArticle.hasOwnProperty('coordinates') ?
              `${latestArticle.coordinates[0].lon}, ${latestArticle.coordinates[0].lat}` :
              'この記事には座標がありません'
            }
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton
              label="地図に加える"
              disabled={!latestArticle.hasOwnProperty('coordinates')}
              primary={true}
              onClick={() => {
                  this.props.addFeature(articleToFeature(latestArticle));
                }
              }
            />
            <FlatButton label="キャンセル"
            />
          </CardActions>
          <CardText
            expandable={true}
          >
            {latestArticle.extract}
          </CardText>
        </Card>
    );
  }
};

export default Result;
