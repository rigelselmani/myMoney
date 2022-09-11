import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD6bEJc8dOct9A6xQFTAhn_wBpK5nyK4Nc",
    authDomain: "mymoney-58357.firebaseapp.com",
    projectId: "mymoney-58357",
    storageBucket: "mymoney-58357.appspot.com",
    messagingSenderId: "372525529762",
    appId: "1:372525529762:web:4fb645030b0d399ea7f5fb"
  };
  
  //init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore=firebase.firestore();
const projectAuth=firebase.auth()

export {projectFirestore, projectAuth}