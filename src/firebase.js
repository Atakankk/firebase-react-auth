import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAZDX0X2IK3Z4arwM6GPK7yjyOrkI8AiKM",
    authDomain: "auth-development-1694d.firebaseapp.com",
    databaseURL: "https://auth-development-1694d-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "auth-development-1694d",
    storageBucket: "auth-development-1694d.appspot.com",
    messagingSenderId: "374544905746",
    appId: "1:374544905746:web:1669c91f06548004034acb"
    
})

export const auth = app.auth()

export default app
