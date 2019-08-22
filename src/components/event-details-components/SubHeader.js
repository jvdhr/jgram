import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import moment from "moment-jalaali";
import { withRouter } from "react-router-dom";
import { isMaybe, isNotGoing } from "../../_helpers/eventFunctions";
import { startDeleteEvent, startEditEvent } from "../../_actions/eventActions";
import { connect } from "react-redux";
import useStyles from "../../_styles/event-details-styles/SubHeader";
import renderPostEventSnackbar from "../composite/snackbar";

function SubHeader(props) {
  const { event, startDeleteEvent, currentViewer, startEditEvent } = props;
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const [popperAnchorEl, setPopperAnchorEl] = useState(null);
  const open = Boolean(popperAnchorEl);

  const removeMaybe = (eventId, eventMaybeArray, uid) => {
    const newMaybes = () => {
      return eventMaybeArray.filter(user => user.uid !== uid);
    };
    startEditEvent(eventId, { maybe: newMaybes() });
  };

  const removeNotGoing = (eventId, eventNotGoingArray, uid) => {
    const newNotGoing = () => {
      return eventNotGoingArray.filter(user => user.uid !== uid);
    };
    startEditEvent(eventId, { notGoing: newNotGoing() });
  };

  const addMaybe = (eventId, eventMaybeArray) => {
    const newMaybes = eventMaybeArray
      ? [...eventMaybeArray, currentViewer]
      : [currentViewer];
    startEditEvent(eventId, { maybe: newMaybes });
  };

  const addNotGoing = (eventId, eventNotGoingArray) => {
    const newNotGoing = eventNotGoingArray
      ? [...eventNotGoingArray, currentViewer]
      : [currentViewer];
    startEditEvent(eventId, { notGoing: newNotGoing });
  };

  const handleMaybeClick = () => {
    isMaybe(currentViewer.uid, event.maybe)
      ? removeMaybe(event.id, event.maybe, currentViewer.uid)
      : addMaybe(event.id, event.maybe);
  };

  const handleNotGoingClick = () => {
    isNotGoing(currentViewer.uid, event.notGoing)
      ? removeNotGoing(event.id, event.notGoing, currentViewer.uid)
      : addNotGoing(event.id, event.notGoing);
  };

  const handleClick = event => {
    setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget);
  };

  const handleDeleteClick = () => {
    startDeleteEvent(event.id)
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setSnackbarOpen(false);
        }, 2500);
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
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container justify="space-between">
          <Grid item className={classes.eventTitle} xs={12} sm={6}>
            <Typography variant="h4">{event.title}</Typography>
            {event.authorId === currentViewer.uid && (
              <div>
                <div>
                  <Button variant="contained" color="secondary">
                    ویرایش
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleDeleteClick}
                  >
                    حذف
                  </Button>
                </div>
              </div>
            )}
          </Grid>
          <Grid item className={classes.EventAttendance} xs={12} sm={6}>
            <div>
              <div>
                <Button
                  size="small"
                  variant={
                    isMaybe(currentViewer.uid, event.maybe)
                      ? "contained"
                      : "outlined"
                  }
                  color={
                    isMaybe(currentViewer.uid, event.maybe)
                      ? "primary"
                      : "default"
                  }
                  onClick={handleMaybeClick}
                  disabled={isNotGoing(currentViewer.uid, event.notGoing)}
                >
                  شاید برم
                </Button>
              </div>
              <div>
                <Button size="small" variant="outlined" onClick={handleClick}>
                  {event.seats}
                </Button>
                <Popper open={open} anchorEl={popperAnchorEl} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper>
                        <Typography className={classes.typography}>
                          {event.seats} باقی‎مانده
                        </Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </div>
              <div>
                <Button
                  size="small"
                  variant={
                    isNotGoing(currentViewer.uid, event.notGoing)
                      ? "contained"
                      : "outlined"
                  }
                  color={
                    isNotGoing(currentViewer.uid, event.notGoing)
                      ? "primary"
                      : "default"
                  }
                  onClick={handleNotGoingClick}
                  disabled={isMaybe(currentViewer.uid, event.maybe)}
                >
                  نمی‎رم
                </Button>
              </div>
              <div>
                <Button
                  disabled={
                    moment(event.dateTime[0]) < moment() ||
                    isNotGoing(currentViewer.uid, event.notGoing)
                  }
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => props.history.push(`/selectseat/${event.id}`)}
                >
                  خرید بلیت
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      {renderPostEventSnackbar(
        snackbarOpen,
        isSuccess,
        isLoading,
        "deleteEvent"
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  currentViewer: state.authRedux
});

const mapDispatchToProps = dispatch => ({
  startDeleteEvent: id => dispatch(startDeleteEvent(id)),
  startEditEvent: (id, updates) => dispatch(startEditEvent(id, updates))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SubHeader));
