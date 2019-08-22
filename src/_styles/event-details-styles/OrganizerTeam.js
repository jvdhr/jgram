import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    marginBottom: 20
  },
  label: {
    padding: "10px 15px",
    marginBottom: 0,
    display: "flex",
    "& h4": {
      margin: 0
    }
  },
  iconSize: {
    width: "1rem",
    height: "1rem",
    marginRight: 5
  },
  menuItem: {
    width: 200,
    margin: 10
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    borderRadius: 0,
    boxShadow: "none"
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "bolder",
    margin: "25px auto 5px",
    textAlign: "center"
  },
  arrow: {
    width: 20,
    height: 20,
    backgroundColor: "#dadada",
    padding: 15,
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#313131",
    cursor: "pointer"
  }
}));
