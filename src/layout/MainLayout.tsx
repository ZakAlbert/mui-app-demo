import React, { FC } from 'react';
import { MainLayoutScheme } from 'theme/schemeBuilder';
import { Root } from '@mui-treasury/layout';
import { ContentWrapper, AppHeader } from 'components';
import { HomePage } from 'pages';


const MainLayout: FC = () => {
  return (
    <Root scheme={MainLayoutScheme} themeProviderOmitted>
      <AppHeader />
      <ContentWrapper>
        <HomePage />
      </ContentWrapper>
    </Root>
  );
};

export default MainLayout;
