import React, { useState } from "react";
import EventInfo from "./EventInfo";
import EventAttendance from "./EventAttendance";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {
  LikeIcon,
  LikedIcon,
  CommentIcon,
  ShareIcon,
  AddBookmarkIcon,
  RemoveBookmarkIcon
} from "../../icons/Icons";
import { Link, withRouter } from "react-router-dom";
import moment from "moment-jalaali";
import { connect } from "react-redux";
import { startEditUser } from "../../_actions/userActions";
import {
  isEventBookmarked,
  isEventLiked,
  isMaybe,
  isNotGoing
} from "../../_helpers/eventFunctions";
import { startDeleteEvent, startEditEvent } from "../../_actions/eventActions";
import useStyles from "../../_styles/home-page-styles/EventCard";
import renderPostEventSnackbar from "../composite/snackbar";

const eventCardMenuOptions = ["ویرایش", "حذف"];

function EventCard(props) {
  const {
    event,
    isAuthenticated,
    currentViewer,
    startEditUser,
    startDeleteEvent,
    startEditEvent
  } = props;
  const classes = useStyles();

  const [eventCardMenuAnchor, setEventCardMenuAnchor] = useState(null);
  const open = Boolean(eventCardMenuAnchor);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const removeBookmark = (eventId, userBookmarksArray, uid) => {
    const newBookmarks = () => {
      return userBookmarksArray.filter(bookmark => bookmark.id !== eventId);
    };
    startEditUser(uid, { bookmarks: newBookmarks() });
  };

  const removeLike = (eventId, eventLikesArray, uid) => {
    const newLikes = () => {
      return eventLikesArray.filter(user => user.uid !== uid);
    };
    startEditEvent(eventId, { social: { likes: newLikes() } });
  };

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

  const addBookmark = (eventId, userBookmarksArray, uid) => {
    const newBookmarks = userBookmarksArray
      ? [...userBookmarksArray, { id: eventId }]
      : [{ id: eventId }];
    startEditUser(uid, { bookmarks: newBookmarks });
  };

  const addLike = (eventId, eventLikesArray) => {
    const newLikes = eventLikesArray
      ? [...eventLikesArray, currentViewer]
      : [currentViewer];
    startEditEvent(eventId, { social: { likes: newLikes } });
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

  const handleEventCardMenuClick = event => {
    setEventCardMenuAnchor(event.currentTarget);
  };

  const handleEventCardMenuClose = () => {
    setEventCardMenuAnchor(null);
  };

  const handleEventCardMenuItemClick = index => {
    switch (index) {
      case 1:
        setSnackbarOpen(true);
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
        break;
      default:
        handleEventCardMenuClose();
    }
    handleEventCardMenuClose();
  };

  const handleBookmarkClick = eventId => {
    isEventBookmarked(event.id, currentViewer.bookmarks)
      ? removeBookmark(eventId, currentViewer.bookmarks, currentViewer.uid)
      : addBookmark(eventId, currentViewer.bookmarks, currentViewer.uid);
  };

  const handleLikeClick = eventId => {
    isEventLiked(currentViewer.uid, event.social.likes)
      ? removeLike(eventId, event.social.likes, currentViewer.uid)
      : addLike(eventId, event.social.likes);
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

  return (
    <Card className={classes.root}>
      <Box display="flex" bgcolor="background.paper">
        <Box flexGrow={1}>
          <Typography variant="h5" className={classes.title}>
            {<Link to={`/event/${event.id}`}>{event.title}</Link>}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" className={classes.title}>
            قیمت: <span>{event.ticketPrice}</span>
          </Typography>
        </Box>
        {event.authorId === currentViewer.uid && (
          <Box className={classes.menuContainer}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleEventCardMenuClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={eventCardMenuAnchor}
              keepMounted
              open={open}
              onClose={handleEventCardMenuClose}
            >
              {eventCardMenuOptions.map((option, index) => (
                <MenuItem
                  key={option}
                  onClick={() => handleEventCardMenuItemClick(index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Box>

      <Box
        display="flex"
        className={classes.header}
        style={{ backgroundImage: `url(${event.cover})` }}
      >
        <Grid container justify="space-between" spacing={1}>
          <Grid item xs={12} sm={4} className={classes.btnContainer}>
            <Button
              disabled={
                moment(event.dateTime[0]) < moment() ||
                isNotGoing(currentViewer.uid, event.notGoing)
              }
              size="small"
              variant="contained"
              color="secondary"
              className={classes.buyTicket}
              onClick={() => props.history.push(`/selectseat/${event.id}`)}
            >
              خرید بلیت
            </Button>
            <Button
              size="small"
              value="maybe"
              variant={
                isMaybe(currentViewer.uid, event.maybe)
                  ? "contained"
                  : "outlined"
              }
              color={
                isMaybe(currentViewer.uid, event.maybe) ? "primary" : "default"
              }
              className={classes.maybe}
              onClick={handleMaybeClick}
              disabled={isNotGoing(currentViewer.uid, event.notGoing)}
            >
              شاید برم
            </Button>
          </Grid>
          <Grid xs={12} sm={4} item className={classes.btnContainer}>
            <Button size="small" variant="outlined" className={classes.maybe}>
              {event.seats} جایگاه
            </Button>
            <Button
              size="small"
              value="notGoing"
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
              className={classes.maybe}
              onClick={handleNotGoingClick}
              disabled={isMaybe(currentViewer.uid, event.maybe)}
            >
              نمی‎رم
            </Button>
          </Grid>
        </Grid>
      </Box>
      <EventInfo event={event} />
      <Divider />
      <EventAttendance event={event} />
      <Divider />
      <Box display="flex" className={classes.social}>
        <Box flexGrow={1}>
          <span className={classes.socialBtn}>
            <IconButton
              onClick={() => handleLikeClick(event.id)}
              variant="outlined"
            >
              {isEventLiked(currentViewer.uid, event.social.likes) ? (
                <LikedIcon className={classes.iconSize} />
              ) : (
                <LikeIcon className={classes.iconSize} />
              )}
            </IconButton>
            <span>{event.social.likes.length}</span>
          </span>
          <span className={classes.socialBtn}>
            <IconButton variant="outlined">
              <CommentIcon className={classes.iconSize} />
            </IconButton>
            <span>{event.comments.length}</span>
          </span>
        </Box>
        <Box>
          {isAuthenticated && (
            <span className={classes.socialBtn}>
              <IconButton onClick={() => handleBookmarkClick(event.id)}>
                {isEventBookmarked(event.id, currentViewer.bookmarks) ? (
                  <RemoveBookmarkIcon className={classes.iconSize} />
                ) : (
                  <AddBookmarkIcon className={classes.iconSize} />
                )}
              </IconButton>
            </span>
          )}
          <span className={classes.socialBtn}>
            <IconButton variant="outlined">
              <ShareIcon className={classes.iconSize} />
            </IconButton>
          </span>
        </Box>
      </Box>
      {renderPostEventSnackbar(
        snackbarOpen,
        isSuccess,
        isLoading,
        "deleteEvent"
      )}
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  startEditUser: (uid, updates) => dispatch(startEditUser(uid, updates)),
  startDeleteEvent: id => dispatch(startDeleteEvent(id)),
  startEditEvent: (id, updates) => dispatch(startEditEvent(id, updates))
});

const mapStateToProps = state => ({
  currentViewer: state.authRedux,
  isAuthenticated: !!state.authRedux.uid
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EventCard));
