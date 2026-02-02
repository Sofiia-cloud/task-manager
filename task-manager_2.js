const tasks = [];
const completedTasks = [];
let completedTaskCount = 0;

function showTask() {
  if (tasks.length !== 0) {
    tasks.forEach((element) => {
      console.log(
        `Название задачи: ${element.title}, описание: ${element.description}, выполнено: ${element.isCompleted}, дата создания:${element.createdDate}, дата выполнения: ${element.completedDate}`,
      );
    });
  } else {
    console.log("Задачи отсутствуют");
  }
}

function setTask(title, description, isCompleted) {
  tasks.push({
    title,
    description,
    isCompleted,
    createdDate: new Date().toLocaleDateString(),
    completedDate: null,
  });
  return tasks;
}

function completeTask(index) {
  if (tasks[index]) {
    tasks[index].isCompleted = true;
    tasks[index].completedDate = new Date().toLocaleDateString();
    completedTaskCount += 1;
    completedTasks.push(tasks[index]);
    deleteTask(index);
  } else {
    console.log("Нет задачи под этим номером!");
  }
}

function deleteTask(index) {
  if (tasks[index]) {
    if (tasks[index].isCompleted === true) {
      tasks.splice(index, 1);
    } else {
      const answer = prompt("Таска еще не выполнена, удалить?");
      if (answer === "Да" || answer === "да") {
        tasks.splice(index, 1);
      }
    }
  } else {
    console.log("Нет задачи под этим номером!");
  }
}

function clearTasks() {
  if (tasks.length !== 0) {
    tasks.splice(0);
  } else {
    console.log("Нет текущих задач");
  }
}
