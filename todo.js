// // Task class to represent individual tasks
// class Task {
//     constructor(description) {
//       this.description = description;
//       this.dateCreated = new Date();
//       this.completed = false;
//     }

//     markCompleted() {
//       this.completed = true;
//     }

//     toString() {
//       const status = this.completed ? "Completed" : "Pending";
//       return `${this.description} - ${status}`;
//     }
//   }

//   // TodoList class to manage the list of tasks
//   class TodoList {
//     constructor() {
//       this.tasks = [];
//     }

//     addTask(description) {
//       const task = new Task(description);
//       this.tasks.push(task);
//     }

//     markTaskCompleted(index) {
//       if (index >= 0 && index < this.tasks.length) {
//         const task = this.tasks[index];
//         task.markCompleted();
//       } else {
//         console.log("Invalid task index.");
//       }
//     }

//     displayTasks() {
//       if (this.tasks.length === 0) {
//         console.log("No tasks found.");
//       } else {
//         this.tasks.forEach((task, index) => {
//           console.log(`${index + 1}. ${task}`);
//         });
//       }
//     }
//   }

//   // Creating an instance of the TodoList
//   const todoList = new TodoList();

//   // Adding tasks to the list
//   todoList.addTask("Buy groceries");
//   todoList.addTask("Finish homework");
//   todoList.addTask("Go for a run");

//   // Marking a task as completed
//   todoList.markTaskCompleted(1);

//   // Displaying the tasks
//   todoList.displayTasks();

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Task class to represent individual tasks
// Task class to represent individual tasks
class Task {
  constructor(description) {
    this.description = description;
    this.dateCreated = new Date();
    this.completed = false;
  }

  markCompleted() {
    this.completed = !false;
  }

  getFormattedDate() {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return this.dateCreated.toLocaleDateString(undefined, options);
  }

  toString() {
    const status = this.completed ? "Completed" : "Pending";
    const dateCreated = this.getFormattedDate();
    return `${this.description} - ${status}`;
  }
}

// TodoList class to manage the list of tasks
class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = new Task(description);
    this.tasks.push(task);
  }

  markTaskCompleted(index) {
    if (index >= 0 && index < this.tasks.length) {
      const task = this.tasks[index];
      task.markCompleted();
    } else {
      console.log("Invalid task index.");
    }
  }

  displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.classList.add("task");

      const descriptionSpan = document.createElement("span");
      descriptionSpan.classList.add("task-description");
      descriptionSpan.textContent = task.toString();
      li.appendChild(descriptionSpan);

      const dateSpan = document.createElement("span");
      dateSpan.classList.add("task-date");
      dateSpan.textContent = task.getFormattedDate();
      li.appendChild(dateSpan);

      if (task.completed) {
        li.classList.add("completed");
      }

      li.addEventListener('click', () => {
        li.classList.toggle('completed');
        task.markCompleted();
      });

     

      taskList.appendChild(li);
    });
  }
}

// Creating an instance of the TodoList
const todoList = new TodoList();

// Function to add a task from the input field
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const description = taskInput.value.trim();

  if (description !== "") {
    todoList.addTask(description);
    todoList.displayTasks();
    taskInput.value = "";
  }
}

// Initial display of tasks
todoList.displayTasks();
