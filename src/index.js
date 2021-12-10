// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth,
         createUserWithEmailAndPassword,
         signOut,
         signInWithEmailAndPassword,
         signInWithPopup,
         GoogleAuthProvider,
         onAuthStateChanged  
} from "firebase/auth";

import {htmlLoginForm, login_function} from './templets/login';
import { homeView } from './templets/home';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi3R5U5VO9eLXtZ8re8lqLle6Gc8wuI5A",
  authDomain: "techunico-hospital.firebaseapp.com",
  projectId: "techunico-hospital",
  storageBucket: "techunico-hospital.appspot.com",
  messagingSenderId: "827390999921",
  appId: "1:827390999921:web:87c4c4470490ffc1300ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Asigning the constents
const auth = getAuth();
const rootDiv = document.querySelector('#root');


//Login with google (for training only)

// const btnGoogleSignIn = document.querySelector('.google-login');
// const providerGoogle = new GoogleAuthProvider;
// btnGoogleSignIn.addEventListener('click', (e)=>{
//   signInWithPopup(auth, providerGoogle)
//     .then((user)=>{
//       console.log(user);
//     }).catch((err)=>{
//       console.log(err.message);
//     });
// })

onAuthStateChanged(auth, (user)=>{
  if(user){
    console.log('user states:',user);
    rootDiv.innerHTML = homeView;
    
  }else{
    rootDiv.innerHTML = htmlLoginForm;
    
    //Login User

    const loginForm = document.querySelector('.login')
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let email = loginForm.email.value;
      let passWord = loginForm.pass.value;
      console.log(email, passWord);
      signInWithEmailAndPassword(auth,email,passWord)
          .then(()=>{
          console.log('user loged in waiting to redirect');
          loginForm.reset();
          }).catch((err)=>{
          console.log(err.message);
          });
      });
  }
});




//REgister User (for training only)

/*
const signUpForm = document.querySelector('.register');
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = signUpForm.email.value;
  let passWord = signUpForm.pass.value;
  createUserWithEmailAndPassword(auth,email,passWord)
    .then((cred)=>{
      console.log(cred);
      console.log(cred.user);
      signUpForm.reset();
    })
    .catch((err)=>{
      console.log(err.message);
    });
})
*/
