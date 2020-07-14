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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // 先用 userRef 抓那個位置地址 再用 snapShot 抓那個地址裡面的資料確認裡面有沒有東西(exist)
    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log('snapShot', snapShot);

    // 如果地址裡面沒有資料的話
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            // 在這個地址裡面新增資料
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        console.log(newDocRef);
        batch.set(newDocRef, obj);
    })

    return await batch.commit();
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