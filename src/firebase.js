import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdisihqZqGnEXrMUj_-LPuji9EnfPj4gk",
    authDomain: "netflix-clone-app-f4e53.firebaseapp.com",
    projectId: "netflix-clone-app-f4e53",
    storageBucket: "netflix-clone-app-f4e53.appspot.com",
    messagingSenderId: "654611395407",
    appId: "1:654611395407:web:ed67450591158fbcc04b3a"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;