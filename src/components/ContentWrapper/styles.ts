import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useContentStyles = makeStyles((theme: Theme) => createStyles({
  content: {
    padding: 16,
    transition: theme.transitions.create('padding'),
    [theme.breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 700,
      margin: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 960,
    },
  },
}));
export default useContentStyles;
