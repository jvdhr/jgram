import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    padding: 0,
    flexGrow: 1,
    minHeight: "100vh"
  },
  loginMessage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
  }
}));
