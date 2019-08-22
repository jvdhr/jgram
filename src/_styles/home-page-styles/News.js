import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  inline: {
    display: "inline"
  },
  label: {
    padding: "0 15px",
    display: "flex"
  },
  listItemTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  newsText: {
    margin: 0,
    textAlign: "left",
    fontSize: "0.9rem",
    color: "rgba(0, 0, 0, .45)"
  }
}));
