const tasks = [];
const completedTasks = [];
let completedTaskCount = 0;

function showTask() {
  if (tasks.length !== 0) {
    for (let i = 0; i < tasks.length; i++) {
      console.log(Object.values(tasks[i]));
    }
  } else {
    console.log("Задачи отсутствуют");
  }
}

function setTask(title, description, isCompleted) {
  tasks.push({
    title,
    description,
    isCompleted,
    createdDate: new Date(),
    completedDate: null,
  });
  return tasks;
}

function completeTask(index) {
  tasks[index].isCompleted = true;
  tasks[index].completedDate = new Date();
  completedTaskCount += 1;
  completedTasks.push(tasks[index]);
  deleteTask(index);
}

function deleteTask(index) {
  if (tasks[index].isCompleted === true) {
    tasks.splice(index, 1);
  } else {
    const answer = prompt("Таска еще не выполнена, удалить?");
    if (answer === "Да" || answer === "да") {
      tasks.splice(index, 1);
    }
  }
}
