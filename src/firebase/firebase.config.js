// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLF7iS0uM6QN_H5wVD9Oy0jO9FJDCuwCI",
  authDomain: "travel-agency-d29f1.firebaseapp.com",
  projectId: "travel-agency-d29f1",
  storageBucket: "travel-agency-d29f1.appspot.com",
  messagingSenderId: "875802287893",
  appId: "1:875802287893:web:8df5fe04d45cb5ed96131c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;