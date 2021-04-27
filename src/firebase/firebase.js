import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBo0m-_jAVCZKeqC3YCMU8IDz4rwZs8Ozg",
    authDomain: "latihan-login2.firebaseapp.com",
    projectId: "latihan-login2",
    storageBucket: "latihan-login2.appspot.com",
    messagingSenderId: "803864898991",
    appId: "1:803864898991:web:6f4ad0e055df2796c9935a",
    measurementId: "G-C21NGD42XP"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;