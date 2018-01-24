import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import commonStyles from '../../commonStyles';
import './theContent.css';

class TheContent extends Component {
  constructor(props) {
    super(props);
    this.reserveArticle = this.reserveArticle.bind(this);
    this.appendArticle = this.appendArticle.bind(this);
  }

  componentDidMount() {
    const { textCache } = this.props;
    const history = textCache.history;
    const len = history.length;
    if (textCache.next === undefined && !len) {
      return;
    } else if (textCache.next === undefined && len) {
      this.appendArticle(textCache.pages[history[len - 1]]);
    } else {

      const pageid = textCache.next;
      if (pageid === history[len - 1]) {
        this.appendArticle(textCache.pages[history[len - 1]]);
      } else if (textCache.pages.hasOwnProperty(pageid)) {
        this.appendArticle(textCache.pages[pageid]);
      } else {
        this.reserveArticle();
      }
    }
  }

  componentDidUpdate() {
    const { textCache } = this.props;
    const history = textCache.history;
    this.appendArticle(textCache.pages[history[history.length - 1]]);
    console.log('componentDidUpdate');
  }

  reserveArticle() {
    const { selectedFeature, fetchText } = this.props;
    if (selectedFeature) {
      fetchText(selectedFeature.get('article'));
    }
  }

  appendArticle(page) {
    const { selectedFeature, textCache } = this.props;
    if (textCache.status === 'Received') {
      document.getElementById('article').innerHTML = page.extract;
    }
  }

  render() {
    return (
      <div>
        <div style={commonStyles.pageHeader}>
          <h3 style={commonStyles.pageTitle}>
            {this.props.selectedFeature ? this.props.selectedFeature.get('article').title : '記事'}
          </h3>
        </div>
        <div
          style={commonStyles.components}
          ref={node => this.node = node}
        >
          <div className="article" id="article">
            <p>{this.props.selectedFeature ? this.props.selectedFeature.get('article').extract : '選択したアイテムの記事はこのページで読むことができます。'}</p>
            <div
              style={{
                position: 'relative',
                mixHeight: 180,
                height: 180
              }}
              hidden={this.props.textCache.status !== 'Fetching'}
            >
              <CircularProgress style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'block'
              }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TheContent.propTypes = {
  textCache: PropTypes.object.isRequired,
  fetchText: PropTypes.func.isRequired,
};

export default TheContent;
