import * as React from 'react';
import { useLocation } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import AppStateHandler from '../../components/AppStateHandler';
import MapStateHandler from '../../components/MapStateHandler';
import ThemeStateHandler from '../../components/ThemeStateHandler';
import useGaTrackPage from '../../utils/useGaTrackPage';

function Settings(): JSX.Element {
  const { pathname } = useLocation();
  useGaTrackPage(pathname);
  return (
    <PageContainer>
      <MapStateHandler />
      <AppStateHandler />
      <ThemeStateHandler />
    </PageContainer>
  );
}

export default Settings;
