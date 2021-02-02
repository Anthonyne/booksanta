import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCVMtd8hCoAHoiMFkJa5nfPDtJTJTahCDY",
  authDomain: "booksanta-df25e.firebaseapp.com",
  projectId: "booksanta-df25e",
  storageBucket: "booksanta-df25e.appspot.com",
  messagingSenderId: "550830115367",
  appId: "1:550830115367:web:d832048212be5bdbad5c02"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
