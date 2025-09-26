// Paste your Firebase config here
 const firebaseConfig = {
    apiKey: "AIzaSyCaVDnKbkT0UdfY__3csTB368lWs6TM1Wg",
    authDomain: "workshop-ms.firebaseapp.com",
    projectId: "workshop-ms",
    storageBucket: "workshop-ms.firebasestorage.app",
    messagingSenderId: "111186300427",
    appId: "1:111186300427:web:aa9ece4f8745a9ce70c10e",
  };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
