import React from 'react';
import Forms from './Forms';
import Result from './Result';

import commonStyles from '../commonStyles';

const Searcher = ({ onButtonClick, latestArticle, features, onAddFeatureClick, onVisitClick }) => (
  <div style={commonStyles.container}>
    <h3>WikiLayers</h3>
    <p>Wikipediaの記事を地図で見よう</p>
    <Forms
      onButtonClick={(title) => onButtonClick(title)}
      onAddFeatureClick={(feature) => onAddFeatureClick(feature)}
    />
    <Result
      latestArticle={latestArticle}
      onAddFeatureClick={(feature) => onAddFeatureClick(feature)}
      onVisitClick={(feature) => onVisitClick(feature)}
      features={features}
    />
  </div>
);

export default Searcher;
