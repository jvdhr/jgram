import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    marginTop: 40,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  },
  container: {
    margin: "10 auto",
    padding: "0 25px",
    "& button": {
      marginTop: 20
    }
  }
}));
