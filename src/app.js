import { transitionPageTo } from './dom.js';
import { v4 } from 'uuid';

export function startApp() {
    new ProjectList();
    transitionPageTo('projectList');
}

export class Todo {
    constructor(title, description, dueDate, priority) {
        this.id = v4();
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate); // Ensure the dueDate is stored as a Date object
        this.priority = priority;
        this.completed = false;
    }

    get daysUntilDue() {
        const today = new Date();
        const diffTime = this.dueDate - today;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    set priority(value) {
        if (["High", "Medium", "Low"].includes(value)) {
            this._priority = value;
        } else {
            throw new Error("Invalid priority value.");
        }
    }

    get priority() {
        return this._priority;
    }

    update({ title, description, dueDate, priority }) {
        if (title) this.title = title;
        if (description) this.description = description;
        if (dueDate) this.dueDate = new Date(dueDate);
        if (priority) this.priority = priority;
    }

    markAsComplete() {
        this.completed = true;
    }

    markAsIncomplete() {
        this.completed = false;
    }

    isOverdue() {
        const today = new Date();
        return !this.completed && this.dueDate < today;
    }
}

export class Project {
    constructor(name) {
        this.id = v4();
        this.name = name;
        this.todos = [];
    }

    addTodo({ title, description, dueDate, priority }) {
        const newTodo = new Todo(title, description, dueDate, priority);
        this.todos.push(newTodo);
    }

    deleteTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            console.log(`Todo with ID ${id} deleted.`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
}

export class ProjectList {
    static instance;

    constructor() {
        if (ProjectList.instance) {
            return ProjectList.instance;
        }

        this.projects = [];
        ProjectList.instance = this;

        const defaultProject = new Project("My Project");
        this.projects.push(defaultProject);
        console.log(`Default project "My Project" created.`);
    }

    addProject(name) {
        if (this.projects.some(project => project.name === name)) {
            console.log(`Project "${name}" already exists.`);
            return;
        }

        const newProject = new Project(name);
        this.projects.push(newProject);
        console.log(`Project "${name}" added.`);
    }

    deleteProject(id) {
        const index = this.projects.findIndex(project => project.id === id);
        if (index !== -1) {
            const removed = this.projects.splice(index, 1);
            console.log(`Project "${removed[0].name}" deleted.`);
        } else {
            console.log(`Project with ID "${id}" not found.`);
        }
    }

    getProject(name) {
        return this.projects.find(project => project.name === name) || null;
    }

    listProjects() {
        console.log("Projects:");
        this.projects.forEach((project, index) => {
            console.log(`${index + 1}. ${project.name}`);
        });
    }
}
