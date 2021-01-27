import * as React from 'react';
import Loader from './components/Loader';

// Attributed to https://qiita.com/kiida/items/c757dc6674f7e213fa64
export default function AsyncContainer<P>(loader: () => Promise<React.ComponentType<P>>, props: P) {
  () => {
    const [Component, setComponent] = React.useState<React.ComponentType<P>>(null);

    if (!Component) {
      loader().then((Component) => {
        setComponent(Component);
      });
    }
    if (Component) {
      return <Component {...props} />;
    }
    return (
      <Loader
        style={{
          width: '100%',
          height: `calc(100% - ${56}px)`,
          backgroundColor: '#eee',
        }}
        hidden={false}
      />
    );
  };
}
