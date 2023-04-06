const addTaskForm = document.querySelector("[data-add-task-form-bg]");
const addTaskButton = document.querySelector("[data-add-task-btn]");
const closeAddTaskForm = document.querySelector("[data-close-add-task]");

export const toggleAddTaskForm = () => {
  const closeForm = () => {
    if (addTaskForm.classList.contains("show")) {
      addTaskForm.classList.remove("show");
      document.body.classList.remove("no-scroll");
    }
  };

  const closeFormOutsideClick = (e) => {
    if (
      e.target.classList.contains("add-task-form-bg") &&
      addTaskForm.classList.contains("show")
    ) {
      addTaskForm.classList.remove("show");
    }
  };

  const displayForm = () => {
    if (!addTaskForm.classList.contains("show")) {
      addTaskForm.classList.add("show");
      document.body.classList.add("no-scroll");
    }
  };

  addTaskButton.addEventListener("click", displayForm);

  closeAddTaskForm.addEventListener("click", closeForm);

  addTaskForm.addEventListener("click", closeFormOutsideClick);
};
