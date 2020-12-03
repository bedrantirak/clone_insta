import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBoETZPwITaWtY_MAi-Vdqyhh8o17rgoec",
    authDomain: "clone-insta-d74fc.firebaseapp.com",
    databaseURL: "https://clone-insta-d74fc.firebaseio.com",
    projectId: "clone-insta-d74fc",
    storageBucket: "clone-insta-d74fc.appspot.com",
    messagingSenderId: "973958362749",
    appId: "1:973958362749:web:e9498759348cc1960ba314",
    measurementId: "G-60SP1QLJSX"
  });
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export  {db, auth, storage};