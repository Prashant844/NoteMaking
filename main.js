const NoteContainer = document.querySelector('.content-box'),
    SetNewNote = document.querySelector('.adding_box'),
    popupModal = document.querySelector('.overlay'),
    inputField = document.querySelector("input"),
    textarea = document.querySelector("textarea"),
    ClosePopUpModal = document.querySelector('.popup-modal'),
    AddNewNote = document.querySelector('.popup-modal'),
    CurrentDate = new Date().toLocaleDateString(),
    AddButton = document.querySelector('.Add-note');
    popupHeadline = document.querySelector(".popup-modal header > span");
    edit = document.querySelector("#edit"),
    remove = document.querySelector("#delete"),

    SetNewNote.addEventListener('click', openPopup);
function openPopup() {
    popupModal.style.display = 'flex';
}
ClosePopUpModal.addEventListener('click', function (event) {
    if (event.target.classList.contains("close")) {
        popupModal.style.display = 'none';
        AddButton.innerText = "Add Note";
        popupHeadline.innerText = "Add a New Note";
        inputField.value = "";
        textarea.value = "";
    }
});
AddNewNote.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.classList.contains("Add-note")) {
        var NewItem = document.createElement('div');
        NewItem.setAttribute("class", "new-content");
        let NoteTitle = inputField.value,
            NoteDesc = textarea.value;
        NewItem.innerHTML = `<h3>${NoteTitle}</h3>
    <p>${NoteDesc}
    </p>
    <footer>
    <span>${CurrentDate}</span>
    <div class="action">
        <ion-icon name="pencil-outline" id="edit"></ion-icon>
        <ion-icon name="trash-bin-outline" id="delete"></ion-icon>
    </div>
    </footer>`;
        NoteContainer.appendChild(NewItem);
        inputField.value = "",
        textarea.value = "";
        AddButton.innerText = "Add Note";
        popupHeadline.innerText = "Add a New Note";
        popupModal.style.display = 'none';
    }
});

NoteContainer.addEventListener('click', (trigger) => {
    if (trigger.target.getAttribute("id") == "edit") {
        popupModal.style.display = 'flex';
        inputField.value = trigger.target.parentNode.parentNode.parentNode.firstChild.textContent;
        textarea.value = trigger.target.parentNode.parentNode.parentNode.firstChild.nextElementSibling.textContent;
        AddButton.innerText = "Update Note";
        AddButton.style.textTransform = "UpperCase";
        popupHeadline.innerText = "Update Note";
    }
    if (trigger.target.getAttribute("id") == "delete") {
        trigger.target.parentNode.parentNode.parentNode.remove();
    }
});

