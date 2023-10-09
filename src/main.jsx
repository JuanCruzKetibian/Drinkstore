import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhKaRFYcdudoNms_WWVaYrVKZn6o4WCxY",
  authDomain: "drinkstore-796cc.firebaseapp.com",
  projectId: "drinkstore-796cc",
  storageBucket: "drinkstore-796cc.appspot.com",
  messagingSenderId: "382774931061",
  appId: "1:382774931061:web:a27f461e203a56fea9d23c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
