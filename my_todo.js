// var task=document.getElementById('task');
// var li=document.getElementById('li')

// function displayTask(e){

// console.log(task.value);
//  var taskText=task.value.trim();
// li.textContent=taskText;
// var taskList=document.getElementById()

// if(taskText != ''){
//     var listItem=document.createElement('li');
//     taskList.contentText=taskText;
//     taskList.appendChild(listItem);
//     task.value=''
// }else{
//   alert('please enter value');
// }
function displayTask() {
    // Get the input elements for task and due date
    var taskInput = document.getElementById('task');
    var dueDateInput = document.getElementById('dueDate');

    // Get the values entered by the user
    var taskText = taskInput.value.trim();
    var dueDate = dueDateInput.value;

    // Get the current date and time
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleString();

    // Get the <ol> elements for pending and completed tasks
    var pendingTasksList = document.getElementById('pendingTasks');
    var completedTasksList = document.getElementById('completedTasks');

    if (taskText !== '' && dueDate !== '') {
      // Create a new <li> element to hold the task text, due date, and creation time
      var listItem = document.createElement('li');
      listItem.textContent = taskText + ' (Due: ' + dueDate + ', Created: ' + formattedDate + ')';

      // Create a button to mark the task as completed
      var completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.onclick = function () {
        // Move the completed task to the completed tasks list
        completedTasksList.appendChild(listItem);
        listItem.removeChild(completeButton); // Remove the complete button
      };

      // Append the complete button to the task
      listItem.appendChild(completeButton);

      // Append the new <li> element to the pending tasks list
      pendingTasksList.appendChild(listItem);

      // Clear the input fields
      taskInput.value = '';
      dueDateInput.value = '';
    } else {
      // Display an alert or handle empty task input or due date
      alert('Please enter a task and a due date.');
    }
  }