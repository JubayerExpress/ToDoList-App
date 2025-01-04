document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
    const taskStats = document.getElementById("task-stats");

    // Request notification permission when the page loads
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }

    // Load tasks from localStorage
    loadTasks();

    // Add task
    addButton.addEventListener("click", () => {
        if (taskInput.value.trim() !== "") {
            const taskText = taskInput.value;
            const dueDate = document.getElementById("due-date").value;
            const category = document.getElementById("category").value;
            addTaskToList(taskText, false, dueDate, category);
            saveTasks();
            taskInput.value = "";
            document.getElementById("due-date").value = "";
        }
    });

    // Toggle dark mode
    toggleDarkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.querySelector(".container").classList.toggle("dark-mode");
    });

    // Add task to the list
    function addTaskToList(taskText, completed = false, dueDate = null, category = "General") {
        const li = document.createElement("li");
        const taskContent = document.createElement("span");
        taskContent.textContent = `${taskText} [${category}]`;

        // Add due date if available
        if (dueDate) {
            const dueDateElement = document.createElement("span");
            dueDateElement.classList.add("due-date");
            dueDateElement.textContent = `Due: ${dueDate}`;
            li.appendChild(dueDateElement);

            const dueDateObj = new Date(dueDate);
            const today = new Date();
            if (dueDateObj < today && !completed) {
                li.classList.add("overdue");
            }

            // Check for notifications
            checkForNotification(dueDateObj);
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => {
            li.remove();
            saveTasks();
        });

        taskContent.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTasks();
        });

        li.appendChild(taskContent);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#task-list li").forEach((li) => {
            const taskText = li.querySelector("span").textContent;
            const completed = li.classList.contains("completed");
            const dueDate = li.querySelector(".due-date") ? li.querySelector(".due-date").textContent.replace("Due: ", "") : null;
            const category = taskText.split("[").pop().split("]")[0];
            tasks.push({ taskText, completed, dueDate, category });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateStats();
    }

    // Load tasks from localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            tasks.forEach((task) => {
                addTaskToList(task.taskText, task.completed, task.dueDate, task.category);
            });
        }
    }

    // Update task stats
    function updateStats() {
        const totalTasks = document.querySelectorAll("#task-list li").length;
        const completedTasks = document.querySelectorAll("#task-list li.completed").length;
        const pendingTasks = totalTasks - completedTasks;
        const overdueTasks = document.querySelectorAll("#task-list li.overdue").length;

        taskStats.innerHTML = `Total Tasks: ${totalTasks} | Completed: ${completedTasks} | Pending: ${pendingTasks} | Overdue: ${overdueTasks}`;
    }

    // Check if a task is due for notification
    function checkForNotification(dueDateObj) {
        const now = new Date();
        const timeDifference = dueDateObj - now;

        // If the task is due in 5 hours, send a notification
        if (timeDifference > 0 && timeDifference <= 5 * 60 * 60 * 1000) {
            setTimeout(() => {
                if (Notification.permission === "granted") {
                    new Notification("Reminder: Task is due in less than 5 hours!");
                }
            }, timeDifference);
        }
    }
});
