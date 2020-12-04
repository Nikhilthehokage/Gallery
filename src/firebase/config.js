import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyC9f8iFHaCIdrmUSufcMAAtxQPN5sts3a0",
    authDomain: "smarteats-36190.firebaseapp.com",
    databaseURL: "https://smarteats-36190.firebaseio.com",
    projectId: "smarteats-36190",
    storageBucket: "smarteats-36190.appspot.com",
    messagingSenderId: "246065007931",
    appId: "1:246065007931:web:8daf080cb3822622a43b1e",
    measurementId: "G-TLWDS27FD9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };