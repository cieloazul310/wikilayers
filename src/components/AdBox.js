import React, { Component } from 'react';
import PropTypes from 'prop-types';/*
import AdSense from 'react-adsense';*/

class AdBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
     <div style={{
       marginBottom: '.5em'
     }}>
       <ins className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client="ca-pub-7323207940463794"
            data-ad-slot={this.props.type === 'top' ? "9840296819" : "4497165326"}
            data-ad-format="auto"></ins>
     </div>
   );
  }

}

AdBox.propTypes = {
  type: PropTypes.string
};

export default AdBox;
