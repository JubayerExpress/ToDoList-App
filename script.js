// Get references to elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to create a new task item
function createTaskItem(taskText) {
    // Create list item
    const li = document.createElement('li');
    li.classList.add('task-item');
    
    // Add task text
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    // Mark task as complete when clicked
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Delete task when the delete button is clicked
    li.querySelector('.delete-btn').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent marking as complete when deleting
        li.remove();
    });
    
    // Append to the task list
    taskList.appendChild(li);
}

// Add task when button is clicked
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        createTaskItem(taskText);
        taskInput.value = ''; // Clear input after adding task
    }
});

// Optionally, add task by pressing 'Enter' key
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});
