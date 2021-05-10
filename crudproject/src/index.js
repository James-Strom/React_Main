import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTibVa2rFVltWLVsCg98RXVOkjGJm5V1s",
  authDomain: "crudproject-422b6.firebaseapp.com",
  projectId: "crudproject-422b6",
  storageBucket: "crudproject-422b6.appspot.com",
  messagingSenderId: "738730386489",
  appId: "1:738730386489:web:0e6d249845b009c0d559e8",
  measurementId: "G-WPY0JXL0H8"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics()

ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();