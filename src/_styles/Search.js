import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh"
  },
  searchbarContainer: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center"
  },
  searchbar: {
    width: "100%",
    fontSize: "1.75rem",
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: "100",
    "@media (max-width: 600px)": {
      fontSize: "1.25rem"
    }
  },
  iconSize: {
    marginRight: "3px",
    width: ".85rem",
    height: ".85rem"
  },
  button: {
    background: "none",
    border: "none",
    boxShadow: "none"
  },
  menu: {
    width: 200
  }
}));
