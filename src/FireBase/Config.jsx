
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKnzSfHPE0v0vLeYeYo5sfpy7huZagUlk",
  authDomain: "tucelular-dd77d.firebaseapp.com",
  projectId: "tucelular-dd77d",
  storageBucket: "tucelular-dd77d.appspot.com",
  messagingSenderId: "562955596597",
  appId: "1:562955596597:web:287ca54edf7af8fed5d27c"
};

const app = initializeApp(firebaseConfig);

export const getFirestoneApp=()=>{
    return app
}