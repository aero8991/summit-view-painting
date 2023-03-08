import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC4zbW8OApMseMRJJMFKPXQ7WgBCFemSYQ",
    authDomain: "painting-af94a.firebaseapp.com",
    projectId: "painting-af94a",
    storageBucket: "painting-af94a.appspot.com",
    messagingSenderId: "133228988968",
    appId: "1:133228988968:web:b9f0df5b66b664e56f831d",
    measurementId: "G-BQKT21KM1D"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)