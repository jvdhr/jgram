import { firebase, auth } from "../firebase/firebase";

export const login = user => ({
  type: "LOGIN",
  user
});

export const startLogin = user => {
  return () => {
    return auth.signInWithEmailAndPassword(user.email, user.password);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return auth.signOut();
  };
};

export const startUpdatePassword = (email, oldPassword, password) => {
  const reauthenticate = oldPassword => {
    const user = auth.currentUser;
    const cred = firebase.auth.EmailAuthProvider.credential(email, oldPassword);
    return user.reauthenticateWithCredential(cred);
  };
  return () => {
    return reauthenticate(oldPassword).then(() => {
      return auth.currentUser.updatePassword(password);
    });
  };
};
