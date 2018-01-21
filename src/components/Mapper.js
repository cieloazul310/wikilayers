import React, { Component } from 'react';

import Map from 'ol/map';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import Group from 'ol/layer/group';
import Overlay from 'ol/overlay';
import 'ol/ol.css';
import MapInfo from '../components/MapInfo';
import commonStyles from '../commonStyles';
import vectorStyle from '../map/vectorStyle';
import customControl from '../map/customControl';
import createVectorEvent from '../map/createVectorEvent';

class Mapper extends Component {
  constructor(props) {
    super(props);
    this.createMap = this.createMap.bind(this);
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate() {
    this.createMap();
  }

  createMap() {
    if (this.map) return;
      this.vector = new VectorLayer({
        source: new VectorSource({
          features: this.props.features
        }),
        style: vectorStyle,
      });

      this.map = new Map({
        view: this.props.mapView,
        layers: [
          new Group({
            layers: this.props.baseLayers
          }),
          this.vector
        ],
        controls: customControl,
        target: 'map'
      });

      this.map.on('moveend', () => {
        this.props.updateMapView(this.map.getView());
      });

      createVectorEvent(this.map, {
        selectFeature: this.props.selectFeature,
        clearSelectedFeature: this.props.clearSelectedFeature
      });

  }

  render() {
    return (
      <div>
        <div
          className="map-container"
          ref={node => this.node = node}
        >
          <div
            className="map"
            id="map"
            style={commonStyles.map}
          >
          </div>
      </div>
      <MapInfo
        title={this.props.selectedFeatureTitle}
      />
    </div>
  );
  }
}

export default Mapper;
