const authCheck = () => {
    const userUID = localStorage.getItem("uid")
    if (!userUID) {
        window.location.replace("./dashboard.html")
    }
}

var input = document.getElementById("input");
var notesParent = document.getElementById("notesParent");
var getValue = JSON.parse(localStorage.getItem("key"));

function addNote() {
    if (getValue === null) {
        getValue = [];
    }
    getValue.unshift(input.value);
    localStorage.setItem("key", JSON.stringify(getValue));
    displayNotes()
}

function displayNotes() {
    getValue = JSON.parse(localStorage.getItem("key"));
    var notes = "";
    for (i = 0; i < getValue.length; i++) {
        notes = notes + `<div class="notes">
                         <div class="notesText">
                             <p id="textOutput"> ${getValue[i]}</p>
                         </div>
                         
                         <div class=".icons-btn">
                             <button onclick="editNotes(this)" id = "${i}"><i class="fa-regular fa-pen-to-square"></i></button>
                            <button onclick="deleteNotes(this)" id = "${i}"><i class="fa-solid fa-trash"></i></button>
                         </div>
                     </div>`
    }
    notesParent.innerHTML = notes;

}



function deleteNotes(deleteButton) {
    getValue = JSON.parse(localStorage.getItem("key"));
    var indexToDelete = deleteButton.id;
    getValue.splice(indexToDelete, 1);
    console.log(indexToDelete)
    localStorage.setItem("key", JSON.stringify(getValue));
    displayNotes()
}

function editNotes(editButton) {
    getValue = JSON.parse(localStorage.getItem("key"));
    var indexToAdd = editButton.id;
    var editPromptNotes = prompt("Enter notes");
    getValue.splice(indexToAdd, 1, editPromptNotes);
    console.log(indexToAdd)

    localStorage.setItem("key", JSON.stringify(getValue));
    displayNotes()
}


window.authCheck = authCheck;
