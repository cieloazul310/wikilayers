import React, { Component } from 'react';
import Map from 'ol/map';
import View from 'ol/view';
import Proj from 'ol/proj';
import 'ol/ol.css';

import { cjstd } from '../layers/gsi.js';

import commonStyles from '../commonStyles';

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
    if (this.props.currentView === 'Map') {
      this.map = new Map({
        view: new View({
          center: Proj.fromLonLat([138, 37]),
          zoom: 10
        }),
        layers: this.props.baseLayers,
        target: 'map'
      });
    }
  }

  render() {
    return (
      <div
        hidden={this.props.currentView !== 'Map'}
      >
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
    </div>
  );
  }
}

export default Mapper;
