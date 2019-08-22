import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  addNewEventSubmit: {
    backgroundColor: "#252525",
    color: "#fff",
    fontWeight: "normal",
    "&:hover": {
      backgroundColor: "#444444"
    }
  },
  customInputHalf: {
    marginBottom: 5,
    width: "50%"
  },
  box: {
    background: "#f5f6fa",
    border: "1px solid #dedede",
    marginBottom: 10
  },
  addNewEventName: {
    padding: "10px 25px",
    marginBottom: "10px",
    borderBottom: "1px solid #dedede"
  },
  customInput: {
    width: "100%",
    borderRadius: 4,
    color: "rgba(0, 0, 0, 0.87)",
    backgroundColor: "rgba(0, 0, 0, 0)",
    paddingLeft: 8,
    border: "solid 1px rgba(0, 0, 0, 0.23)",
    padding: "18.5px 14px",
    direction: "rtl",
    fontFamily: "Tahoma",
    marginBottom: 10
  },
  inputContainer: {
    padding: "0 10px"
  },
  innerBox: {
    padding: "5px 10px",
    marginBottom: 10
  },
  label: {
    padding: "10px 15px",
    marginBottom: "10px",
    borderBottom: "1px solid #dedede",
    display: "flex"
  },
  iconSize: {
    width: "1rem",
    height: "1rem",
    marginRight: 5
  },
  chipPaper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  map: { overflowY: "hidden", overflowX: "scroll", height: 300, width: "100%" },
  addNewEventNameInner: {
    marginBottom: 5
  }
}));
