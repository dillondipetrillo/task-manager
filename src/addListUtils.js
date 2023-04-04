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
    tasks: [],
  };
};
