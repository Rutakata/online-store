import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// const REACT_APP_FIREBASE_KEY = import.meta.env.REACT_APP_FIREBASE_KEY;
// const REACT_APP_FIREBASE_DOMAIN = import.meta.env.REACT_APP_FIREBASE_DOMAIN; 
// const REACT_APP_FIREBASE_PROJECT_ID = import.meta.env.REACT_APP_FIREBASE_PROJECT_ID; 
// const REACT_APP_FIREBASE_STORAGE_BUCKET = import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET; 
// const REACT_APP_FIREBASE_SENDER_ID = import.meta.env.REACT_APP_FIREBASE_SENDER_ID; 
// const REACT_APP_FIREBASE_APP_ID = import.meta.env.REACT_APP_FIREBASE_APP_ID;
// const REACT_APP_FIREBASE_MEASUREMENT_ID = import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID;  

const firebaseConfig = {
  apiKey: "AIzaSyCphOeDOl97GmwBOIif6ghL1rD_XnRKWkM",
  authDomain: "online-store-9a748.firebaseapp.com",
  projectId: "online-store-9a748",
  storageBucket: "online-store-9a748.appspot.com",
  messagingSenderId: "1071265698480",
  appId: "1:1071265698480:web:e7ecab0dc4767a43efe175",
  measurementId: "G-S5M17V4RHY",
  databaseURL: "https://online-store-9a748-default-rtdb.europe-west1.firebasedatabase.app",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
// const analytics = getAnalytics(app);
// export const googleAuthProvider = new GoogleAuthProvider(); 