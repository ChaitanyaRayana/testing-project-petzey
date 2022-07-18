import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_bQ61tv3fqJkWl85fYiY5-Lh5kDx_1p0",
  authDomain: "infoeatss.firebaseapp.com",
  projectId: "infoeatss",
  storageBucket: "infoeatss.appspot.com",
  messagingSenderId: "1066604960697",
  appId: "1:1066604960697:web:d3dc2affd8a8ea6d2bf468",
  measurementId: "G-29EW3RE1GL",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export const authentication = getAuth(app);

export { auth };
export default db;
