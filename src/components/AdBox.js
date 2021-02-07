import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdBox extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div
        style={Object.assign(
          {},
          {
            padding: '.5em',
            boxSizing: 'border-box',
          },
          this.props.containerStyle
        )}
      >
        <ins
          className="adsbygoogle"
          style={Object.assign(
            {
              display: 'block'
            },
            this.props.style
          )}
          data-ad-layout={this.props.type === 'article' ? 'in-article' : false}
          data-ad-client="ca-pub-7323207940463794"
          data-ad-slot={
            this.props.type === 'top'
              ? '9840296819'
              : this.props.type === 'article' ? '8047900665' : '4497165326'
          }
          data-ad-format={this.props.type === 'article' ? 'fluid' : 'auto'}
        />
      </div>
    );
  }
}

AdBox.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object
};

export default AdBox;
