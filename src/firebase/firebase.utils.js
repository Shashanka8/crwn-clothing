import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBp5hOYySsQA5h6thSMPHiBDL88EwxBFpw',
  authDomain: 'crwn-db-bcd4c.firebaseapp.com',
  projectId: 'crwn-db-bcd4c',
  storageBucket: 'crwn-db-bcd4c.appspot.com',
  messagingSenderId: '469239498337',
  appId: '1:469239498337:web:0bb7d1d18015e492b4cc20',
  measurementId: 'G-J96BJWRBTB',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
