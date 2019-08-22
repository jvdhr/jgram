import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 2, 2)
  },
  title: {
    margin: theme.spacing(2)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    display: "table-cell",
    verticalAlign: "middle"
  },
  submit: {
    marginTop: theme.spacing(2)
  },
  datePicker: {
    width: "100%",
    borderRadius: 4,
    color: "rgba(0, 0, 0, 0.87)",
    border: "solid 1px rgba(0, 0, 0, 0.23)",
    padding: "16px 14px"
  }
}));
