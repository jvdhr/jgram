import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3),
    marginTop: 25,
    backgroundColor: "#313131"
  },
  link: {
    fontSize: "0.9rem",
    textDecoration: "none",
    margin: 5,
    padding: 5,
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .4)",
      color: "#000",
      borderRadius: "4px"
    }
  },
  copyright: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    },
    "& p": {
      color: "#fff"
    }
  },
  nav: {
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    }
  }
}));
