import { Component } from 'react';
import { withRouter, useLocation } from 'react-router';

interface Props {
  children: React.ReactNode;
}
/*
function ScrollToTop({ children }: Props) {
  const location = useLocation();
  if (location !== prevProps.location) {
    window.scrollTo(0, 0);
  }
  return children;
}

export default withRouter(ScrollToTop)
*/
