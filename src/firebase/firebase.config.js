// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRKir_c3t96TulBX1E_yp7ztEwBk8Zj2U",
  authDomain: "the-tsc-cafe-client.firebaseapp.com",
  projectId: "the-tsc-cafe-client",
  storageBucket: "the-tsc-cafe-client.appspot.com",
  messagingSenderId: "288841927399",
  appId: "1:288841927399:web:a6aa35f96806161e6b3042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;