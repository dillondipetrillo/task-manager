import {
  saveAndRender,
  clearElement,
  createList,
  getPriority,
} from "./addListUtils";
import { toggleAddTaskForm } from "./toggleAddTaskModal";
import toggleSidebar from "./toggleSidebar";
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

export const LOCAL_STORAGE_LIST_KEY = "taskapp.lists";
export const LOCAL_STORAGE_LIST_ID_KEY = "taskapp.selectedListId";
export let lists =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
export let selectedListId =
  localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY) || "0";

const setActiveSidebarItem = (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
};

listsContainer.addEventListener("click", setActiveSidebarItem);
allTasksContainer.addEventListener("click", setActiveSidebarItem);

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = createList(listName);
  newListInput.value = null;
  newListInput.blur();
  lists.push(list);
  saveAndRender();
});

export const render = () => {
  clearElement(listsContainer);
  renderLists();
  const selectedList = lists.find((list) => list.id === selectedListId);
  if (selectedListId == 0) {
    listTitleElement.textContent = allTasksList.textContent;
  } else {
    listTitleElement.textContent = selectedList.name;
  }
  clearElement(tasksContainer);
  renderTasks(selectedList);
};

const renderTasks = (selectedList) => {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const taskCircle = taskElement.querySelector(".task-circle");
    task.complete ? taskCircle.classList.add("fill") : null;
    const taskTitle = taskElement.querySelector(".task-title");
    task.complete ? taskTitle.classList.add("strike") : null;
    taskTitle.textContent = task.title;
    const taskPriority = taskElement.querySelector(".task-priority");
    const priority = getPriority(task);
    taskPriority.classList.add(priority);
    taskPriority.textContent =
      priority.charAt(0).toUpperCase() + priority.slice(1);
    const taskDate = taskElement.querySelector(".task-due-date");
    taskDate.textContent = task.dueDate;
    const taskDescript = taskElement.querySelector(".task-descript");
    taskDescript.textContent = task.description;
    const taskIcons = taskElement.querySelector(".task-icons");
    if (task.description != null || task.description != undefined) {
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
      // do deletion
    });

    tasksContainer.appendChild(taskElement);
  });
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

render();
toggleAddTaskForm();
toggleSidebar();
