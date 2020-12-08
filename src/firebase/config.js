import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



var firebaseConfig = {
    // paste your firebase config
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
