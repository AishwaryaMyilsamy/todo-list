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
// Load tasks from local storage
window.addEventListener('load', function() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);
    });
});

// Save tasks to local storage
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);

        tasks.push({ text: taskInput.value, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = '';
    }
});

// Toggle task completion
document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
        const tasks = Array.from(document.getElementById('taskList').children).map(li => ({
            text: li.textContent,
            completed: li.classList.contains('completed')
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
