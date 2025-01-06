import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from "./firebase.js";  // Ensure correct import path

// Selecting elements
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const signupForm = document.querySelector("#signupForm");

const signup = async (event) => {
    event.preventDefault();


    if (password.value !== cpassword.value) {
        alert("Passwords do not match.");
        return;
    }
    try {
        const response = await createUserWithEmailAndPassword(auth, email.value, password.value);
        await setDoc(doc(db, "user", response.user.uid), {
            firstName: name.value,
            email: email.value
        });
        alert("account created successfully")
        window.location.replace("./index.html")
    } catch (error) {
        console.error("Error:", error);
    }
};

signupForm.addEventListener("submit", signup);
signupForm.addEventListener("touchstart", signup);
