import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  infoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  avatar: {},
  bigAvatar: {
    width: 150,
    height: 150,
    margin: "-75px auto 10px"
  },
  info: {
    "& h3": {
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: 0
    },
    "& p": {
      marginTop: 0,
      marginBottom: 0,
      color: "rgba(0, 0, 0, .45)"
    }
  },
  contentCenter: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  stat: {
    "& h5": {
      marginBottom: 0,
      fontWeight: "normal",
      color: "rgba(0, 0, 0, .45)"
    },
    "& p": {
      marginTop: 0,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.25rem"
    }
  },
  "@media (max-width: 600px)": {
    info: {
      "& h3": {
        textAlign: "center",
        color: "#fff"
      },
      "& p": {
        textAlign: "center",
        color: "#fff"
      }
    },
    infoContainer: {
      marginTop: "-250px"
    },
    stat: {
      color: "#fff",
      "& h5": {
        color: "#fff"
      }
    }
  }
}));
