import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  MiniProfile: {
    animation: "appear 500ms ease-out forwards"
  },
  name: { textAlign: "center", margin: 0 },
  location: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
    "& p": {
      textAlign: "center",
      color: "#636e72",
      marginTop: 0,
      marginLeft: 5,
      display: "inline"
    }
  },
  iconSize: {
    width: "0.75rem",
    height: "0.75rem"
  },
  bigAvatar: {
    width: "125px",
    height: "125px",
    margin: "-65px auto 10px"
  },
  link: {
    justifyContent: "center",
    marginTop: 10
  },
  social: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& h4": {
      textAlign: "center",
      margin: 0
    },
    "& p": {
      textAlign: "center",
      color: "#636e72",
      margin: 0
    }
  },
  socialContainer: {
    padding: "0 10px"
  }
}));
