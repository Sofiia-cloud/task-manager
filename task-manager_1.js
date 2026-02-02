let task = "";
let completedTaskCount = 0;

function showTask() {
  if (task) {
    console.log(task);
  } else {
    console.log("Задача отсутствует");
  }
}

function setTask(taskDescription) {
  if (task) {
    console.log("Не могу добавить задачу, завершите или удалите предыдущую");
  } else {
    task = taskDescription;
    return task;
  }
}

function completeTask() {
  if (task) {
    task = "";
    completedTaskCount += 1;
  } else {
    console.log("Нет текущей задачи");
  }
}

function deleteTask() {
  if (task) {
    task = "";
  } else {
    console.log("Нет текущей задачи");
  }
}
