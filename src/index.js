import {
  saveAndRender,
  clearElement,
  createList,
  getPriority,
} from "./addListUtils";
import { toggleAddTaskForm } from "./toggleAddTaskModal";
import toggleSidebar from "./toggleSidebar";
import {
  format,
  formatDistanceStrict,
  isToday,
  isSameWeek,
  isSameMonth,
  isSameYear,
} from "date-fns";
import "./styles/styles.scss";

const listsContainer = document.querySelector("[data-lists");
const allTasksContainer = document.querySelector("[data-all-tasks]");
const allTasksList = document.querySelector("[data-default-list]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");
const listDisplayContainer = document.querySelector(
  "[data-list-display-container]"
);
const listTitleElement = document.querySelector("[data-list-title]");
const tasksContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const taskFilter = document.querySelector("[data-filter-tasks]");
const otherLists = document.querySelector("[data-other-lists]");

export const LOCAL_STORAGE_LIST_KEY = "taskapp.lists";
export const LOCAL_STORAGE_LIST_ID_KEY = "taskapp.selectedListId";
export const LOCAL_STORAGE_ALL_LIST_KEY = "taskapp.allTasksList";

export let lists =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

export let allTasksStorage = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_ALL_LIST_KEY)
) || {
  id: "0",
  tasks: [],
};

export let selectedListId =
  localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY) || "0";

const setActiveSidebarItem = (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
};

let filter = taskFilter.value;

listsContainer.addEventListener("click", setActiveSidebarItem);
allTasksContainer.addEventListener("click", setActiveSidebarItem);

taskFilter.addEventListener("change", (e) => {
  filter = e.target.value;
  render();
});

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = createList(listName);
  newListInput.value = null;
  newListInput.blur();
  lists.push(list);
  selectedListId = list.id;
  saveAndRender();
});

export const render = () => {
  clearElement(listsContainer);
  renderLists();
  let selectedList = lists.find((list) => list.id === selectedListId);

  if (selectedListId == "0") {
    listTitleElement.textContent = allTasksList.textContent;
  } else {
    listTitleElement.textContent = selectedList.name;
  }

  clearElement(tasksContainer);
  clearElement(otherLists);
  renderTasks(selectedList);
};

const renderTasks = (selectedList) => {
  let activeList;
  if (selectedListId == "0") {
    const allTasks = [...allTasksStorage.tasks];
    // lists.forEach((list) => {
    //   allTasks.push(...list.tasks);
    // });
    activeList = allTasks;
  } else {
    activeList = selectedList.tasks;
  }

  if (filter.toLowerCase() === "day") {
    activeList = activeList.filter((task) => {
      if (task.dueDate) {
        const formattedTaskDate = getFormattedDate(task.dueDate);
        return isToday(new Date(formattedTaskDate));
      }
    });
  } else if (filter.toLowerCase() === "week") {
    activeList = activeList.filter((task) => {
      if (task.dueDate) {
        const formattedTaskDate = getFormattedDate(task.dueDate);
        return isSameWeek(new Date(formattedTaskDate), new Date());
      }
    });
  } else if (filter.toLowerCase() === "month") {
    activeList = activeList.filter((task) => {
      if (task.dueDate) {
        const formattedTaskDate = getFormattedDate(task.dueDate);
        return isSameMonth(new Date(formattedTaskDate), new Date());
      }
    });
  } else if (filter.toLowerCase() === "year") {
    activeList = activeList.filter((task) => {
      if (task.dueDate) {
        const formattedTaskDate = getFormattedDate(task.dueDate);
        return isSameYear(new Date(formattedTaskDate), new Date());
      }
    });
  }

  activeList.forEach((task) => {
    const createdTask = createTaskElement(task);
    tasksContainer.appendChild(createdTask);
  });

  // Div for after the last task on 'All Tasks' list
  if (selectedListId == "0") {
    lists.forEach((list) => {
      const otherListContainer = document.createElement("div");
      otherListContainer.classList.add("other-list-container");
      const otherListTitle = document.createElement("div");
      otherListTitle.classList.add("other-list-title");
      const otherListH2 = document.createElement("h2");
      otherListH2.textContent = list.name;
      const otherListTaskContainer = document.createElement("div");
      otherListTaskContainer.classList.add("other-tasks-container");

      let filterList = list.tasks;

      if (filter.toLowerCase() === "day") {
        filterList = filterList.filter((task) => {
          if (task.dueDate) {
            const formattedTaskDate = getFormattedDate(task.dueDate);
            return isToday(new Date(formattedTaskDate));
          }
        });
      } else if (filter.toLowerCase() === "week") {
        filterList = filterList.filter((task) => {
          if (task.dueDate) {
            const formattedTaskDate = getFormattedDate(task.dueDate);
            return isSameWeek(new Date(formattedTaskDate), new Date());
          }
        });
      } else if (filter.toLowerCase() === "month") {
        filterList = filterList.filter((task) => {
          if (task.dueDate) {
            const formattedTaskDate = getFormattedDate(task.dueDate);
            return isSameMonth(new Date(formattedTaskDate), new Date());
          }
        });
      } else if (filter.toLowerCase() === "year") {
        filterList = filterList.filter((task) => {
          if (task.dueDate) {
            const formattedTaskDate = getFormattedDate(task.dueDate);
            return isSameYear(new Date(formattedTaskDate), new Date());
          }
        });
      }

      filterList.forEach((task) => {
        const generatedTaskEl = createTaskElement(task);
        otherListTaskContainer.appendChild(generatedTaskEl);
      });

      otherListTitle.appendChild(otherListH2);
      otherListContainer.appendChild(otherListTitle);
      otherListContainer.appendChild(otherListTaskContainer);
      otherLists.appendChild(otherListContainer);
    });
  }
};

const renderLists = () => {
  if (selectedListId == "0") {
    allTasksList.classList.add("active");
  } else {
    allTasksList.classList.remove("active");
  }
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.classList.add("list-item");
    if (list.id === selectedListId) {
      listElement.classList.add("active");
    }
    listElement.dataset.listId = list.id;
    listElement.textContent = list.name;

    const deleteListItem = document.createElement("span");
    deleteListItem.classList.add("delete-icon");
    const deleteListIcon = document.createElement("i");
    deleteListIcon.classList.add("fa-solid", "fa-xmark");
    deleteListItem.addEventListener("click", deleteList);

    deleteListItem.appendChild(deleteListIcon);
    listElement.appendChild(deleteListItem);
    listsContainer.appendChild(listElement);
  });
};

const deleteList = (e) => {
  const listParent = e.target.closest(".list-item");
  const listParentId = listParent.dataset.listId;
  lists = lists.filter((list) => list.id !== listParentId);
  const previousList = listParent.previousSibling;
  const nextList = listParent.nextSibling;
  if (previousList != null) {
    const previousListId = previousList.dataset.listId;
    selectedListId = previousListId;
  } else if (nextList != null) {
    const nextListId = nextList.dataset.listId;
    selectedListId = nextListId;
  } else {
    selectedListId = 0;
  }
  saveAndRender();
};

const getFormattedDate = (taskDate) => {
  const newDate = format(new Date(taskDate), "M/d/yyyy").split("/");
  newDate[1]++;
  return newDate.join("/");
};

const createTaskElement = (task) => {
  const taskElement = document.importNode(taskTemplate.content, true);
  const taskCircle = taskElement.querySelector(".task-circle-container");
  task.complete ? taskCircle.classList.add("fill") : null;
  const taskTitle = taskElement.querySelector(".task-title");
  task.complete ? taskTitle.classList.add("strike") : null;
  taskTitle.textContent = task.title;
  const taskPriority = taskElement.querySelector(".task-priority");
  const priority = getPriority(task);
  taskPriority.classList.add(priority);
  taskPriority.textContent =
    priority.charAt(0).toUpperCase() + priority.slice(1);

  // Format due date if date is provided
  if (task.dueDate) {
    const taskDate = taskElement.querySelector(".task-due-date");
    task.complete ? taskDate.classList.add("strike") : null;

    const formattedDate = getFormattedDate(task.dueDate);

    // Check if due date is overdue
    if (new Date(formattedDate) < new Date()) {
      // Is overdue
      let lateBy = formatDistanceStrict(new Date(formattedDate), new Date(), {
        unit: "day",
        roundingMethod: "floor",
      });

      if (
        new Date(formattedDate).getMonth() == new Date().getMonth() &&
        new Date(formattedDate).getDate() == new Date().getDate()
      ) {
        taskDate.textContent = formattedDate;
      } else {
        taskDate.classList.add("overdue");
        taskDate.textContent = `${formattedDate} - ${lateBy} ago`;
      }
    } else {
      // Is not overdue
      taskDate.textContent = formattedDate;
    }
  }

  const taskDescript = taskElement.querySelector(".task-descript");
  taskDescript.textContent = task.description;
  const taskIcons = taskElement.querySelector(".task-icons");
  if (task.description !== "") {
    const taskOpenIcon = document.createElement("i");
    taskOpenIcon.classList.add("task-open", "fa-solid", "fa-chevron-down");
    taskIcons.insertBefore(taskOpenIcon, taskIcons.firstChild);

    taskOpenIcon.addEventListener("click", () => {
      if (
        taskDescript.classList.contains("display") &&
        taskOpenIcon.classList.contains("flip")
      ) {
        taskDescript.classList.remove("display");
        taskOpenIcon.classList.remove("flip");
      } else if (
        !taskDescript.classList.contains("display") &&
        !taskOpenIcon.classList.contains("flip")
      ) {
        taskDescript.classList.add("display");
        taskOpenIcon.classList.add("flip");
      }
    });
  }
  const taskDeleteIcon = taskElement.querySelector(".delete-task");

  taskCircle.addEventListener("click", () => {
    task.complete = !task.complete;
    saveAndRender();
  });

  taskDeleteIcon.addEventListener("click", () => {
    if (task.parentId == "0") {
      allTasksStorage.tasks = allTasksStorage.tasks.filter(
        (delTask) => delTask.id !== task.id
      );
    } else {
      let targetList = lists.find((list) => list.id === task.parentId);
      targetList.tasks = targetList.tasks.filter(
        (delTask) => delTask.id !== task.id
      );
    }
    saveAndRender();
  });

  return taskElement;
};

render();
toggleAddTaskForm();
toggleSidebar();
