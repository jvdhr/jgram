import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  EventAttendance: {
    padding: "10px 0"
  },
  title: {
    fontSize: "0.9rem",
    color: "#1c2938",
    textAlign: "center",
    fontWeight: "bold"
  },
  value: {
    fontSize: "0.75rem",
    color: "#9e9e9e",
    textAlign: "center"
  },
  iconSize: {
    width: "0.85rem",
    height: "0.85rem",
    margin: "3px 5px 0 0",
    color: "rgba(0, 0, 0, .45)"
  },
  label: {
    display: "flex",
    justifyContent: "center"
  }
}));
