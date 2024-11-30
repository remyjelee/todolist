import { ProjectList } from './app.js';

const viewProjects = () => {
    updateHeader('Projects');
    clearContents();
    const contentsDiv = document.querySelector('.contents');

    const { projects } = ProjectList.instance;

    projects.forEach(project => {
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('projectItem');

        // Corner delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteButton');
        deleteBtn.innerHTML = 'X';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // stops other click event listener
            ProjectList.instance.deleteProject(project.id);
            transitionPageTo('projectList'); // refreshes page
        });
        projectDiv.appendChild(deleteBtn);

        // Project name
        let projectName = document.createElement('div');
        projectName.innerHTML = project.name;
        projectName.classList.add('itemTitle');
        projectDiv.appendChild(projectName);

        projectDiv.addEventListener('click', () => {
            transitionPageTo('project', project);
        });
        contentsDiv.appendChild(projectDiv);
    });

    // Form for adding a new project
    const projectFormDiv = document.createElement('div');
    projectFormDiv.classList.add('formContainer');
    projectFormDiv.innerHTML = `
        <button id="toggleProjectForm">+ Create Project</button>
        <form id="createProjectForm" style="display: none;">
            <input type="text" placeholder="New Project Name" id="newProjectName" required />
            <button type="submit">Create</button>
        </form>
    `;
    contentsDiv.appendChild(projectFormDiv);

    document.getElementById('toggleProjectForm').addEventListener('click', () => {
        const form = document.getElementById('createProjectForm');
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('createProjectForm').addEventListener('submit', (e) => {
        e.preventDefault(); // stops it from sending it to server.
        const newProjectName = document.getElementById('newProjectName').value.trim();
        if (newProjectName) {
            ProjectList.instance.addProject(newProjectName);
            transitionPageTo('projectList');
        }
    });
};

const updateHeader = newHeader => {
    const headerDiv = document.querySelector('.header');
    headerDiv.innerHTML = newHeader;
};

const openProject = (project) => {
    updateHeader(project.name);
    clearContents();
    const contentsDiv = document.querySelector('.contents');

    // "Back" button at the top
    const goBackBtn = document.createElement('button');
    goBackBtn.classList.add('backButton');
    goBackBtn.innerHTML = '< Back';
    goBackBtn.addEventListener('click', () => transitionPageTo('projectList'));
    contentsDiv.appendChild(goBackBtn);

    const { todos } = project;
    todos.forEach(todo => {
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todoItem');

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteButton');
        deleteBtn.innerHTML = 'X';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            project.deleteTodo(todo.id);
            transitionPageTo('project', project);
        });
        todoDiv.appendChild(deleteBtn);

        // Title
        let todoTitle = document.createElement('div');
        todoTitle.innerHTML = todo.title;
        todoTitle.classList.add('itemTitle');
        todoDiv.appendChild(todoTitle);

        // Checkbox and priority
        let statusWrapper = document.createElement('div');
        statusWrapper.classList.add('statusWrapper');

        let status = document.createElement('input');
        status.type = 'checkbox';
        status.checked = todo.completed;
        status.classList.add('todoCheckbox');

        // Fix: Update completion status on checkbox change
        status.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the todoDiv click event
            todo.completed = status.checked; // Update the completion status
            transitionPageTo('project', project); // Reload project view to reflect changes
        });

        let priority = document.createElement('span');
        priority.innerHTML = `Priority: ${todo.priority}`;
        priority.classList.add('todoPriority');

        statusWrapper.appendChild(status);
        statusWrapper.appendChild(priority);
        todoDiv.appendChild(statusWrapper);

        // Due date
        let todoDueDate = document.createElement('div');
        todoDueDate.innerHTML = todo.dueDate.toDateString();
        todoDueDate.classList.add('todoDueDate');
        todoDiv.appendChild(todoDueDate);

        todoDiv.addEventListener('click', () => {
            transitionPageTo('todo', project, todo);
        });
        contentsDiv.appendChild(todoDiv);
    });

    // Form for adding a new Todo
    const todoFormDiv = document.createElement('div');
    todoFormDiv.classList.add('formContainer');
    todoFormDiv.innerHTML = `
        <button id="toggleTodoForm">+ Create Todo</button>
        <form id="createTodoForm" style="display: none;">
            <label for="todoTitle">Title</label>
            <input type="text" id="todoTitle" required />
            <label for="todoDescription">Description</label>
            <textarea id="todoDescription"></textarea>
            <label for="todoDueDate">Due Date</label>
            <input type="date" id="todoDueDate" required />
            <label for="todoPriority">Priority</label>
            <select id="todoPriority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit">Create</button>
        </form>
    `;
    contentsDiv.appendChild(todoFormDiv);

    document.getElementById('toggleTodoForm').addEventListener('click', () => {
        const form = document.getElementById('createTodoForm');
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('createTodoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('todoTitle').value.trim();
        const description = document.getElementById('todoDescription').value.trim();
        const dueDate = document.getElementById('todoDueDate').value;
        const priority = document.getElementById('todoPriority').value;
        if (title && dueDate) {
            project.addTodo({
                title,
                description,
                dueDate,
                priority,
            });
            transitionPageTo('project', project);
        }
    });
};

function viewTodo(project, todo) {
    updateHeader(todo.title);
    clearContents();
    const contentsDiv = document.querySelector('.contents');

    // "Back" button at the top
    const goBackBtn = document.createElement('button');
    goBackBtn.classList.add('backButton');
    goBackBtn.innerHTML = `< ${project.name}`;
    goBackBtn.addEventListener('click', () => transitionPageTo('project', project));
    contentsDiv.appendChild(goBackBtn);

    // Attractive styling for Todo details
    const todoDetailsDiv = document.createElement('div');
    todoDetailsDiv.classList.add('todoDetails');
    const daysUntilDue = todo.daysUntilDue > 0 
        ? `${todo.daysUntilDue} days` 
        : todo.daysUntilDue === 0 
        ? 'Due today!' 
        : 'Overdue!';

    todoDetailsDiv.innerHTML = `
        <div class="todoDetailRow"><strong>Description:</strong> ${todo.description || 'No description provided.'}</div>
        <div class="todoDetailRow"><strong>Due Date:</strong> ${todo.dueDate.toDateString()}</div>
        <div class="todoDetailRow"><strong>Days Until Due:</strong> ${daysUntilDue}</div>
        <div class="todoDetailRow"><strong>Status:</strong> ${todo.completed ? 'Completed' : 'Incomplete'}</div>
    `;
    contentsDiv.appendChild(todoDetailsDiv);

    // Edit button
    const editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.innerHTML = 'Edit Todo';
    editButton.addEventListener('click', () => showEditForm(project, todo));
    contentsDiv.appendChild(editButton);
}

function showEditForm(project, todo) {
    clearContents();
    const contentsDiv = document.querySelector('.contents');

    // "Back" button
    const goBackBtn = document.createElement('button');
    goBackBtn.classList.add('backButton');
    goBackBtn.innerHTML = '< Back';
    goBackBtn.addEventListener('click', () => viewTodo(project, todo));
    contentsDiv.appendChild(goBackBtn);

    // Edit form
    const editForm = document.createElement('form');
    editForm.classList.add('editTodoForm');
    editForm.innerHTML = `
        <div>
            <label for="editTodoTitle">Title</label>
            <input type="text" id="editTodoTitle" value="${todo.title}" required />
        </div>
        <div>
            <label for="editTodoDescription">Description</label>
            <textarea id="editTodoDescription">${todo.description || ''}</textarea>
        </div>
        <div>
            <label for="editTodoDueDate">Due Date</label>
            <input type="date" id="editTodoDueDate" value="${todo.dueDate.toISOString().split('T')[0]}" required />
        </div>
        <div>
            <label for="editTodoPriority">Priority</label>
            <select id="editTodoPriority">
                <option value="High" ${todo.priority === 'High' ? 'selected' : ''}>High</option>
                <option value="Medium" ${todo.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                <option value="Low" ${todo.priority === 'Low' ? 'selected' : ''}>Low</option>
            </select>
        </div>
        <button type="submit">Save Changes</button>
    `;

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTitle = document.getElementById('editTodoTitle').value.trim();
        const newDescription = document.getElementById('editTodoDescription').value.trim();
        const newDueDate = document.getElementById('editTodoDueDate').value;
        const newPriority = document.getElementById('editTodoPriority').value;

        if (newTitle && newDueDate) {
            // Update the todo
            todo.title = newTitle;
            todo.description = newDescription;
            todo.dueDate = new Date(newDueDate);
            todo.priority = newPriority;

            // Reload the details page
            viewTodo(project, todo);
        }
    });

    contentsDiv.appendChild(editForm);
}




function clearContents() {
    const contentsDiv = document.querySelector('.contents');
    contentsDiv.innerHTML = '';
}

export function transitionPageTo(type, project, todo) {
    switch (type) {
        case 'projectList':
            viewProjects();
            break;
        case 'project':
            openProject(project);
            break;
        case 'todo':
            viewTodo(project, todo);
            break;
        default:
            console.log('Error: Invalid transition type.');
    }
}
