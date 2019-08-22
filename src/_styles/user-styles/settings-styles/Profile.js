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
  bigAvatar: {
    width: "125px",
    height: "125px",
    margin: "0 auto"
  },
  uploadAvatar: {
    backgroundColor: "#252525",
    color: "#fff",
    fontWeight: "normal"
  },
  uploadImage: {
    display: "none"
  },
  coverImage: {
    maxWidth: "100%",
    maxHeight: "300px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 5
  },
  container: {
    padding: 15
  }
}));
