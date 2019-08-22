import { makeStyles } from "@material-ui/core/styles";
import cityscape from "../../icons/cityscape.svg";

export default makeStyles(theme => ({
  root: {
    backgroundColor: "#ff7556",
    padding: theme.spacing(2),
    position: "relative",
    "&::after": {
      content: '""',
      background: `url(${cityscape})`,
      backgroundRepeat: "no-repeat",
      opacity: "0.25",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      position: "absolute",
      zIndex: "-1"
    }
  }
}));
