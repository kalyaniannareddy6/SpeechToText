import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC3xW8qfUTLRdwGTHLwGUTQgl8ROi-o6nk',
  authDomain: 'speech-9fa83.firebaseapp.com',
  databaseURL: 'https://speech-9fa83.firebaseio.com',
  projectId: 'speech-9fa83',
  storageBucket: 'speech-9fa83.appspot.com',
  messagingSenderId: '908702461517',
  appId: '1:908702461517:android:2e6dba0e599adb24f97604',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
