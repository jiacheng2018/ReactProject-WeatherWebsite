/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
const firebase=require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyAYlSE5Owusox6dm3CRw5qe4NtZHzyfFts",
    authDomain: "fir-af0a4.firebaseapp.com",
    databaseURL: "https://fir-af0a4.firebaseio.com",
    projectId: "fir-af0a4",
    storageBucket: "fir-af0a4.appspot.com",
    messagingSenderId: "888651277940",
    appId: "1:888651277940:web:b1b10c59a5facc2dbdd321",
    measurementId: "G-ZSG4GMJE2W"
  });
  ReactDOM.render(<App />, document.getElementById('root'));
  // Initialize Firebase
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
