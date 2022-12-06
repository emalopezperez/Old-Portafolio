import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyB_TF6mGeitOLD6gzRT2a5Dz1nGwObvy1Q",

  authDomain: "carmma-b3d6c.firebaseapp.com",

  projectId: "carmma-b3d6c",

  storageBucket: "carmma-b3d6c.appspot.com",

  messagingSenderId: "880252381910",

  appId: "1:880252381910:web:4db76cc77d851bdac33777"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

