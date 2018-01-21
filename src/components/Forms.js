import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/search';
import olFeature from 'ol/feature';
import geomPoint from 'ol/geom/point';
import Proj from 'ol/proj';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            margin: 'auto'
          }}
        >
          <TextField
            hintText="https://ja.wikipedia.org/wiki/偕楽園 or 偕楽園"
            value={this.state.title}
            onChange={this.handleChange}
            style={{
              width: '80%'
            }}
          />
          <RaisedButton
            label="検索"
            primary={true}
            icon={<Search />}
            onClick={() => {
              this.props.onButtonClick(this.state.title);
            }}
          />
        </div>
        <RaisedButton
          label="ダミーオブジェクト"
          secondary={true}
          onClick={() => {
            const feature = new olFeature({
              geometry: new geomPoint(Proj.fromLonLat([140.1 + Math.random() / 2, 36 + Math.random()])),
              name: `feature-${Math.round(Math.random() * 100)}`,
              visibility: true,
              selected: false,
              summary: '天正十年に勃発した扇谷の乱で滅亡した...'
            });
            this.props.onAddFeatureClick(feature);
          }}
        />
      </div>
    );
  }
}

export default Forms;
