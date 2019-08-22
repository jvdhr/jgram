export const getEventById = (events, id) => {
  let event = null;
  events.forEach(evt => {
    if (evt.id === id) {
      event = evt;
    }
  });

  return event;
};

export const isEventBookmarked = (eventId, userBookmarksArray) => {
  if (userBookmarksArray) {
    return !userBookmarksArray.every(bookmark => bookmark.id !== eventId);
  } else return false;
};

export const isEventLiked = (userId, eventLikesArray) => {
  if (eventLikesArray) {
    return !eventLikesArray.every(user => user.uid !== userId);
  } else return false;
};

export const isMaybe = (userId, eventMaybeArray) => {
  if (eventMaybeArray) {
    return !eventMaybeArray.every(user => user.uid !== userId);
  } else return false;
};

export const isNotGoing = (userId, eventNotGoingArray) => {
  if (eventNotGoingArray) {
    return !eventNotGoingArray.every(user => user.uid !== userId);
  } else return false;
};
