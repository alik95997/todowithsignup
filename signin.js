import { app, auth, signInWithEmailAndPassword } from "./firebase.js"
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinForm = document.querySelector("#signinForm");
const signin = async (event) => {
    event.preventDefault();
    try {
        const response = await signInWithEmailAndPassword(auth, email.value, password.value);
        alert("Login succesfully");
        console.log()
        window.location.replace("./todo.html")
    } catch (error) {
        console.log(error.message)
        
    }

}
signinForm.addEventListener("submit", signin)
signinForm.addEventListener("touchstart", signin)
