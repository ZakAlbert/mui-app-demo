import React, { FC } from 'react';
import { MainLayoutScheme } from 'theme/schemeBuilder';
import { Root } from '@mui-treasury/layout';
import { ContentWrapper, AppHeader } from 'components';
import { Home } from 'pages';

const MainLayout: FC = () => {
  return (
    <Root scheme={MainLayoutScheme} themeProviderOmitted>
      <AppHeader title="React" subtitle="Awesome" />
      <ContentWrapper>
        <Home />
      </ContentWrapper>
    </Root>
  );
};

export default MainLayout;
