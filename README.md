# 📝 OOP JavaScript To-Do List + Theme Toggler

A simple To-Do List app refactored from procedural JS to **OOP (ES6 classes)**. Includes a theme toggler (light/dark) and saves tasks in LocalStorage.

## 🌐 Live Demo
[Try it here](https://newton2n.github.io/Todo-List/)

## Features
- Add, delete, and check tasks
- Persist tasks with LocalStorage
- Switch themes dynamically
- Modular OOP structure for easier reuse

## Usage
```javascript
import TodoCreate from './script.js';
import ThemeToggler from './themeToggle.js';

const myTodo = new TodoCreate(".task_input", ".submit", ".items", "items1");

const DarkTheme = new ThemeToggler(".theme_button", "dark", ".lightIcon", ".darkIcon");
DarkTheme.fireTheme();
