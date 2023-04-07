import {
  LOCAL_STORAGE_LIST_ID_KEY,
  LOCAL_STORAGE_LIST_KEY,
  LOCAL_STORAGE_ALL_LIST_KEY,
  render,
  lists,
  selectedListId,
  allTasksStorage,
} from ".";

export const saveAndRender = () => {
  save();
  render();
};

const save = () => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(
    LOCAL_STORAGE_ALL_LIST_KEY,
    JSON.stringify(allTasksStorage)
  );
  localStorage.setItem(LOCAL_STORAGE_LIST_ID_KEY, selectedListId);
};

export const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export const createList = (name) => {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
};

export const getPriority = (task) => {
  if (task.priority === "low") {
    return "low";
  } else if (task.priority === "medium") {
    return "medium";
  } else if (task.priority === "high") {
    return "high";
  }
};
