import { auth, signInWithEmailAndPassword } from "./firebase.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinForm = document.querySelector("#signinForm");

const signin = async (event) => {
    event.preventDefault(); // Prevent form from submitting the default way.

    try {
        const response = await signInWithEmailAndPassword(auth, email.value, password.value);
        const uid = response.user.uid;
        localStorage.setItem("uid", uid);
        alert("Login successful!");
        console.log("User Info:", response.user);
        window.location.replace("./todo.html");
    } catch (error) {
        console.error("Error:", error.message); // Log a meaningful error message
        alert(`Error: ${error.code} - ${error.message}`);
    }
};

const authCheck = () => {
    const userUID = localStorage.getItem("uid")
    if (userUID) {
        window.location.replace("./dashboard.html")
    }
}

signinForm.addEventListener("submit", signin);
window.authCheck = authCheck;
