import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics"

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_HRNET_API_KEY,
//   authDomain: process.env.REACT_APP_HRNET_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_HRNET_PROJECT_ID,
//   databeseURL: process.env.REACT_APP_HRNET_DATABASEURL,
//   storageBucket: process.env.REACT_APP_HRNET_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_HRNET_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_HRNET_APP_ID,
// }

const firebaseConfig = {
  apiKey: "AIzaSyD9UA2HCTr6dDTRK3qFBRXoqUOgUBzrUlg",
  authDomain: "oc-p14-hrnet-80122.firebaseapp.com",
  databaseURL: "https://oc-p14-hrnet-80122-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "oc-p14-hrnet-80122",
  storageBucket: "oc-p14-hrnet-80122.appspot.com",
  messagingSenderId: "786200323452",
  appId: "1:786200323452:web:1b61830d447acd9c0f70f9"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);