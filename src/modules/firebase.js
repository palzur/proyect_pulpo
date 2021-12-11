//importamos la dependencia de firebase (v8)
import Firebase from "firebase";
import firebaseProvider from "firebase/app";

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

//inicializamos la librería con la configuración del proyecto
const firebaseApp = Firebase.initializeApp(firebaseConfig);

// exportamos los módulos que utilizaremos
export const Auth = firebaseApp.auth()
export const Provider= new firebaseProvider.auth.GoogleAuthProvider();