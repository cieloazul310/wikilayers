import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddLocation from 'material-ui/svg-icons/maps/add-location';

import Loader from '../Loader';

import { createFeature } from '../../map/createFeature';
import formatCoords from '../../map/formatCoords';
import { resultCard } from '../../commonStyles';
import './result.css';

class Result extends Component {
  render() {
    const featureCard = this.props.featureCard;
    const { status, summary } = featureCard;
    // (status === 'fetching')
    // (status === 'failure')
    // (status === 'success' or 'existing')
    return (
      <div
        // @TODO: should configure style only in JSS instead of CSS file
        className="result-bg"
        style={
          status === 'none'
            ? Object.assign({}, resultCard.resultBg, {
                height: 0,
                padding: 0
              })
            : featureCard.summary.hasOwnProperty('thumbnail')
              ? Object.assign({}, resultCard.resultBg, {
                  backgroundImage: `url(${
                    featureCard.summary.thumbnail.source
                  })`
                })
              : resultCard.resultBg
        }
      >
        <Loader
          style={{
            height: '100%',
            width: '100%'
          }}
          hidden={status !== 'fetching'}
        />
        {status === 'none' || status === 'fetching' ? (
          null
        ) : (
          <Card style={resultCard.card} zDepth={3}>
            <CardHeader
              title={
                status === 'failure'
                  ? '記事の取得に失敗しました。'
                  : featureCard.name
              }
              subtitle={
                status === 'failure'
                  ? false
                  : summary.hasOwnProperty('coordinates')
                    ? formatCoords(
                        summary.coordinates[0].lon,
                        summary.coordinates[0].lat
                      )
                    : '座標がありません'
              }
              style={resultCard.resultHeader}
              textStyle={resultCard.resultHeaderText}
            />
            {status === 'failure' ? (
              null
            ) : (
              <CardActions style={resultCard.actions}>
                <RaisedButton
                  label="地図に追加"
                  disabled={
                    !featureCard.summary.hasOwnProperty('coordinates') ||
                    featureCard.status === 'existing'
                  }
                  primary={true}
                  icon={<AddLocation />}
                  onClick={() => {
                    this.props.addFeature(createFeature(featureCard));
                  }}
                />
                <FlatButton
                  label="閉じる"
                  onClick={() => this.props.clearFeatureCard()}
                />
              </CardActions>
            )}
            <CardText style={resultCard.resultText}>
              {status === 'failure' ? (
                <div>
                  <p>検索のヒント: 正式名称を入れてみよう</p>
                  <ul>
                    <li>
                      例: <b>太田城 (常陸国)</b>の場合、名前と注釈の間に半角スペース、カギ括弧は半角で入力
                    </li>
                    <li>
                      例: <b>オールド・トラッフォード</b>の場合、区切りの位置で点(・)を入力
                    </li>
                  </ul>
                </div>
              ) : (
                featureCard.summary.extract
              )}
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}

Result.propTypes = {
  featureCard: PropTypes.shape({
    status: PropTypes.string.isRequired,
    name: PropTypes.string,
    date: PropTypes.number,
    summary: PropTypes.object.isRequired
  }).isRequired,
  addFeature: PropTypes.func.isRequired
};

export default Result;
