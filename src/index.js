import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmJpQQIvzh-mdqE8dpbnqB_LYVcszRQBo",
  authDomain: "movie-store-556f7.firebaseapp.com",
  projectId: "movie-store-556f7",
  storageBucket: "movie-store-556f7.appspot.com",
  messagingSenderId: "693154998263",
  appId: "1:693154998263:web:b46e2b5d7718136dacf0f2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


