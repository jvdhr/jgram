import { fade, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    backgroundColor: "#313131",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  bigAvatar: {
    height: "30px",
    width: "30px"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 80,
      "&:focus": {
        width: 200
      }
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  navLinkContainer: {
    margin: "0 10px",
    padding: "0 5px"
  },
  navLink: {
    color: "#eeddd2",
    textDecoration: "none",
    marginRight: "10px",
    padding: "8px",
    "&:hover": {
      borderRadius: "4px",
      backgroundColor: "rgba(255, 255, 255, .3)"
    }
  },
  activeLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold"
  },
  navLinkDrawer: {
    color: "#374955",
    textDecoration: "none",
    marginRight: "10px",
    padding: "8px",
    "&:hover": {
      borderRadius: "4px",
      backgroundColor: "rgba(255, 255, 255, .3)"
    }
  },
  activeLinkDrawer: {
    color: "#000",
    textDecoration: "none",
    fontWeight: "bold"
  },
  addEvent: {
    marginLeft: "10px"
  },
  btn: {
    color: "#fff"
  },
  close: {
    padding: theme.spacing(0.5)
  }
}));
