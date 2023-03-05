import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


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