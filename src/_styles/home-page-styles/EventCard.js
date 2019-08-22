import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    padding: 0
  },
  moreIcon: {
    marginTop: theme.spacing(1)
  },
  paper: {},
  title: {
    margin: theme.spacing(2),
    "& span": {
      ...theme.typography.h5,
      color: "#f50057",
      [theme.breakpoints.down("xs")]: {
        fontSize: ".9rem"
      }
    },
    "& a": {
      ...theme.typography.h5,
      textDecoration: "none",
      color: "rgba(0, 0, 0, 0.87)",
      "&:hover": {
        color: "rgba(0 ,0 ,0, 0.35)"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: ".9rem"
      }
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem"
    }
  },
  maybe: {
    color: "#fff",
    borderColor: "#fff",
    margin: "0 2px",
    textTransform: "none"
  },
  header: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 200,
    padding: 5,
    alignItems: "flex-end"
  },
  social: {
    padding: "0 5px",
    "& span": {
      fontSize: "0.75rem",
      color: "#9d9d9d"
    }
  },
  socialBtn: {
    margin: "0 2px"
  },
  iconSize: {
    width: "1.5rem",
    height: "1.5rem"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 600px)": {
      justifyContent: "space-between"
    }
  },
  menuContainer: {
    display: "flex",
    alignItems: "center"
  }
}));
