import React, { FC } from 'react';
import styled from 'styled-components';
import { getHeader } from '@mui-treasury/layout';
import { Toolbar, Grid, Typography, useScrollTrigger, Fade, Breadcrumbs } from '@material-ui/core';
import useHeaderStyles from './styles';
import { NavigateNext as NavigateNextIcon } from '@material-ui/icons';

const Header = getHeader(styled);

const AppHeader: FC<{ window?: () => Window }> = ({ window }) => {

  const classes = useHeaderStyles();
  const isScroll = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 56,
    disableHysteresis: true
  });
  return (
    <>
      <Header color="primary" elevation={isScroll ? 4 : 0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Breadcrumbs separator={<NavigateNextIcon color="inherit" fontSize="small" />}>
                <Typography color="inherit" variant="h6" className={classes.title}>
                  Project Manager
                </Typography>
                {isScroll &&
                  <Fade in={isScroll} mountOnEnter unmountOnExit >
                    <Typography className={classes.title} color="textPrimary" variant="h6"> Authentication </Typography>
                  </Fade>
                }
              </Breadcrumbs>
            </Grid>
          </Grid>
        </Toolbar>
      </Header>
      <Header
        id="secondHeader"
        component="div"
        color="primary"
        className={!isScroll ? classes.containerBorder : classes.containerNoBorder}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Authentication
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Header>
    </>
  );
};

export default AppHeader;
