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

let saveEmail = ""
let savePassward = ""

singup.addEventListener("click",() => {
  const emailValue = email.value
  const passwardValue = passward.value

  if (emailValue === "" || passwardValue === ""){
    alert("Write email & passward")
  }else{
    alert("Singup successfully")
    saveEmail = emailValue;
    savePassward = passwardValue; 
  }
})


const isSingup = false

login.addEventListener("click", () =>{
  const emailValue = email.value
  const passwardValue = passward.value
  if(emailValue === "" || passwardValue === ""){
    alert("You haven't entered email & passward.")
  }
  else if(emailValue === saveEmail && passwardValue === savePassward){
      alert("login successfully")
  }else{
    alert("Invalid email or passward")
    isSingup = true
}})

createUserWithEmailAndPassword(auth, email.value, passward.value,singup)
.then((res) => {
  alert(res);
 })
 .catch((err) => {
   console.log(err.message);
 });;   
