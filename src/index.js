import { saveAndRender, clearElement, createList } from "./addListUtils";
import { toggleAddTaskForm } from "./toggleAddTaskModal";
import toggleSidebar from "./toggleSidebar";
import "./styles/styles.scss";

const listsContainer = document.querySelector("[data-lists");
const allTasksContainer = document.querySelector("[data-all-tasks]");
const allTasksList = document.querySelector("[data-default-list]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

export const LOCAL_STORAGE_LIST_KEY = "taskapp.lists";
export const LOCAL_STORAGE_LIST_ID_KEY = "taskapp.selectedListId";
export let lists =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
export let selectedListId = localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY);

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
