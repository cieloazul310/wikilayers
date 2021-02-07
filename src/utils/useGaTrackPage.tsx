import * as React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-74683419-4');

function useGaTrackPage(path: string): void {
  React.useEffect(() => {
    ReactGA.pageview(path);
  }, [path]);
}

export default useGaTrackPage;
