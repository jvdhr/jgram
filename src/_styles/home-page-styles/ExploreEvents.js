import { makeStyles } from "@material-ui/core/styles";
import sun from "../../icons/sun.svg";
import cloudy from "../../icons/cloudy.svg";
import calendar from "../../icons/calendar.svg";
import choosedate from "../../icons/choosedate.svg";

export default makeStyles(theme => ({
  root: {},
  ExploreEvents: { padding: 5 },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
    // width: 100,
    padding: 5,
    color: "#fff"
  },
  title: {
    margin: theme.spacing(2)
  },
  today: {
    backgroundColor: "#248ea9",
    background: `url(${sun})`,
    backgroundSize: "100px 100px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50px 50px"
  },
  tomorrow: {
    backgroundColor: "#ffaf65",
    background: `url(${cloudy})`,
    backgroundSize: "100px 100px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50px 50px"
  },
  week: {
    backgroundColor: "#6b48ff",
    background: `url(${calendar})`,
    backgroundSize: "100px 100px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50px 50px"
  },
  date: {
    backgroundColor: "#dadada",
    background: `url(${choosedate})`,
    backgroundSize: "100px 100px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50px 50px"
  }
}));
