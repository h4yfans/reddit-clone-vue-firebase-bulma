import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB8p-4kGoMzy7SdfX4LQlBN_YzA0BJxVEE',
  authDomain: 'reddit-clone-10f9e.firebaseapp.com',
  databaseURL: 'https://reddit-clone-10f9e.firebaseio.com',
  projectId: 'reddit-clone-10f9e',
  storageBucket: 'reddit-clone-10f9e.appspot.com',
  messagingSenderId: '1014352786293',
};
firebase.initializeApp(config);

export default firebase;
