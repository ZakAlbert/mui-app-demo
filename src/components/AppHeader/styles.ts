
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useHeaderStyles = makeStyles((theme: Theme) => createStyles({
  containerBorder: {
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: theme.palette.divider,
    zIndex: 0
  },
  bottomBorder: {
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: theme.palette.divider,

  },
  title: {
    fontSize: '14px',
    fontWeight: 500,
  },
  link: {
    textDecoration: "none",
  },
  avatar: {
    padding: 4
  }
}));
export default useHeaderStyles;
