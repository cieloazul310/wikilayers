import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircularProgress from 'material-ui/CircularProgress';
import PageHeader from '../PageHeader';
import commonStyles from '../../commonStyles';
import './theContent.css';

class TheContent extends Component {
  componentDidMount() {
    const { status, reserved, pages } = this.props.textCache;
    // Fetch Text
    if (status === 'Reserve' && !pages[reserved.lang].hasOwnProperty(reserved.pageid)) {
      this.props.fetchText(reserved);
    }
  }

  componentDidUpdate() {
    const { status, reserved, last } = this.props.textCache;
    const article = (status === 'none' && reserved.length) ? last :
                  reserved;
    if (status === 'Received') {
      this.props.showText(article);
    }
  }

  componentWillUnmount() {
  }

  render() {
    const { status, reserved, last, pages } = this.props.textCache;
    const isInitial = (status === 'none' && !reserved.length);
    const isExist = pages[reserved.lang] &&  pages[reserved.lang].hasOwnProperty(reserved.pageid);
    const article = (status === 'none' && reserved.length) ? last :
                  reserved;
    const baseurl = `https://${article.lang}.wikipedia.org/wiki/`;
    function createMarkup(pages, article) {
      return {__html: pages[article.lang][article.pageid.toString()].extract};
    }

    return (
      <div>
        <PageHeader
          title={isInitial ? '記事' : article.title}
        />
        <p style={{
          textAlign: 'right',
          marginRight: '1em'
        }}>
          {
            isInitial ? <span /> :
            <a href={`${baseurl}${encodeURI(article.title)}`} target="_blank" style={{
              color: 'gray',
              fontSize: '75%'
            }}>
              {`${baseurl}${article.title}`}
            </a>
          }
        </p>
        <article>
          <div
            style={commonStyles.components}
          >
            <div className="article" id="article">
                {
                  isInitial ? (<p>{'選択したアイテムの記事はこのページで読むことができます。'}</p>) :
                  isExist ? (<div dangerouslySetInnerHTML={createMarkup(pages, article)} />)
                  : (<p>{article.extract}</p>)
                }

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
        </article>
      </div>
    );
  }
}

TheContent.propTypes = {
  textCache: PropTypes.shape({
    status: PropTypes.string.isRequired,
    reserved: PropTypes.object.isRequired,
    last: PropTypes.object,
    pages: PropTypes.object.isRequired
  }).isRequired,
  fetchText: PropTypes.func.isRequired,
};

export default TheContent;