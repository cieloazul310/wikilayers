import React from 'react';
import Forms from './Forms';
import Result from './Result';
import RaisedButton from 'material-ui/RaisedButton';

import olFeature from 'ol/feature';
import geomPoint from 'ol/geom/point';
import Proj from 'ol/proj';

const Searcher = ({ onButtonClick, latestArticle, currentView, onAddFeatureClick, onVisitClick }) => (
  <div>
    <h3>WikiLayers</h3>
    <p>Wikipediaの記事を地図で見よう</p>
    <Forms
      onButtonClick={(title) => onButtonClick(title)}
    />
    <div>
      <RaisedButton
        label="地図に加える"
        secondary={true}
        onClick={() => {
          const feature = new olFeature({
            geometry: new geomPoint(Proj.fromLonLat([140.1 + Math.random() / 2, 36 + Math.random()])),
            name: `feature-${Math.round(Math.random() * 100)}`,
            visibility: true,
            summary: '天正十年に勃発した扇谷の乱で滅亡した...'
          });
          onAddFeatureClick(feature);
        }}
      />
    </div>
    <Result
      latestArticle={latestArticle}
      onAddFeatureClick={(feature) => onAddFeatureClick(feature)}
      onVisitClick={() => onVisitClick()}
    />
  </div>
);

export default Searcher;
