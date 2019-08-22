import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
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
  grid: {
    boxSizing: "border-box",
    padding: 10
  },
  label: {
    padding: "10px 15px",
    marginBottom: 0,
    display: "flex",
    "& h4": {
      margin: 0
    }
  },
  iconSize: {
    width: "1rem",
    height: "1rem",
    marginRight: 5
  },
  desc: {
    padding: "0 15px",
    marginTop: 0,
    color: "rgba(0, 0, 0, .45)"
  },
  card: {
    marginBottom: 20
  },
  loginMessage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
  }
}));
