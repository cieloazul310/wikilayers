import * as React from 'react';
import PageContainer from '../../components/PageContainer';
import AppStateHandler from '../../components/AppStateHandler';
import MapStateHandler from '../../components/MapStateHandler';
import ThemeStateHandler from '../../components/ThemeStateHandler';

function Settings() {
  return (
    <PageContainer>
      <MapStateHandler />
      <AppStateHandler />
      <ThemeStateHandler />
    </PageContainer>
  );
}

export default Settings;
