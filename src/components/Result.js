import React from 'react';
import Paper from 'material-ui/Paper';

const Result = ({ latestArticle }) => {
  return (
    <div
      hidden={!latestArticle.hasOwnProperty('title')}>
      <Paper>
        <h3>{latestArticle.title || 'title'}</h3>
      </Paper>
    </div>
  );
};

export default Result;
