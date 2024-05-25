function chatWithStudents() {
    alert("Redirecting to chat with university students...");
    // Here you can redirect to the actual chat page
    // window.location.href = "chat.html";
}

function clearDoubts() {
    alert("Redirecting to AI doubt clearing...");
    // Here you can redirect to the actual AI doubt clearing page
    // window.location.href = "ai_doubt_clearing.html";
}

function accessStudyMaterials() {
    alert("Redirecting to study materials...");
    // Here you can redirect to the actual study materials page
    // window.location.href = "study_materials.html";
}

function viewAnnouncements() {
    alert("Redirecting to university announcements...");
    // Here you can redirect to the actual announcements page
    // window.location.href = "announcements.html";
}

function addTask() {
    const todoInput = document.getElementById('todo-input');
    const task = todoInput.value.trim();
    if (task) {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task} <button onclick="removeTask(this)">x</button>`;
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

document.getElementById('research-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('research-title').value.trim();
    const authors = document.getElementById('research-authors').value.trim();
    const fileInput = document.getElementById('research-file');
    const file = fileInput.files[0];
    if (title && authors && file) {
        alert(`Research Paper Submitted\nTitle: ${title}\nAuthors: ${authors}\nFile: ${file.name}`);
        document.getElementById('research-form').reset();
    } else {
        alert("Please fill out all fields and select a file.");
    }
});
