import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCn2zuGkLAhCD0iuz7jLcngPByOC5_6RPg",
    authDomain: "pokedex-76cde.firebaseapp.com",
    databaseURL: "https://pokedex-76cde.firebaseio.com",
    projectId: "pokedex-76cde",
    storageBucket: "pokedex-76cde.appspot.com",
    messagingSenderId: "788214290846",
    appId: "1:788214290846:web:0df56d45426831e8ea9e8f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();
