import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import articleToFeature from '../map/articleToFeature';
import commonStyles from '../commonStyles';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarVisible: false
    };
  }

  render() {
    const latestArticle = this.props.latestArticle;
    return (
      <div
        hidden={!latestArticle.hasOwnProperty('title')}>
        <Card style={commonStyles.result}>
          <CardHeader
            title={latestArticle.title || 'title'}
            subtitle={
              latestArticle.hasOwnProperty('coordinates') ?
              `${latestArticle.coordinates[0].lon}, ${latestArticle.coordinates[0].lat}` :
              'This article has no coordinates.'
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
                  this.setState({'snackbarVisible': true});
                  this.props.onAddFeatureClick(articleToFeature(latestArticle));
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
        <Snackbar
          open={this.state.snackbarVisible}
          message={`地図に追加しました`}
          autoHideDuration={5000}
          action={
            <span
              onClick={() => this.props.onVisitClick(articleToFeature(latestArticle))}
            >
              地図で見る
            </span>
          }
        />
      </div>
    );
  }
};

export default Result;
