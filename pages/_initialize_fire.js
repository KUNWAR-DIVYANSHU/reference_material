import { initializeApp } from "firebase/app";

export function initialize_fire(){
    // initialize app 
    const firebaseConfig = {
      apiKey: "AIzaSyDUL4AJNEmD3wCo1dfxJXxpV_aVomUyfI8",
      authDomain: "reference-material-1b31c.firebaseapp.com",
      projectId: "reference-material-1b31c",
      storageBucket: "reference-material-1b31c.appspot.com",
      messagingSenderId: "379322752873",
      appId: "1:379322752873:web:dbcc2d7e1c52f34ddb67f8",
      measurementId: "G-406G8RFC9D"
    };
  
    const app = initializeApp(firebaseConfig);
    return app;
}