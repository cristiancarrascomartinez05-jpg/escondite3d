// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSO4qNW44VJWZSHbNBObxZ-D1yPKK_adY",
  authDomain: "escondite3d.firebaseapp.com",
  databaseURL: "https://escondite3d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "escondite3d",
  storageBucket: "escondite3d.firebasestorage.app",
  messagingSenderId: "327708987564",
  appId: "1:327708987564:web:2e11c22b4695068efa0f09",
  measurementId: "G-QM78BKY5QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
