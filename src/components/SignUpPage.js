import React, { useState } from "react";
import SignUp from "./sign-up-components/SignUp";
import CompleteRegistration from "./sign-up-components/CompleteRegistration";
import { connect } from "react-redux";
import { startAddUser } from "../_actions/userActions";
import { withRouter } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import renderPostEventSnackbar from "./composite/snackbar";
import useStyles from "../_styles/sign-up-styles/SignUpPage";

function SignUpPage(props) {
  const classes = useStyles();
  const { startAddUser } = props;
  const [isSignUp, setIsSignUp] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const onRegisterSubmit = ({ email, password }) => {
    setSnackbarOpen(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        setSnackbarOpen(false);
        setIsSignUp(false);
      })
      .catch(e => {
        setIsLoading(false);
        setIsSuccess(false);
        setTimeout(() => {
          setSnackbarOpen(false);
          setIsLoading(true);
          setIsSuccess(true);
        }, 5000);
      });
  };

  const onCompleteSubmit = ({ firstName, lastName, phone, location }) => {
    setSnackbarOpen(true);
    const userInfo = {
      displayName: `${firstName} ${lastName}`,
      photoURL: `https://firebasestorage.googleapis.com/v0/b/jgram-1563535928516.appspot.com/o/images%2Fusers%2Fnew-user.png?alt=media&token=a4db42b2-5ac3-43ea-93dd-5be0502a30e8`,
      phoneNumber: phone
    };
    startAddUser({
      uid: auth.currentUser.uid,
      firstName,
      lastName,
      location,
      avatar: userInfo.photoURL,
      username: userInfo.displayName
    })
      .then(() => {
        auth.signOut();
        setSnackbarOpen(false);
        props.history.push("/signin");
      })
      .catch(e => {
        setIsLoading(false);
        setIsSuccess(false);
        setTimeout(() => {
          setSnackbarOpen(false);
          setIsLoading(true);
          setIsSuccess(true);
        }, 5000);
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={6} md={7} className={classes.image} />
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ثبت نام
          </Typography>

          {isSignUp ? (
            <SignUp onRegisterSubmit={onRegisterSubmit} />
          ) : (
            <CompleteRegistration onCompleteSubmit={onCompleteSubmit} />
          )}
        </div>
      </Grid>
      {renderPostEventSnackbar(snackbarOpen, isSuccess, isLoading, "signup")}
    </Grid>
  );
}

const mapDispatchToProps = dispatch => ({
  startAddUser: user => dispatch(startAddUser(user))
});

export default connect(
  undefined,
  mapDispatchToProps
)(withRouter(SignUpPage));
