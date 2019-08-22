import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  header: {
    marginBottom: 20
  },
  social: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "@media (max-width: 600px)": {
      justifyContent: "center",
      marginTop: 10
    },
    "& button": {
      padding: "5px"
    }
  },
  bigAvatar: {
    width: 150,
    height: 150
  },
  info: {
    padding: "15px 25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "@media (max-width: 600px)": {
      padding: 15,
      alignItems: "center"
    },
    "& h3": {
      color: "rgba(255, 255, 255, .95)",
      margin: 0,
      fontSize: "1.5rem"
    },
    "& h5": {
      color: "rgba(255, 255, 255, .95)",
      margin: 0,
      fontSize: ".85rem"
    }
  },
  avatar: {
    "@media (max-width: 600px)": {
      display: "flex",
      justifyContent: "center"
    }
  },
  socialBtn: {
    margin: 5,
    color: "#fff",
    cursor: "pointer"
  },
  iconSize: {
    width: "1.5rem",
    height: "1.5rem",
    color: "#fff",
    fontStyle: "bold"
  }
}));
