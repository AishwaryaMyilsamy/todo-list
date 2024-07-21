document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        if (confirm('Do you want to delete this task?')) {
            e.target.remove();
        }
    }
});
