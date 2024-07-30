import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBypf2agasVIdvzAmHt3CLKf7MMs3OlKzY",
  authDomain: "entrega-final-coder-ce6aa.firebaseapp.com",
  projectId: "entrega-final-coder-ce6aa",
  storageBucket: "entrega-final-coder-ce6aa.appspot.com",
  messagingSenderId: "680036630276",
  appId: "1:680036630276:web:2de4edb8c39f907a295a51"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)