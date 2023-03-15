import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCXT3C7HTHGwFQiSG7HdVnuXcXHdg8EhU8",
    authDomain: "dishcovery-c3a94.firebaseapp.com",
    projectId: "dishcovery-c3a94",
    storageBucket: "dishcovery-c3a94.appspot.com",
    messagingSenderId: "676458492098",
    appId: "1:676458492098:web:218c0e9753be88d0c0cb5b"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {app, auth, db};