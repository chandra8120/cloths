// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqdYJE_H__ntEYlXxj82EAAl-uBRB_OPM",
  authDomain: "sand-e4da1.firebaseapp.com",
  projectId: "sand-e4da1",
  storageBucket: "sand-e4da1.appspot.com",
  messagingSenderId: "440391360737",
  appId: "1:440391360737:web:332381111185f29733d7a0",
  measurementId: "G-BH5Y886ZX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app