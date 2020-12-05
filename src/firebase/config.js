import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDEMfSyhv9Rod8YNqKsNeCiAZ5JgaHHTVs",
  authDomain: "pokedex-login-b819b.firebaseapp.com",
  databaseURL: "https://pokedex-login-b819b.firebaseio.com",
  projectId: "pokedex-login-b819b",
  storageBucket: "pokedex-login-b819b.appspot.com",
  messagingSenderId: "403775722934",
  appId: "1:403775722934:web:e8d84f0d1b6fa74fbcdd17"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();
