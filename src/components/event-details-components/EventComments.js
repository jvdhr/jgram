import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { connect } from "react-redux";
import useInputState from "../../_hooks/useInputState";
import { startEditEvent } from "../../_actions/eventActions";
import uuid from "uuid";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { getUserById } from "../../_helpers/userFunctions";
import useStyles from "../../_styles/event-details-styles/EventComments";
import renderPostEventSnackbar from "../composite/snackbar";

function EventComments(props) {
  const classes = useStyles();
  const {
    event,
    currentViewer,
    users,
    startEditEvent,
    isAuthenticated
  } = props;

  const [comment, setComment, resetComment] = useInputState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const handlePostComment = e => {
    e.preventDefault();
    const updates = {
      comments: [
        ...event.comments,
        {
          id: uuid(),
          createdAt: moment().format(),
          body: comment,
          authorId: currentViewer.uid,
          authorUsername: currentViewer.username
        }
      ]
    };

    setSnackbarOpen(true);
    startEditEvent(event.id, updates)
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setSnackbarOpen(false);
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
    resetComment();
  };

  let jsx;

  if (!isAuthenticated) {
    jsx = (
      <div className={classes.loginMessage}>
        <Box my={2}>
          <Typography component="p">
            برای ارسال نظر ابتدا باید وارد شوید.
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.history.push("/signin")}
        >
          ورود
        </Button>
      </div>
    );
  } else {
    jsx = (
      <form onSubmit={handlePostComment}>
        <Grid container className={classes.box}>
          <Grid item xs={2} sm={1} className={classes.innerBox}>
            <Avatar
              alt="avatar"
              src={currentViewer.avatar}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={10} sm={9} className={classes.innerBox}>
            <InputBase
              fullWidth
              type="text"
              className={classes.commentInput}
              placeholder={`نظرتون رو بنویسید`}
              value={comment}
              onChange={setComment}
              required
            />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.innerBox}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              className={classes.postComment}
              type="submit"
            >
              ارسال نظر
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }

  return (
    <div className={classes.root}>
      {jsx}
      {event.comments.map(comment => {
        const user = getUserById(users, comment.authorId);
        return (
          <Grid key={comment.id} container className={classes.box}>
            <Grid item xs={2} sm={1} className={classes.innerBox}>
              <Avatar
                alt="avatar"
                src={user.avatar}
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={7} sm={9} className={classes.leftAlignedInnerBox}>
              <h4>{`${user.firstName} ${user.lastName}`}</h4>
            </Grid>
            <Grid item xs={12} className={classes.leftAlignedInnerBox}>
              <p className={classes.commentTime}>
                {moment(comment.createdAt)
                  .locale("fa")
                  .fromNow()}
              </p>
            </Grid>
            <Grid item xs={12} className={classes.leftAlignedInnerBox}>
              <p>{comment.body}</p>
            </Grid>
          </Grid>
        );
      })}
      {renderPostEventSnackbar(snackbarOpen, isSuccess, isLoading, "comment")}
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users,
  currentViewer: state.authRedux,
  events: state.events,
  isAuthenticated: !!state.authRedux.uid
});

const mapDispatchToProps = dispatch => ({
  startEditEvent: (id, updates) => dispatch(startEditEvent(id, updates))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EventComments));
