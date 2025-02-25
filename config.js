// const firebaseConfig = {
//   apiKey: "AIzaSyCzeXvcgkgLgQu1Pj2qce4wANvbe7ChWO4",
//   authDomain: "gclc-eabb4.firebaseapp.com",
//   databaseURL: "https://gclc-eabb4-default-rtdb.firebaseio.com",
//   projectId: "gclc-eabb4",
//   storageBucket: "gclc-eabb4.appspot.com",
//   messagingSenderId: "588542989378",
//   appId: "1:588542989378:web:ee83a42419ccaeac0249db"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCzeXvcgkgLgQu1Pj2qce4wANvbe7ChWO4",
    authDomain: "gclc-eabb4.firebaseapp.com",
    databaseURL: "https://gclc-eabb4-default-rtdb.firebaseio.com",
    projectId: "gclc-eabb4",
    storageBucket: "gclc-eabb4.appspot.com",
    messagingSenderId: "588542989378",
    appId: "1:588542989378:web:ee83a42419ccaeac0249db"
};

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const user = firebase.auth().currentUser;

const db = firebase.firestore();


