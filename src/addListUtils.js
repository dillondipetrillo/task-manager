import {
  LOCAL_STORAGE_LIST_ID_KEY,
  LOCAL_STORAGE_LIST_KEY,
  render,
  lists,
  selectedListId,
} from ".";

export const saveAndRender = () => {
  save();
  render();
};

const save = () => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
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
    tasks: [
      {
        id: 123,
        title: "Made by JS",
        description: "Inside addListUtils.js",
        complete: false,
        dueDate: "04/11/1996",
        priority: "high",
      },
      {
        id: 4,
        title: "Test 2",
        complete: false,
        description: null,
        dueDate: null,
        priority: "low",
      },
    ],
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
