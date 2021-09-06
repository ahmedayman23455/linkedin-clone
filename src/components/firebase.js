import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDSFtWUBgWhNam4c9ZzjqLrV99tNyRD-Ak',
  authDomain: 'linkedin-clone-6c202.firebaseapp.com',
  projectId: 'linkedin-clone-6c202',
  storageBucket: 'linkedin-clone-6c202.appspot.com',
  messagingSenderId: '762407018551',
  appId: '1:762407018551:web:204118c8910bb45727dfb2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
