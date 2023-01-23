
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7awWpvl9RlH46sNHebVOKH_eIJLjjOmg",
  authDomain: "ctd5-devsafio-78c0c.firebaseapp.com",
  projectId: "ctd5-devsafio-78c0c",
  storageBucket: "ctd5-devsafio-78c0c.appspot.com",
  messagingSenderId: "135214155236",
  appId: "1:135214155236:web:08e5f21b385019aabe73f1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {app, auth};