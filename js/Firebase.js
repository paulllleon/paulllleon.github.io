import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

export default class Firebase {
  constructor() {
    // Your web app's Firebase configuration
    //  A MODIFIER AVEC VOTRE CONFIGURATION PERSO

    const firebaseConfig = {
      apiKey: "AIzaSyBxWT9Y6vLVe3PiguDR6Z-_gicmAdT_pDo",
      authDomain: "esptest-87b88.firebaseapp.com",
      databaseURL:
        "https://esptest-87b88-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "esptest-87b88",
      storageBucket: "esptest-87b88.appspot.com",
      messagingSenderId: "21910455148",
      appId: "1:21910455148:web:5821e83c384ab7f73c2949",
    };

    // const firebaseConfig = {
    //   apiKey: "AIzaSyDRy8TeS5BqLRB7LOM-G_YN9xcNHHjq5n4",
    //   authDomain: "demopongaj.firebaseapp.com",
    //   databaseURL:
    //     "https://demopongaj-default-rtdb.europe-west1.firebasedatabase.app",
    //   projectId: "demopongaj",
    //   storageBucket: "demopongaj.appspot.com",
    //   messagingSenderId: "843642542420",
    //   appId: "1:843642542420:web:b57aa257b16d70b53a50c1",
    //   measurementId: "G-F5HQ2SV66S",
    // };

    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
      }
    });
    signInAnonymously(auth)
      .then(() => {
        console.log("signed in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    this.DATABASE = getDatabase();
  }

  send(_path, _val) {
    const path = ref(this.DATABASE, _path);
    set(path, _val);
  }
}
