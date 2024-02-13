// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "my-ecommerce-fd959",
  storageBucket: "my-ecommerce-fd959.appspot.com",
  messagingSenderId: "344340978490",
  appId: "1:344340978490:web:0c449ba35f028184adce03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);