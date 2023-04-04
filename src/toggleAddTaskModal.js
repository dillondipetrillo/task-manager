const addTaskForm = document.querySelector("[data-add-task-form-bg]");
const addTaskButton = document.querySelector("[data-add-task-btn]");
const closeAddTaskForm = document.querySelector("[data-close-add-task]");

export const toggleAddTaskForm = () => {
  addTaskButton.addEventListener("click", () => {
    if (!addTaskForm.classList.contains("show")) {
      addTaskForm.classList.add("show");
      document.body.classList.add("no-scroll");
    }
  });

  closeAddTaskForm.addEventListener("click", () => {
    if (addTaskForm.classList.contains("show")) {
      addTaskForm.classList.remove("show");
      document.body.classList.remove("no-scroll");
    }
  });
};
