import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdBox extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
     <div style={{
       padding: '.5em',
       boxSizing: 'border-box',
     }}>
       <ins className="adsbygoogle"
            style={Object.assign({
              display: 'block',
              textAlign: this.props.type === 'article' ?
                        'center' : 'inherited'
            }, this.props.style)}
            data-ad-layout={this.props.type === 'article' ? 'in-article' : null}
            data-ad-client="ca-pub-7323207940463794"
            data-ad-slot={this.props.type === 'top' ? '9840296819' :
                          this.props.type === 'article' ? '8047900665' :
                          '4497165326'}
            data-ad-format={this.props.type === 'article' ? 'fluid' :
                          'auto'}></ins>
     </div>
   );
  }

}

AdBox.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object
};

export default AdBox;
