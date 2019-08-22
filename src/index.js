import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./_store/configureStore";
import { createBrowserHistory } from "history";
import moment from "moment-jalaali";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { startSetEvents } from "./_actions/eventActions";
import { startSetUsers } from "./_actions/userActions";
import database, { auth } from "./firebase/firebase";
import { login, logout } from "./_actions/authActions";
import Loading from "./components/Loading";

moment.loadPersian({
  dialect: "persian-modern",
  usePersianDigits: true
});

moment.defineLocale("fa", {});

export const history = createBrowserHistory();

const theme = createMuiTheme({
  direction: "rtl" // Both here and <body dir="rtl">
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Router history={history}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </Router>
  </Provider>
);

ReactDOM.render(<Loading />, document.getElementById("root"));

store.dispatch(startSetEvents()).then(() => {
  store
    .dispatch(startSetUsers())
    .then(() => {})
    .then(() => {
      ReactDOM.render(jsx, document.getElementById("root"));
    });
});

auth.onAuthStateChanged(user => {
  if (user) {
    return database.ref(`users/${user.uid}`).on("value", snapshot => {
      let usr = {};
      snapshot.forEach(childSnapshot => {
        usr[childSnapshot.key] = childSnapshot.val();
      });
      store.dispatch(
        login({
          uid: user.uid,
          ...usr
          // avatar: user.photoURL,
          // username: user.displayName,
        })
      );
      if (history.location.pathname === "/signin") {
        history.push("/");
      }
    });
  } else {
    store.dispatch(logout());
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
