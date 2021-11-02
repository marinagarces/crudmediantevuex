import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuI-4vATMQw4Mr21cCx3C23EMxiSIaF_w",
  authDomain: "test-435bd.firebaseapp.com",
  projectId: "test-435bd",
  storageBucket: "test-435bd.appspot.com",
  messagingSenderId: "888912198629",
  appId: "1:888912198629:web:9f6ba9f440ad31d97e8d0c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {
  app,
  auth,
}
