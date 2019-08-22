import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    backgroundColor: "#fff"
  },
  EventAttendance: {
    display: "flex",
    justifyContent: "flex-end",
    "@media (max-width: 600px)": {
      justifyContent: "center",
      margin: "10px 0"
    },
    "& div": {
      display: "flex",
      alignItems: "center",
      "& div": {
        marginRight: 3,
        "& button": {
          textTransform: "none"
        }
      },
      "& button:last-child": {
        marginRight: 0
      }
    }
  },
  typography: {
    padding: theme.spacing(2)
  },
  eventTitle: {
    display: "flex",
    justifyContent: "flex-start",
    "& h4": {
      padding: "10px 0"
    },
    "& div": {
      display: "flex",
      alignItems: "center",
      marginLeft: 10,
      "& div": {
        marginRight: 3,
        "& button": {
          textTransform: "none"
        }
      },
      "& button:last-child": {
        marginRight: 0
      }
    },
    "@media (max-width: 600px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }
}));
