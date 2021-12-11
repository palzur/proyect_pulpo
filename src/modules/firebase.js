import * as Firebase from "firebase/app";
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAfe6zhPsQZAmMXhLCItKlUv88l45L8zko",
  authDomain: "pulpo-8d638.firebaseapp.com",
  projectId: "pulpo-8d638",
  storageBucket: "pulpo-8d638.appspot.com",
  messagingSenderId: "384449638910",
  appId: "1:384449638910:web:730af0e60ee42f85da90af",
  measurementId: "${config.measurementId}"
};

const firebaseApp = Firebase.initializeApp(firebaseConfig)

export const Auth = firebaseApp.auth()
export const Storage = firebaseApp.storage()
export const Database = firebaseApp.firestore()
export const TasksRef = Database.collection('tasks')