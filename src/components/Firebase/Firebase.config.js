import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const VITE_APIKEY = import.meta.env.VITE_APIKEY;
const VITE_AUTHDOMAIN = import.meta.env.VITE_AUTHDOMAIN;
const VITE_PROJECTID = import.meta.env.VITE_PROJECTID;
const VITE_STORAGEBUCKET = import.meta.env.VITE_STORAGEBUCKET;
const VITE_MESSAGINGSENDERID = import.meta.env.VITE_MESSAGINGSENDERID;
const VITE_APPID = import.meta.env.VITE_APPID;
const VITE_MEASUREMENTID = import.meta.env.VITE_MEASUREMENTID;

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
