import database from "../firebase/firebase";
import moment from "moment-jalaali";

export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});

export const startAddEvent = (eventData = {}) => {
  return dispatch => {
    const {
      title,
      description,
      category,
      dateTime,
      location = {
        address: "",
        city: "",
        latlng: {
          lat: 0,
          lng: 0
        }
      },
      hall = "",
      ticketPrice,
      seats = 0,
      booked = [],
      authorId,
      going = [],
      maybe = [],
      notGoing = [],
      cover = "https://source.unsplash.com/featured/?rock_concert",
      createdAt = moment().format(),
      isExpired = false,
      social = {
        likes: []
      },
      comments = [],
      organizers = []
    } = eventData;

    const event = {
      title,
      description,
      category,
      dateTime,
      location,
      hall,
      ticketPrice,
      seats,
      booked,
      authorId,
      going,
      maybe,
      notGoing,
      cover,
      createdAt,
      isExpired,
      social,
      comments,
      organizers
    };

    return database
      .ref("events")
      .push(event)
      .then(ref => {
        dispatch(
          addEvent({
            id: ref.key,
            ...event
          })
        );
      });
  };
};

export const editEvent = (id, updates) => ({
  type: "EDIT_EVENT",
  id,
  updates
});

export const startEditEvent = (id, updates) => {
  return dispatch => {
    return database
      .ref(`events/${id}`)
      .update(updates)
      .then(() => {
        return dispatch(editEvent(id, updates));
      });
  };
};

export const deleteEvent = id => ({
  type: "DELETE_EVENT",
  id
});

export const startDeleteEvent = id => {
  return dispatch => {
    return database
      .ref(`events/${id}`)
      .remove()
      .then(() => {
        dispatch(deleteEvent(id));
      });
  };
};

export const setEvents = events => ({
  type: "SET_EVENTS",
  events
});

export const startSetEvents = () => {
  return dispatch => {
    return database
      .ref("events")
      .once("value")
      .then(snapshot => {
        const events = [];
        let social;
        let booked;
        // let attendance;
        let comments;
        snapshot.forEach(childSnapshot => {
          if (!social) {
            social = { likes: [], shares: [] };
          }
          if (!booked) {
            booked = [];
          }
          // if (!attendance) {
          //   attendance = {
          //     going: [],
          //     maybe: [],
          //     notGoing: []
          //   };
          // }
          if (!comments) {
            comments = [];
          }
          events.push({
            id: childSnapshot.key,
            social,
            booked,
            // attendance,
            comments,
            ...childSnapshot.val()
          });
        });

        dispatch(setEvents(events));
      });
  };
};
