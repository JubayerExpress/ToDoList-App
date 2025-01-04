# To-Do List App

## Description
A simple web-based To-Do List application that allows users to add, edit, delete, and mark tasks as complete. The app uses local storage to persist data, ensuring that tasks are saved across browser sessions.

## Features
- Add new tasks to the list.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as complete.
- Task data persists using browser's local storage.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Persistence**: Local Storage (optional)

## Demo
This app is deployed and live on Netlify. Check it out [(https://my-todolist24.netlify.app/)](#).

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/todo-list-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd todo-list-app
    ```

3. Open `index.html` in your browser to run the app locally:
    ```bash
    open index.html
    ```

## Usage
1. **Add a Task**: Use the input field to add new tasks to your to-do list.
2. **Edit a Task**: Click the edit button beside any task to modify the task name.
3. **Delete a Task**: Click the delete button to remove the task from the list.
4. **Mark as Complete**: Click the checkbox to mark tasks as complete. Completed tasks will be visually differentiated.
5. **Persistent Data**: Your tasks will remain stored in the browser's local storage, so they will persist even after reloading the page.

## Code Structure

- **HTML**: Contains the basic structure of the app, including the form input field, submit button, and task list container.
- **CSS**: Handles the styling and layout of the app.
- **JavaScript**: Provides the interactivity, including adding, editing, deleting, and marking tasks, as well as managing local storage.

### Main Files:
- `index.html`: The main HTML file for the app structure.
- `style.css`: The stylesheet for the app.
- `script.js`: The JavaScript file that handles all app functionality.

## Steps to Create

1. **Setup Basic HTML**: Created a simple HTML page with a form input and a button for submitting tasks.
2. **JavaScript Functionality**:
   - Captured user input and displayed tasks on the page.
   - Added the ability to mark tasks as complete, edit them, and delete them.
   - Stored tasks in local storage to persist across reloads.
3. **CSS Styling** (Optional): Enhanced the look and feel of the app using custom styles in CSS.

## Local Storage
The app uses the browser's local storage to persist tasks across page reloads. When tasks are added, edited, or deleted, they are also updated in local storage, ensuring that users don't lose their data.

## Deployment
This project is deployed on Netlify. To deploy your own version, follow these steps:
1. Create a new repository on GitHub and push your code.
2. Connect your GitHub repository to Netlify.
3. Deploy your app using Netlify's continuous deployment.

## Contribution

Feel free to fork this project, create a pull request, or open issues for feature requests and bugs. Contributions are welcome!

## License
This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements
- Local Storage for persistence
- JavaScript for interactivity

