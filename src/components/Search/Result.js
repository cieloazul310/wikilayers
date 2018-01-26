import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddLocation from 'material-ui/svg-icons/maps/add-location';

import Loader from '../Loader';
/*
import articleToFeature from '../../map/articleToFeature';
*/
import { createFeature } from '../../map/createFeature';
import formatCoords from '../../map/formatCoords';
import commonStyles from '../../commonStyles';
import './result.css';

class Result extends Component {
  render() {
    const featureCard = this.props.featureCard;
    if (featureCard.status === 'none') {
      return <div></div>;

    } else if (featureCard.status === 'fetching') {
      return (
        <Loader style={{
          height: commonStyles.containerInner.minHeight - commonStyles.form.height - 10,
          backgroundColor: '#eee'
        }} />
      );
    } else if (featureCard.status === 'failure') {
      return (
        <div style={commonStyles.components}>
          <Card
            style={commonStyles.result}
          >
            <CardHeader
              title="記事の取得に失敗しました。"
            />
            <CardText>
              <p>検索のヒント: 正式名称を入れてみよう</p>
              <ul>
                <li>例: <b>太田城 (常陸国)</b>の場合、名前と注釈の間に半角スペース、カギ括弧は半角で入力</li>
                <li>例: <b>オールド・トラッフォード</b>の場合、区切りの位置で点(・)を入力</li>
              </ul>
            </CardText>
            <CardActions>
              <FlatButton label="閉じる"
              />
            </CardActions>
          </Card>
        </div>
      );
    } else {
      return (
        <div
          className='result-bg'
          style={commonStyles.resultBg(featureCard, this.props.windowSize.height)}
        >
          <Card
            style={commonStyles.result}
            zDepth={3}
          >
            <CardHeader
              title={featureCard.title}
              subtitle={
                featureCard.article.hasOwnProperty('coordinates') ? formatCoords(featureCard.article.coordinates[0].lon, featureCard.article.coordinates[0].lat) :
                'この記事には座標がありません'
              }
            />
            <CardActions>
              {
                <RaisedButton
                  label="地図に追加"
                  disabled={!featureCard.article.hasOwnProperty('coordinates') || featureCard.status === 'existing'}
                  primary={true}
                  icon={<AddLocation />}
                  onClick={() => {
                      this.props.addFeature(createFeature(featureCard.article, featureCard.title));
                    }
                  }
                />
              }
              <FlatButton label="閉じる"
              />
            </CardActions>
            <CardText
              expandable={false}
              style={commonStyles.resultText}
            >
              {featureCard.article.extract}
            </CardText>
          </Card>
        </div>
      );
    }
  }
};

Result.propTypes = {
  featureCard: PropTypes.shape({
    status: PropTypes.string.isRequired,
    article: PropTypes.object.isRequired
  }).isRequired,
  addFeature: PropTypes.func.isRequired,
};

export default Result;
