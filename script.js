function chatWithStudents() {
    window.location.href = "chat.html"; // Redirect to chat.html
}

function clearDoubts() {
    window.location.href = "clear_doubts.html"; // Placeholder for clear doubts page
}

function accessStudyMaterials() {
    window.location.href = "study_materials.html"; // Placeholder for study materials page
}

function viewAnnouncements() {
    window.location.href = "announcements.html"; // Placeholder for announcements page
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
