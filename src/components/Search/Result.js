import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import articleToFeature from '../../map/articleToFeature';
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
        <div style={{
          position: 'relative',
          mixHeight: 180,
          height: 180
        }}>
          <CircularProgress style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'block'
          }} />
        </div>
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
              検索のヒント: 正式名称を入れてみよう
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
          style={{
            background: featureCard.article.hasOwnProperty('thumbnail') ?  `url(${featureCard.article.thumbnail.source})` : 'white',
            backgroundSize: `cover`,
            zIndex: 0,
            position: 'relative',
            overflow: 'hidden',
            transition: 'background .5s linear'
          }}
        >
          <Card
            style={commonStyles.result}
          >
            <CardHeader
              title={featureCard.title}
              subtitle={
                featureCard.article.hasOwnProperty('coordinates') ? formatCoords(featureCard.article.coordinates[0].lon, featureCard.article.coordinates[0].lat) :
                'この記事には座標がありません'
              }
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              {
                <FlatButton
                  label="地図に加える"
                  disabled={!featureCard.article.hasOwnProperty('coordinates') || featureCard.status === 'existing'}
                  primary={true}
                  onClick={() => {
                      this.props.addFeature(articleToFeature(featureCard.article, featureCard.title));
                    }
                  }
                />
              }
              <FlatButton label="閉じる"
              />
            </CardActions>
            <CardText
              expandable={true}
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
