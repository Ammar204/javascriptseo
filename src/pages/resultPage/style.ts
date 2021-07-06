
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const drawerWidth = 150;

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
  },
  backgroudDefault : {
    background: theme.palette.background.default,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
      background: theme.palette.background.paper,
      border: 0,
      boxShadow: "none",
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
    border: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    minHeight: "100vh",
    overflowX: "hidden"
  },
  drawerIcon: {
      padding:"20px 0px",
      display: "flex",
      justifyContent: "center"
  },
  headText: {
    padding : "0px 30px"
  }
}),
);




