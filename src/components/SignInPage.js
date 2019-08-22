import React, { useState } from "react";
import SignIn from "./sign-in-components/SignIn";
import { connect } from "react-redux";
import { startLogin } from "../_actions/authActions";
import renderPostEventSnackbar from "./composite/snackbar";

function SignInPage(props) {
  const { startLogin } = props;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const onSubmitForm = user => {
    setSnackbarOpen(true);
    startLogin(user)
      .then(cred => {
        setSnackbarOpen(false);
        props.history.push("/");
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
    <>
      {renderPostEventSnackbar(snackbarOpen, isSuccess, isLoading, "signin")}
      <SignIn onSubmitForm={onSubmitForm} />
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  startLogin: user => dispatch(startLogin(user))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SignInPage);
