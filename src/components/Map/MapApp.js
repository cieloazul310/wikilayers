import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from 'ol/map';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import Group from 'ol/layer/group';
import 'ol/ol.css';

import commonStyles from '../../commonStyles';
import { vectorStyle, allLabelStyle } from '../../map/vectorStyle';
import customControl from '../../map/customControl';
import createVectorEvent from '../../map/createVectorEvent';
import setGeolocation from '../../map/setGeolocation';

class MapApp extends Component {
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
      style: this.props.mapConfigure.showLabels ?
        allLabelStyle : vectorStyle,
      title: 'features',
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

    if (this.props.mapConfigure.geolocation.getTracking()) {
      setGeolocation(this.map, this.props.mapConfigure.geolocation);
    }

  }

  render() {
    return (
      <div
        className="map-container"
        ref={node => this.node = node}
      >
        <div
          className="map"
          id="map"
          style={{
            width: '100%',
            height: this.props.windowSize.height - commonStyles.bottomNav.height,
            backgroundColor: '#fff',
          }}
        >
        </div>
      </div>
    );
  }
}

MapApp.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  baseLayers: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  mapConfigure: PropTypes.shape({
    geolocation: PropTypes.object,
    showLabels: PropTypes.bool
  }),
  mapView: PropTypes.object.isRequired,
  updateMapView: PropTypes.func.isRequired,
  selectFeature: PropTypes.func.isRequired,
  clearSelectedFeature: PropTypes.func.isRequired
};

export default MapApp;
