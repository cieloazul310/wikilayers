import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import articleToFeature from '../map/articleToFeature';

const Result = ({ latestArticle, onAddFeatureClick, onVisitClick }) => {
  return (
    <div
      hidden={!latestArticle.hasOwnProperty('title')}>
      <Card>
        <CardHeader
          title={latestArticle.title || 'title'}
          subtitle={
            latestArticle.hasOwnProperty('coordinates') ?
            `${latestArticle.coordinates[0].lon}, ${latestArticle.coordinates[0].lat}` :
            'This article has no coordinates.'
          }
        />
        <CardText>
          <a
            href={`http://ja.wikipedia.org/w/index.php?curid=${latestArticle.pageid}`}
            target="_blank"
          >
            {`Wikipediaで${latestArticle.title}を開く`}
          </a>
        </CardText>
        <CardActions>
          <FlatButton
            label="地図に加える"
            disabled={!latestArticle.hasOwnProperty('coordinates')}
            primary={true}
            onClick={() => {
                onAddFeatureClick(articleToFeature(latestArticle));
              }
            }
          />
          <FlatButton label="キャンセル"
          />
        </CardActions>
      </Card>
      <Snackbar
        open={true}
        message={`Add successful!`}
        autoHideDuration={5000}
        action={
          <span
            onClick={() => onVisitClick()}
          >
            VISIT
          </span>
        }
      />
    </div>
  );
};

export default Result;
