import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCLEhs_HBOtoCuKa--apa5mQX1B0sJBFQg",
  authDomain: "auth-build-7abd6.firebaseapp.com",
  projectId: "auth-build-7abd6",
  storageBucket: "auth-build-7abd6.appspot.com",
  messagingSenderId: "511939873792",
  appId: "1:511939873792:web:22e90c19e1b72fc7501ce5"

})

export const auth = app.auth()
export default app
