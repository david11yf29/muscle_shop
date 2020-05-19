import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLU17bpq83RdB-WzpVjCA1boMuNte5nyc",
    authDomain: "muscleshop-ca740.firebaseapp.com",
    databaseURL: "https://muscleshop-ca740.firebaseio.com",
    projectId: "muscleshop-ca740",
    storageBucket: "muscleshop-ca740.appspot.com",
    messagingSenderId: "132806049140",
    appId: "1:132806049140:web:8a703da72cbf828dd04021",
    measurementId: "G-RYWTQE32DL"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;