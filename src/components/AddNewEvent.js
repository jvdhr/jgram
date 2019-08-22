import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NewEvent from "./add-new-event-components/NewEvent";
import { startAddEvent } from "../_actions/eventActions";
import Footer from "./Footer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import renderPostEventSnackbar from "./composite/snackbar";

function AddNewEvent(props) {
  const { startAddEvent } = props;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const onSubmitForm = event => {
    startAddEvent(event)
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setSnackbarOpen(false);
          props.history.push("/");
        }, 1500);
      })
      .catch(e => {
        setIsLoading(false);
        setIsSuccess(false);
        setTimeout(() => {
          setSnackbarOpen(false);
          setIsLoading(true);
          setIsSuccess(true);
        }, 1000);
      });
  };

  return (
    <>
      <Navbar />
      <NewEvent
        onSubmitForm={onSubmitForm}
        setSnackbarOpen={setSnackbarOpen}
        snackbarOpen={snackbarOpen}
      />
      <Footer />
      {renderPostEventSnackbar(snackbarOpen, isSuccess, isLoading, "event")}
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  startAddEvent: event => dispatch(startAddEvent(event))
});

export default connect(
  undefined,
  mapDispatchToProps
)(withRouter(AddNewEvent));
