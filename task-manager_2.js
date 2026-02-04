const tasks = [];
const completedTasks = [];
let completedTaskCount = 0;

function showTasks() {
  if (!tasks.length) {
    console.log("Задачи отсутствуют");
    return;
  }

  tasks.forEach((task, index) => {
    console.log(
      `Задача №${index + 1} | ` +
        `Название: ${task.title}, ` +
        `Описание: ${task.description}, ` +
        `Статус: ${task.isCompleted ? "Выполнено" : "В работе"}, ` +
        `Создана: ${task.createdDate}, ` +
        `Завершена: ${task.completedDate ? task.completedDate : "-"}`,
    );
  });
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
  let task = tasks[index];
  if (task) {
    task.isCompleted = true;
    task.completedDate = new Date().toLocaleDateString();
    completedTaskCount += 1;
    completedTasks.push(task);
    deleteTask(index);
    return;
  }
  console.log("Нет задачи под этим номером!");
}

function allowDeletingTask(index) {
  const answer = prompt("Таска еще не выполнена, удалить?");
  if (answer === "Да" || answer === "да") {
    tasks.splice(index, 1);
  }
}

function deleteTask(index) {
  let task = tasks[index];
  if (task) {
    if (task.isCompleted === true) {
      tasks.splice(index, 1);
    } else {
      allowDeletingTask(index);
    }
    return;
  }
  console.log("Нет задачи под этим номером!");
}

function clearTasks() {
  if (!tasks.length) {
    console.log("Нет текущих задач");
    return;
  }
  tasks.length = 0;
}


