import { lists, selectedListId } from ".";
import { saveAndRender } from "./addListUtils";

const addTaskFormBg = document.querySelector("[data-add-task-form-bg]");
const addTaskButton = document.querySelector("[data-add-task-btn]");
const closeAddTaskForm = document.querySelector("[data-close-add-task]");
const addTaskForm = document.querySelector("[data-add-task-form]");
const taskFormTitle = document.querySelector("[data-input-title]");
const taskFormDueDate = document.querySelector("[data-input-due-date]");
const taskFormPriority = document.querySelector("[data-input-priority]");
const taskFormDescription = document.querySelector("[data-textarea-descript]");

export const toggleAddTaskForm = () => {
  const closeForm = () => {
    if (addTaskFormBg.classList.contains("show")) {
      addTaskFormBg.classList.remove("show");
      document.body.classList.remove("no-scroll");
    }
  };

  const closeFormOutsideClick = (e) => {
    if (
      e.target.classList.contains("add-task-form-bg") &&
      addTaskFormBg.classList.contains("show")
    ) {
      addTaskFormBg.classList.remove("show");
    }
  };

  const displayForm = () => {
    if (!addTaskFormBg.classList.contains("show")) {
      addTaskFormBg.classList.add("show");
      document.body.classList.add("no-scroll");
      taskFormTitle.focus();
    }
  };

  const submitNewTask = (e) => {
    e.preventDefault();
    if (taskFormTitle.value === "") return;
    else {
      const activeList = lists.find((list) => list.id === selectedListId);
      const newTaskObj = createTask();
      activeList.tasks.push(newTaskObj);
      taskFormTitle.value = "";
      taskFormDueDate.value = "";
      taskFormPriority.value = "low";
      taskFormDescription.value = "";

      closeForm();
      saveAndRender();
    }
  };

  const createTask = () => {
    return {
      id: Date.now().toString(),
      title: taskFormTitle.value,
      description: taskFormDescription.value,
      complete: false,
      dueDate: taskFormDueDate.value,
      priority: taskFormPriority.value,
    };
  };

  addTaskButton.addEventListener("click", displayForm);

  closeAddTaskForm.addEventListener("click", closeForm);

  addTaskFormBg.addEventListener("click", closeFormOutsideClick);

  addTaskForm.addEventListener("submit", submitNewTask);
};
