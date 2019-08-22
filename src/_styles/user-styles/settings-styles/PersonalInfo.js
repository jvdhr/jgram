import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  label: {
    padding: "0 15px",
    display: "flex"
  },
  card: {
    marginBottom: 10,
    "& p": {
      padding: "0 15px",
      fontSize: "0.9rem",
      color: "rgba(0, 0, 0, .45)"
    }
  },
  container: {
    padding: 15
  },
  close: {
    padding: theme.spacing(0.5)
  }
}));
