import moment from "moment-jalaali";
import database from "../firebase/firebase";

export const addUser = user => ({
  type: "ADD_USER",
  user
});

export const startAddUser = (userData = {}) => {
  return dispatch => {
    const {
      uid,
      avatar,
      username,
      firstName,
      lastName,
      location,
      bio = "",
      cover = "https://source.unsplash.com/featured/?newyork",
      events = [],
      history = [],
      bookmarks = [],
      notifications = [],
      messages = [],
      createdAt = moment().format()
    } = userData;

    const user = {
      avatar,
      username,
      firstName,
      lastName,
      location,
      bio,
      cover,
      events,
      history,
      bookmarks,
      notifications,
      messages,
      createdAt
    };

    return database
      .ref(`users/${uid}`)
      .set(user)
      .then(ref => {
        return dispatch(
          addUser({
            uid,
            ...user
          })
        );
      });
  };
};

export const editUser = (id, updates) => ({
  type: "EDIT_USER",
  id,
  updates
});

export const startEditUser = (id, updates) => {
  return dispatch => {
    return database
      .ref(`users/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editUser(id, updates));
      });
  };
};

export const setUsers = users => ({
  type: "SET_USERS",
  users
});

export const startSetUsers = () => {
  return dispatch => {
    return database
      .ref("users")
      .once("value")
      .then(snapshot => {
        const users = [];
        snapshot.forEach(childSnapshot => {
          users.push({
            uid: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setUsers(users));
      });
  };
};
