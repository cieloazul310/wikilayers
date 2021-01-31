import * as React from 'react';
import PageContainer from '../../components/PageContainer';
import AppStateHandler from '../../components/AppStateHandler';
import ThemeStateHandler from '../../components/ThemeStateHandler';

function Settings() {
  return (
    <PageContainer>
      <AppStateHandler />
      <ThemeStateHandler />
    </PageContainer>
  );
}

export default Settings;
