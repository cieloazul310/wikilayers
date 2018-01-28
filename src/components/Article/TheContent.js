import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageHeader from '../PageHeader';
import Loader from '../Loader';
import Basic from '../Basic';
import '../article.css';

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
    const summary = (status === 'none' && reserved.length) ? last :
                  reserved;
    if (status === 'Received') {
      this.props.showText(summary);
    }
  }

  componentWillUnmount() {
  }

  render() {
    const { status, reserved, last, pages } = this.props.textCache;
    const isInitial = (status === 'none' && !reserved.length);
    const isExist = pages[reserved.lang] &&  pages[reserved.lang].hasOwnProperty(reserved.pageid);
    const summary = (status === 'none' && reserved.length) ? last :
                  reserved;

    function createMarkup(pages, summary) {
      return {__html: pages[summary.lang][summary.pageid.toString()].extract};
    }

    const LinkToWiki = (
      <a href={summary.url_raw} target="_blank" style={{
        color: '#777',
        textDecolation: 'none',
        fontSize: '80%'
      }}>
        {summary.url}
      </a>
    );

    return (
      <article>
        <PageHeader
          title={isInitial ? '記事' : summary.title}
          subElement={isInitial ? null : LinkToWiki }
          subElementStyle={{
            textAlign: 'right',
            marginRight: '1em'
          }}
        />
        <Basic component={(
          <div className="article">
            {
              isInitial ? (<p>{'選択したアイテムの記事はこのページで読むことができます。'}</p>) :
              isExist ? (<div dangerouslySetInnerHTML={createMarkup(pages, summary)} />)
              : (<p>{summary.extract}</p>)
            }
            <Loader
              style={{
                maxHeight: 180,
                height: 180
              }}
              hidden={status !== 'Fetching'}
            />
          </div>
        )} />
      </article>
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
