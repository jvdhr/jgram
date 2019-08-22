import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    margin: theme.spacing(2)
  },
  listItemText: {
    textAlign: "left"
  },
  label: {
    padding: "0 15px",
    display: "flex"
  }
}));
