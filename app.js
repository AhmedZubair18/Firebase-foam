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
const signup = document.getElementById("signup")
const login = document.getElementById("login")

let saveEmail = ""
let savePassward = ""
let isSignup = false
let isLogin = false

signup.addEventListener("click",() => {
  const emailValue = email.value
  const passwardValue = passward.value

  if (emailValue === "" || passwardValue === ""){
    alert("write email & passward")
  }
  else if (isSignup) {
    alert("Already signed up with a different email.")}
    else{
    alert("Singup successfully")
    saveEmail = emailValue;
    savePassward = passwardValue; 
    isLogin = false
    isSignup = true
  
}
})




login.addEventListener("click", () =>{
  const emailValue = email.value
  const passwardValue = passward.value
  if(emailValue === "" || passwardValue === ""){
    alert("You haven't entered email & passward.")
  }
  else if(emailValue === saveEmail && passwardValue === savePassward){
      if(isLogin){
        alert("already login")
      }
  else{
    alert("login successfully")
    isSignup = true
    isLogin = true
}}else{
  alert("Invalid email & passward")
}
})

createUserWithEmailAndPassword(auth, email.value, passward.value,signup)
.then((res) => {
  alert(res);
 })
 .catch((err) => {
   console.log(err.message);
 });;   