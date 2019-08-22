import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBUY-maackh_MwqFwfeoU9db5DKIbyd5-g",
  authDomain: "jgram-1563535928516.firebaseapp.com",
  databaseURL: "https://jgram-1563535928516.firebaseio.com/",
  projectId: "jgram-1563535928516",
  storageBucket: "jgram-1563535928516.appspot.com",
  messagingSenderId: "928215952529",
  appId: "1:928215952529:web:e2aad78007c5b4e6"
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();
const auth = firebase.auth();

auth.languageCode = "fa";

// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

export { firebase, storage, auth, database as default };
