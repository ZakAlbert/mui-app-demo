import React, { FC } from 'react';
import { MainLayoutScheme } from '../theme/schemeBuilder'
import { Root } from '@mui-treasury/layout';
import { ContentWrapper, AppHeader } from '../components';
import { Typography } from '@material-ui/core';


const MainLayout: FC = () => {
  return (
    <Root scheme={MainLayoutScheme} themeProviderOmitted>
      <AppHeader />
      <ContentWrapper>
        <div>
          <Typography variant="overline">
            Home
            </Typography>
          <Typography variant="h4" gutterBottom>
            Material UI Layout
            </Typography>
          <Typography gutterBottom>
            <b>Version 3.1</b>
          </Typography>
          <Typography>
            Layout is a group of Material-UI components that are enhanced and combined
            to create dynamic, easy-to-maintain and easy-to-code as much as possible.
            </Typography>
          <br />
          <Typography variant={'h5'} gutterBottom>
            {"Let's start with Why?"}
          </Typography>
          <Typography gutterBottom>
            I created this because
            <br />
          </Typography>
          <Typography component={'div'}>
            <ol>
              <li>
                It took me a lot of time to initialize dashboard layout when I have
                new projects and I’m sure that a lot of you guys agree with me.
                </li>
              <li>
                Sometimes it is hard to refactor because the structure is so poor
                because someone isn’t deeply understand what he/she was doing, as a
                result, rewrite the whole layout (it actually happened, at least in my
                experience).
                </li>
              <li>
                Because we need to be fast to let others continue our work, we
                frequently write poor and a lot of code. However, we say we don’t have
                time to fix them. Eventually, spend all day paying technical debts.
                </li>
            </ol>
          </Typography>
          <br />
        </div>
      </ContentWrapper>
    </Root>
  );
};

export default MainLayout;
