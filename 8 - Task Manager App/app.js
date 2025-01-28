// Select DOM elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", loadTodos);

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// Add a new task
function addTodo(e) {
  e.preventDefault();

  if (todoInput.value === "") return; // Prevent adding empty tasks

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  // Create Edit Button
  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.innerHTML = `<i class="fas fa-edit"></i>`;
  todoDiv.appendChild(editButton);

  // Create Complete Button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completeButton);

  // Create Delete Button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);

  // Append to the list
  todoList.appendChild(todoDiv);

  // Save to localStorage
  saveTodoToLocalStorage(todoInput.value);

  // Clear input
  todoInput.value = "";
}

// Delete or complete task
function deleteOrCompleteTodo(e) {
  const targetBtn = e.target;

  // Delete task
  if (targetBtn.classList.contains("trash-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.add("fall");
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
      removeFromLocalStorage(todoDiv);
    });
  }

  // Mark task as completed
  if (targetBtn.classList.contains("complete-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.toggle("completed");
  }

  // Edit task
  if (targetBtn.classList.contains("edit-btn")) {
    const todoDiv = targetBtn.parentElement;
    const newTask = prompt(
      "Edit task:",
      todoDiv.querySelector(".todo-item").innerText
    );
    if (newTask && newTask !== todoDiv.querySelector(".todo-item").innerText) {
      todoDiv.querySelector(".todo-item").innerText = newTask;
      updateLocalStorage(todoDiv);
    }
  }
}

// Save tasks to localStorage
function saveTodoToLocalStorage(task) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Remove task from localStorage
function removeFromLocalStorage(todoDiv) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoText = todoDiv.querySelector(".todo-item").innerText;
  todos = todos.filter((todo) => todo !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Update task in localStorage after edit
function updateLocalStorage(todoDiv) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const updatedTask = todoDiv.querySelector(".todo-item").innerText;
  const index = todos.findIndex((todo) => todo === updatedTask);
  todos[index] = updatedTask;
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Load tasks from localStorage
function loadTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((task) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = task;
    todoDiv.appendChild(newTodo);

    // Create Complete Button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completeButton);

    // Create Delete Button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);

    // Append to the list
    todoList.appendChild(todoDiv);
  });
}

// Filter tasks
function filterTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      todo.style.display = "flex";
    } else if (filterValue === "completed") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    } else if (filterValue === "uncompleted") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "none";
      } else {
        todo.style.display = "flex";
      }
    }
  });
}
