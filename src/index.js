import "./styles/styles.scss";

const listsContainer = document.querySelector("[data-lists");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

const LOCAL_STORAGE_LIST_KEY = "taskapp.lists";
const LOCAL_STORAGE_LIST_ID_KEY = "taskapp.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY);

listsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

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

const createList = (name) => {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
};

const saveAndRender = () => {
  save();
  render();
};

const save = () => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_LIST_ID_KEY, selectedListId);
};

const render = () => {
  clearElement(listsContainer);
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
  const listParentId = e.target.closest(".list-item").dataset.listId;
  lists = lists.filter((list) => list.id !== listParentId);
  saveAndRender();
};

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

render();
