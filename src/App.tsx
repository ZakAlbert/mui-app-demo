import React, { FC } from 'react';
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { ThemeLightConfig } from '@theme';
import { MainLayout } from '@layout';
// import logo from './logo.svg';

const App: FC = () => {
  const theme = createMuiTheme(ThemeLightConfig);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider >
  );
}

export default App;
