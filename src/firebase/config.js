import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCB3e-gyeFC1Z-m-YH8ksy-6LoGHsOmKyA",
    authDomain: "react-evaluacion-5-f42ee.firebaseapp.com",
    databaseURL: "https://react-evaluacion-5-f42ee.firebaseio.com",
    projectId: "react-evaluacion-5-f42ee",
    storageBucket: "react-evaluacion-5-f42ee.appspot.com",
    messagingSenderId: "274167677964",
    appId: "1:274167677964:web:77e44b19519cdd1559da29"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();
