import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "10px",
    minHeight: "100vh"
  },
  blur: {
    "& :hover": {
      filter: "blur(8px)",
      webkitFilter: "blur(8px)"
    }
  },
  tabs: {
    margin: "20px auto"
  }
}));
