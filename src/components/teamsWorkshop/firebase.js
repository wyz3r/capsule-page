import firebase from 'firebase/app'
import 'firebase/firestore'

// const settings = {timestampsInSnapshots: true}

const config = {
    apiKey: "AIzaSyBfZcVbolNoYiQx7NoF7Zief9V_Nn-Tgw8",
    authDomain: "capsule-brian.firebaseapp.com",
    databaseURL: "https://capsule-brian.firebaseio.com",
    projectId: "capsule-brian",
    storageBucket: "capsule-brian.appspot.com",
    messagingSenderId: "997092014450",
    appId: "1:997092014450:web:c3ddf8425e91d6401845eb"
};
firebase.initializeApp(config);
// firestore().settings(settings);

export default firebase
