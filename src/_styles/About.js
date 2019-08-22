import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    marginTop: 40,
    flexGrow: 1,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h6": {
      textAlign: "center",
      height: "10%"
    }
  },
  founders: {
    marginTop: 40,
    width: "100%",
    backgroundColor: "#fff",
    "& h4": {
      margin: "20px auto",
      textAlign: "center"
    }
  },
  image: {
    display: "block",
    borderRadius: "4px",
    opacity: "1",
    width: "100%",
    height: "auto",
    transition: ".5s ease",
    backfaceVisibility: "hidden"
  },
  middle: {
    transition: ".5s ease",
    opacity: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)"
  },
  imgContainer: {
    position: "relative",
    width: "50%",
    "&:hover $image, &:active $image": {
      opacity: "0.3"
    },
    "&:hover $middle, &:active $middle": {
      opacity: "1"
    }
  },
  features: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& svg": {
      width: 50,
      height: "30%",
      marginBottom: 10
    }
  },
  info: {
    textAlign: "center",
    height: "60%",
    fontSize: "1.1rem",
    color: "#000",
    margin: "0 0 5px",
    cursor: "default"
  },
  job: {
    color: "#f50057",
    fontSize: "1.2rem",
    cursor: "default"
  }
}));
