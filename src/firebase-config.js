import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBKahQS6-zEBh9d_Jh7VI_8-Q8WOT-YpuQ",
    authDomain: "clone-4a732.firebaseapp.com",
    databaseURL: "https://clone-4a732-default-rtdb.firebaseio.com",
    projectId: "clone-4a732",
    storageBucket: "clone-4a732.appspot.com",
    messagingSenderId: "970395240788",
    appId: "1:970395240788:web:1933c782055b8da660e0c1",
    measurementId: "G-PE5TZPTXFB",
};

const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
