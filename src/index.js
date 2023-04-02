import "./styles/styles.scss";

const addProjectIcon = document.querySelector(".add-project-icon");
const addProjectForm = document.querySelector(".add-project-form");
const addProjectCancelBtn = document.querySelector("button.cancel");
const projectEditIcon = document.querySelector(".project-edit-icon");
const projectEditDelete = document.querySelector(".edit-delete");
const taskDescript = document.querySelector(".content-task-notes");
const taskOpenIcon = document.querySelector(".content-task-open");
const taskEditIcon = document.querySelector(".content-task-edit");
const taskEditModal = document.querySelector(
  ".content-task-container-right .edit-delete"
);
const checkedIcon = document.querySelector(".check-complete");

checkedIcon.addEventListener("click", function () {
  if (checkedIcon.classList.contains("checked")) {
    checkedIcon.classList.remove("checked");
  } else {
    checkedIcon.classList.add("checked");
  }
});

taskEditIcon.addEventListener("click", function () {
  if (taskEditModal.classList.contains("open")) {
    taskEditModal.classList.remove("open");
  } else {
    taskEditModal.classList.add("open");
  }
});

addProjectIcon.addEventListener("click", function () {
  if (addProjectIcon.classList.contains("open")) {
    addProjectIcon.classList.remove("open");
    addProjectForm.classList.remove("open");
  } else {
    addProjectIcon.classList.add("open");
    addProjectForm.classList.add("open");
  }
});

addProjectCancelBtn.addEventListener("click", function () {
  addProjectIcon.classList.remove("open");
  addProjectForm.classList.remove("open");
});

projectEditIcon.addEventListener("click", function () {
  if (projectEditDelete.classList.contains("open")) {
    projectEditDelete.classList.remove("open");
  } else {
    projectEditDelete.classList.add("open");
  }
});

taskOpenIcon.addEventListener("click", function () {
  if (
    taskOpenIcon.classList.contains("open") &&
    taskDescript.classList.contains("open")
  ) {
    taskOpenIcon.classList.remove("open");
    taskDescript.classList.remove("open");
  } else {
    taskDescript.classList.add("open");
    taskOpenIcon.classList.add("open");
  }
});
