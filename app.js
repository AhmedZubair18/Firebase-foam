import { initializeApp  } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js'
import{
    getAuth,
    createUserWithEmailAndPassword

}from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"


const firebaseConfig = {
    apiKey: "AIzaSyCACWJMivE8rmWa3Y9Q7TGUd96iVid7JaI",
    authDomain: "ahmedzubair-eb534.firebaseapp.com",
    projectId: "ahmedzubair-eb534",
    storageBucket: "ahmedzubair-eb534.appspot.com",
    messagingSenderId: "89123086091",
    appId: "1:89123086091:web:88214e9540108d0ba38c0e",
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const email = document.getElementById("email")
const passward = document.getElementById("passward")
const singup = document.getElementById("singup")
const login = document.getElementById("login")

singup.addEventListener("click",() => {
alert("singup successful")
})
login.addEventListener("click", () =>{
  alert("login successful")
})
createUserWithEmailAndPassword(auth, email.value, passward.value,singup)
.then((res) => {
  alert(res);
 })
 .catch((err) => {
   console.log(err.message);
 });;   
