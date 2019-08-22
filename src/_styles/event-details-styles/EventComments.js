import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    padding: 15
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    border: "1px solid rgba(0, 0, 0, .15)",
    padding: 15,
    marginBottom: 5
  },
  commentInput: {
    padding: "5px 15px",
    margin: "0 5px",
    border: "1px solid rgba(0, 0, 0, .15)"
  },
  innerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 600px)": {
      justifyContent: "flex-end",
      marginTop: 10
    }
  },
  postComment: {
    fontSize: ".75rem"
  },
  leftAlignedInnerBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& p": {
      padding: "0 15px",
      textAlign: "left",
      color: "rgba(0, 0, 0, .55)",
      margin: 0
    },
    "@media (max-width: 600px)": {
      "& h4": {
        marginLeft: 5
      }
    }
  },
  commentTime: {
    textTransform: "uppercase",
    fontSize: "0.7rem",
    color: "#dadada !important",
    marginBottom: "10px !important"
  },
  rightAlignedInnerBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  smallAvatar: {
    width: "30px",
    height: "30px"
  },
  loginMessage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
    padding: 20,
    backgroundColor: "rgba(127, 140, 141, .5)",
    borderRadius: "4px"
  }
}));
