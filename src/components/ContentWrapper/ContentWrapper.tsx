import React, { FC } from 'react';
import styled from 'styled-components';
import { getContent } from '@mui-treasury/layout';
import useContentStyles from './styles';

const Content = getContent(styled);

const ContentWrapper: FC = ({ children }) => {
  const classes = useContentStyles();
  return (
    <Content className={classes.content}>
      {children}
    </Content>
  );
};

export default ContentWrapper;
