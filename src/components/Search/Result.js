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
          height: commonStyles.containerInner.minHeight - commonStyles.form.height - 10
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
            backgroundColor: featureCard.article.hasOwnProperty('thumbnail') ? 'white' : 'silver',
            backgroundImage: featureCard.article.hasOwnProperty('thumbnail') ?  `url(${featureCard.article.thumbnail.source})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            height: commonStyles.containerInner.minHeight - commonStyles.form.height - 50,
            position: 'relative',
            overflow: 'hidden',
            padding: '20px .5em 20px .5em',
            transition: 'background-image .5s linear'
          }}
        >
          <Card
            style={commonStyles.result}
            zDepth={3}
            containerStyle={{
              maxHeight: '100%'
            }}
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
