import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export default makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  fbRoot: {
    position: "relative",
    margin: "0 5px 0 0"
  },
  top: {
    color: "#3f51b5"
  },
  bottom: {
    color: "#ffffff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0
  }
}));
