import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh"
  },
  header: {
    textAlign: "center",
    margin: "50px 0",
    "@media (max-width: 600px)": {
      margin: "15px 0",
      "& h2": {
        fontSize: "2.5rem"
      }
    }
  },
  row: {
    padding: 15,
    marginBottom: 25,
    "@media (max-width: 600px)": {
      margin: 0,
      paddingBottom: 0
    }
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0)",
    transition: "all ease-in-out .3s",
    "& :last-child": {
      margin: 0
    },
    "& h4": {
      color: "#313131",
      fontSize: "1.25rem",
      fontWeight: "bold",
      margin: "5px 0"
    },
    "& p": {
      textAlign: "center",
      color: "525252"
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius: "7px",
      boxShadow:
        "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
    }
  },
  iconContainer: {
    width: 60,
    height: 60,
    padding: 14,
    border: "2px solid #f50057",
    borderRadius: "100%",
    marginBottom: 10,
    "& :first-child": {
      height: 30,
      width: 30,
      fill: "#f50057"
    }
  },
  itemContainer: {
    "& a": {
      textDecoration: "none",
      color: "inherit"
    }
  }
}));
