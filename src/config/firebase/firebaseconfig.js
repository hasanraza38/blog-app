import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7DaP8il-YJGCVmOj3Ko0_AxbxnzMZKMg",
  authDomain: "blog-app-react1.firebaseapp.com",
  projectId: "blog-app-react1",
  storageBucket: "blog-app-react1.appspot.com",
  messagingSenderId: "674541455563",
  appId: "1:674541455563:web:e9c4925279ac1fdec7f34e"
};

const app = initializeApp(firebaseConfig);
export default app