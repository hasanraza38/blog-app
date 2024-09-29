import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0qpAi_KxeLtZA9ET6NYOb9jkdFfl8xE8",
  authDomain: "blog-app-react-d6f24.firebaseapp.com",
  projectId: "blog-app-react-d6f24",
  storageBucket: "blog-app-react-d6f24.appspot.com",
  messagingSenderId: "767309561557",
  appId: "1:767309561557:web:0f69fb69284fafd4726c5c",
  measurementId: "G-QN08MKTR9M"
};

const app = initializeApp(firebaseConfig);
export default app