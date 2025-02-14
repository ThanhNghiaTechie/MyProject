
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBk0olJu3BqQH__LPFT_CU76AAO1dcdEaE",
    authDomain: "apporder-88b1c.firebaseapp.com",
    projectId: "apporder-88b1c",
    storageBucket: "apporder-88b1c.firebasestorage.app",
    messagingSenderId: "557695896690",
    appId: "1:557695896690:web:ae73754cdf5f55e9e706eb",
    measurementId: "G-6JH9Y6LN8R"
};
//
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(() => AsyncStorage),
});
console.log(JSON.stringify(auth))
export {
    auth
}
