import React from 'react';
import Forms from './Forms';
import Result from './Result';

const Searcher = ({ onButtonClick, latestArticle, currentView }) => (
  <div
    hidden={currentView !== 'Search'}
  >
    <h4>Hello, WikiLayers!</h4>
    <Forms
      onButtonClick={(title) => onButtonClick(title)}
    />
    <Result
      latestArticle={latestArticle}
    />
  </div>
);

export default Searcher;
