import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    padding: 0,
    flexGrow: 1,
    minHeight: "100vh"
  },
  header: {
    margin: 0,
    minHeight: 350,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 5,
    display: "flex",
    alignItems: "flex-end"
  },
  loginMessage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
  }
}));
