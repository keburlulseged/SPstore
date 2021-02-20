import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBE-ZiGigHwQ1jLqW4vKCsxiC1XPYsY0N0",
  authDomain: "scotch-porter-clone.firebaseapp.com",
  projectId: "scotch-porter-clone",
  storageBucket: "scotch-porter-clone.appspot.com",
  messagingSenderId: "1025032282453",
  appId: "1:1025032282453:web:2ff49949ad052cdcad0fdc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
