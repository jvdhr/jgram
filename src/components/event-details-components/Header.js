import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  LikeIcon,
  LikedIcon,
  CommentIcon,
  AddBookmarkIcon,
  RemoveBookmarkIcon,
  ShareIcon
} from "../../icons/Icons";
import { getUserById } from "../../_helpers/userFunctions";
import { isEventBookmarked, isEventLiked } from "../../_helpers/eventFunctions";
import { startEditEvent } from "../../_actions/eventActions";
import { startEditUser } from "../../_actions/userActions";
import useStyles from "../../_styles/event-details-styles/Header";

function Header(props) {
  const { event, users, currentViewer, startEditUser, startEditEvent } = props;
  const classes = useStyles();
  const organizer = getUserById(users, event.authorId);

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

  return (
    <Grid container justify="center" className={classes.header}>
      <Container maxWidth="md">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={4} className={classes.avatar}>
                <Avatar
                  alt="avatar"
                  src={organizer.avatar}
                  className={classes.bigAvatar}
                />
              </Grid>
              <Grid item xs={12} md={8} className={classes.info}>
                <h3>{`${organizer.firstName} ${organizer.lastName}`}</h3>
                <h5>برگزارکننده</h5>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.social}>
            <Grid>
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
              <span className={classes.socialBtn}>
                <IconButton
                  variant="outlined"
                  onClick={() => handleBookmarkClick(event.id)}
                >
                  {isEventBookmarked(event.id, currentViewer.bookmarks) ? (
                    <RemoveBookmarkIcon className={classes.iconSize} />
                  ) : (
                    <AddBookmarkIcon className={classes.iconSize} />
                  )}
                </IconButton>
              </span>
              <span className={classes.socialBtn}>
                <IconButton variant="outlined">
                  <ShareIcon className={classes.iconSize} />
                </IconButton>
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => ({
  startEditUser: (uid, updates) => dispatch(startEditUser(uid, updates)),
  startEditEvent: (id, updates) => dispatch(startEditEvent(id, updates))
});

const mapStateToProps = state => {
  return {
    currentViewer: state.authRedux,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
