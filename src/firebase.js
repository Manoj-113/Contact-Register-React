import firebase from 'firebase/app';
  
  
  var firebaseConfig = {
    apiKey: "AIzaSyC4n_U478NJTIy8aqKwB3ivUfRtfiJMSz4",
    authDomain: "contact-register-crud.firebaseapp.com",
    databaseURL: "https://contact-register-crud-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contact-register-crud",
    storageBucket: "contact-register-crud.appspot.com",
    messagingSenderId: "322323713512",
    appId: "1:322323713512:web:af0f5e5f0f38954cd3a85d"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  // firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
