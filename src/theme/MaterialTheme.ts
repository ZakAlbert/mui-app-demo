import { ThemeOptions } from '@material-ui/core';

const themeLightConfig: ThemeOptions = {
  palette: {
    type: 'light',
    background: {
      default: '#fff'
    },
    primary: {
      main: '#fff'
    }
  }
};
const themeDarkConfig: ThemeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#212121'
    }
  },

};

export const ThemeDarkConfig = themeDarkConfig;
export const ThemeLightConfig = themeLightConfig;
