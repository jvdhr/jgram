import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  cropContainer: {
    position: "absolute",
    top: 70,
    left: 0,
    right: 0,
    bottom: 80
  },
  controls: {
    boxSizing: "border-box",
    position: "absolute",
    bottom: 0,
    left: "0%",
    width: "100%",
    padding: "0 16px",
    height: "80px",
    display: "flex",
    alignItems: "center"
  },
  slider: {
    padding: "22px 0px"
  }
}));
