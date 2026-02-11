const tasks = [];

const completedTasks = [];
let completedTaskCount = 0;

function showTasks() {
  if (!tasks.length) {
    console.log("Задачи отсутствуют");
    return;
  }

  tasks.forEach(
    (
      { title, description, isCompleted, createdDate, completedDate },
      index,
    ) => {
      console.log(
        `Задача №${index + 1} | ` +
          `Название: ${title}, ` +
          `Описание: ${description}, ` +
          `Статус: ${isCompleted ? "Выполнено" : "В работе"}, ` +
          `Создана: ${createdDate}, ` +
          `Завершена: ${completedDate ? completedDate : "-"}`,
      );
    },
  );
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

function getTaskDescriptions() {
  let tasks_descriptions = new Map();
  if (!tasks.length) {
    console.log("Задачи отсутствуют");
    return;
  }

  tasks.forEach((task) => {
    tasks_descriptions.set(task.title, task.description);
  });
  return tasks_descriptions;
}

function getLongTasks() {
  if (!tasks.length) {
    console.log("Задачи отсутствуют");
    return;
  }
  let long_tasks = tasks.filter((task) => task.title.length >= 10);
  return long_tasks;
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

function allowDeletingTask() {
  const answer = prompt("Таска еще не выполнена, удалить?");
  if (answer === "Да" || answer === "да") {
    return true;
  }
  return false;
}

function deleteTask(index) {
  let task = tasks[index];
  if (!task) {
    console.log("Нет задачи под этим номером!");
    return;
  }

  if (task.isCompleted || allowDeletingTask()) {
    tasks.splice(index, 1);
  } else {
    console.log("Отмена удаления");
  }
}

function clearTasks() {
  if (!tasks.length) {
    console.log("Нет текущих задач");
    return;
  }
  tasks.length = 0;
}

function getTasksByDateRange(startDate, endDate, isCompleted) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (!tasks.length) {
    console.log("Нет текущих задач");
    return;
  }
  let filtered_tasks = tasks.filter((task) => {
    if (isCompleted && isCompleted !== task.isCompleted) {
      return false;
    }
    const startDateRange = task.createdDate >= start && task.createdDate <= end;
    const endDateRange = isCompleted
      ? task.completedDate >= start && task.completedDate <= end
      : false;
    return startDateRange || endDateRange;
  });
  return filtered_tasks;
}

function clearShortTasks() {
  if (!tasks.length) {
    console.log("Нет текущих задач");
    return;
  }
  let short_tasks = tasks.filter((task) => task.title.length >= 5);
  tasks.length = 0;
  tasks.push(...short_tasks);
  return tasks;
}

function updateTaskTitle(index, newTitle) {
  if (index >= tasks.length) {
    console.log("Нет задачи под таким номером");
    return;
  }
  tasks[index].title = newTitle;
  return tasks;
}
