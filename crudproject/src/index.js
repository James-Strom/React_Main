import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARJSy5m8JUpT607YI0HBzR30bfOQxa7ZM",
    authDomain: "crudproject-876b6.firebaseapp.com",
    databaseURL: "https://crudproject-876b6.firebaseio.com",
    projectId: "crudproject-876b6",
    storageBucket: "crudproject-876b6.appspot.com",
    messagingSenderId: "230071740417",
    appId: "1:230071740417:web:cc9e5d2b34e9538e643800",
    measurementId: "G-PBMJWF8L7T"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
