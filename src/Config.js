import * as firebase from "firebase";


const config = {
    apiKey: "AIzaSyANnbZwhzQy6agw2w6-fGNxBAQ_yq2WpRs",
    authDomain: "group-recipe-app.firebaseapp.com",
    databaseURL: "https://group-recipe-app.firebaseio.com",
    projectId: "group-recipe-app",
    storageBucket: "group-recipe-app.appspot.com",
    messagingSenderId: "538468616349"
  };

  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();