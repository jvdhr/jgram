import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  EventInfo: {
    padding: "10px 0"
  },
  label: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontSize: "0.9rem",
    color: "#1c2938",
    textAlign: "center",
    fontWeight: "bold",
    display: "inline-block"
  },
  value: {
    fontSize: "0.75rem",
    color: "#9e9e9e",
    textAlign: "center"
  },
  iconSize: {
    width: "0.85rem",
    height: "0.85rem",
    margin: "3px 5px 0 0"
  }
}));
