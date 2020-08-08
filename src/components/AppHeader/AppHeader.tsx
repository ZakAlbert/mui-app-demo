import React, { FC } from 'react';
import styled from 'styled-components';
import { getHeader } from '@mui-treasury/layout';
import { Toolbar, Grid, Typography, useScrollTrigger, Fade, Breadcrumbs, Link, Tooltip, IconButton, Badge, Avatar } from '@material-ui/core';
import useHeaderStyles from './styles';
import {
  NavigateNext as NavigateNextIcon,
  Notifications as NotificationsIcon
} from '@material-ui/icons';

const Header = getHeader(styled);

interface IAppHeader {
  window?: () => Window;
};

const AppHeader: FC<IAppHeader> = ({ window }) => {

  const classes = useHeaderStyles();
  const isScroll = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 56,
    disableHysteresis: true
  });
  const urlAvatar = "https://firebasestorage.googleapis.com/v0/b/angular-zak94.appspot.com/o/Storage%2Fpefil.jpg?alt=media&token=c47e9f9f-52e5-4ff9-99b8-d9b87edcff0d";
  return (
    <>
      <Header color="primary" elevation={0}>
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
            <Grid item xs />
            <Grid item>
              <Link className={classes.link} color="inherit" href="#" variant="body2">Go to Docs</Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.avatar}>
                <Avatar src={urlAvatar} alt="Perfil" variant="circle" >Zk</Avatar>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Header>
      <Header
        id="secondHeader"
        component="div"
        color="primary" elevation={0}
        className={classes.containerBorder}>
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
