import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAL1OfrhTlh4L36HhXEQPWY2t4leZhGsAM",
  authDomain: "test-290b8.firebaseapp.com",
  projectId: "test-290b8",
  storageBucket: "test-290b8.appspot.com",
  messagingSenderId: "379186784219",
  appId: "1:379186784219:web:ffcfecdec71fec964469fe"
};

const app = initializeApp(firebaseConfig);

export function getStore() {
  return app;
};