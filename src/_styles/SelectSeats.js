import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh"
  },
  chart: {},
  info: {},
  card: {
    padding: 20
  },
  header: {
    textAlign: "center",
    margin: "55px 0",
    "@media (max-width: 600px)": {
      margin: "15px 0",
      "& h2": {
        fontSize: "2.5rem"
      }
    }
  },
  subtitle: {
    fontSize: "1rem",
    color: "rgba(0, 0, 0, .5)"
  },
  checkoutInfo: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10
  },
  iconSize: {
    width: "1.5rem",
    height: "1.5rem",
    marginRight: 10
  },
  hall: {
    /* width: 772px; */
    margin: "0 auto",
    position: "relative",
    direction: "rtl",
    lineHeight: "22px",
    // fontFamily: "IRANSans",
    /* padding: 5px 5px 5px; */
    /* margin: 0 auto; */
    /* width: 740px; */
    boxSizing: "unset",
    overflowX: "auto",
    overflowY: "hidden"
  },
  section: {
    margin: "0 auto",
    position: "relative"
  },
  block: {
    float: "none !important",
    display: "block"
  },
  row: {
    margin: "0 5px",
    clear: "both",
    height: "21px"
  },
  chairContainer: {
    margin: "0 auto",
    width: "600px"
  },
  rowHead: {
    marginTop: "2px",
    float: "left",
    color: "#ccc",
    cursor: "default",
    width: "23px !important",
    marginLeft: "2px !important",
    fontSize: "10px",
    height: "19px",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: "22px"
  },
  chair: {
    fontSize: "9px",
    margin: "2px 0 0 2px",
    float: "left",
    color: "white",
    borderRadius: "3px",
    transition: "all 0.2s",
    backgroundColor: "#39d",
    cursor: "pointer",
    height: "19px",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: "22px",
    width: "20px !important",
    marginLeft: "2px !important",
    "&:hover": {
      backgroundColor: "rgb(153, 214, 255)"
    }
  },
  reserved: {
    background: "#333 !important",
    cursor: "default"
  },
  lockedChair: {
    backgroundColor: "#cbcbcb",
    cursor: "default",
    width: "23px !important",
    marginLeft: " 2px !important",
    height: "19px",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: "22px"
  },
  chairSpacer: {
    width: "23px",
    height: "19px",
    margin: "2px 0 0 2px",
    float: "left",
    backgroundColor: "transparent",
    cursor: "default",
    marginLeft: "2px !important"
  },
  selected: {
    backgroundColor: "#c00 !important"
  },
  "@global": {
    input: {
      display: "none",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "1em"
    },
    'input[type="checkbox"]': {
      marginLeft: 7
    },
    'input[type="checkbox" i]': {
      W: "checkbox",
      boxSizing: "border-box",
      backgroundColor: "initial",
      cursor: "default",
      margin: "3px 0.5ex",
      padding: "initial",
      border: "initial"
    },
    "input:disabled": {
      color: "rgb(84, 84, 84)",
      cursor: "default"
    }
  }
}));
