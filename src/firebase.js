import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrcORu6nCs8hb61LPkCiNaiNsr-gMPrzE",
    authDomain: "react-ffunctions.firebaseapp.com",
    databaseURL: "https://react-ffunctions-default-rtdb.firebaseio.com",
    projectId: "react-ffunctions",
    storageBucket: "react-ffunctions.appspot.com",
    messagingSenderId: "860058913398",
    appId: "1:860058913398:web:e78af3e3a1fb6e0887ed57",
    measurementId: "G-3MHH2MW1RW"
};

firebase.initializeApp(firebaseConfig);

export default firebase;