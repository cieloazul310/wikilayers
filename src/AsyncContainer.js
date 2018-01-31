import React, { Component } from 'react';
import Loader from './components/Loader';

// Attributed to https://qiita.com/kiida/items/c757dc6674f7e213fa64
export default (loader, collection) =>
  class AsyncContainer extends Component {
    constructor(props) {
      super(props);
      this.state = { Container: AsyncContainer.Container };
    }

    componentWillMount() {
      if (!this.state.Container) {
        loader().then(Container => {
          this.setState({ Container });
        });
      }
    }

    render() {
      if (this.state.Container) {
        return <this.state.Container {...this.props} {...collection} />;
      }
      return (
        <Loader
          style={{
            width: '100%',
            height: `calc(100vh - ${56}px)`,
            backgroundColor: '#eee'
          }}
          hidden={false}
        />
      );
    }
  };
