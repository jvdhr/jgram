import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "10px"
  },
  title: {
    margin: "25px 0",
    textAlign: "center",
    color: "#1c2938"
  },
  addNewEvent: {
    padding: "20px",
    "& h4": {
      margin: 0
    }
  },
  addNewEventTitle: {
    margin: 0
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
  addNewEventSubmit: {
    backgroundColor: "#252525",
    color: "#fff",
    fontWeight: "normal",
    margin: "0 10px",
    "&:hover": {
      backgroundColor: "#444444"
    }
  },
  uploadImage: {
    display: "none"
  },
  box: {
    background: "#f5f6fa",
    border: "1px solid #dedede",
    marginBottom: 10
  },
  addNewEventName: {},
  customInput: {
    marginBottom: 10,
    width: "100%"
  },
  inputContainer: {
    padding: "0 10px"
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
  addNewEventNameInner: {
    marginBottom: 5
  },
  uploadAvatar: {
    backgroundColor: "#252525",
    color: "#fff",
    fontWeight: "normal",
    marginLeft: 5,
    marginBottom: 15
  }
}));
