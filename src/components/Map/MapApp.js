import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from 'ol/map';
import View from 'ol/view';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import Group from 'ol/layer/group';
import Geolocation from 'ol/geolocation';
import Proj from 'ol/proj';
import 'ol/ol.css';

import commonStyles from '../../commonStyles';
import { initialBaseLayers } from '../../map/initialBaseLayers';
import { vectorStyle, allLabelStyle } from '../../map/vectorStyle';
import customControl from '../../map/customControl';
import { createOlFeature } from '../../map/createFeature';
import createVectorEvent from '../../map/createVectorEvent';
import setGeolocation from '../../map/setGeolocation';

class MapApp extends Component {
  constructor(props) {
    super(props);
    this.createMap = this.createMap.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.createMap();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');/*
    this.createMap();*/
    // TODO: this.updateMap();
    this.vector.getSource().forEachFeature(olFeature => {
      olFeature.setProperties({
        selected: (olFeature.getId() === this.props.selectedFeature.id)
      });
    });
  }

  componentWillUnmount() {
    if (this.map) {
      this.props.updateMapView(this.map.getView().getProperties());

      this.props.saveGeolocation({
        tracking: this.geolocation.getTracking(),
        cachedPosition: this.geolocation.getPosition() || this.geolocation.get('cachedPosition')
      });
    }
  }

  createMap() {
    console.log('createMap');
    if (this.map) return;
    console.log('compose Map!');
    console.log(this.props.features.map(feature => createOlFeature (feature)));
    console.log(this.props.features.map(feature => createOlFeature(feature).getProperties()));

    this.vector = new VectorLayer({
      source: new VectorSource({
        features: this.props.features.map(feature => createOlFeature (feature))
      }),
      style: this.props.mapConfigure.showLabels ?
        allLabelStyle : vectorStyle,
      title: 'features',
    });

    const baseLayers = initialBaseLayers();
    baseLayers.forEach(lyr => {
      lyr.setVisible(lyr.get('title') === this.props.visibleBaseLayer);
    });

    this.map = new Map({
      view: new View(this.props.mapView),
      layers: [
        new Group({
          layers: baseLayers
        }),
        this.vector
      ],
      controls: customControl,
      target: 'map'
    });
/*
    this.map.on('moveend', () => {
      this.props.updateMapView(this.map.getView().getProperties());
    });
*/
    createVectorEvent(this.map, {
      selectFeature: this.props.selectFeature,
      clearSelectedFeature: this.props.clearSelectedFeature
    });

    this.geolocation = new Geolocation({
      tracking: this.props.mapConfigure.geolocation.tracking,
      projection: this.map.getView().getProjection()
    });

    this.geolocation.setProperties({
      cachedPosition: this.props.mapConfigure.geolocation.cachedPosition
    });

    if (this.props.mapConfigure.geolocation.tracking) {
      setGeolocation(this.map, this.geolocation);
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
  visibleBaseLayer: PropTypes.string.isRequired,
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
