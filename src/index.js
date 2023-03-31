import "./styles/styles.scss";

const addProjectIcon = document.querySelector(".add-project-icon");
const addProjectForm = document.querySelector(".add-project-form");
const addProjectCancelBtn = document.querySelector("button.cancel");
const projectEditIcon = document.querySelector(".project-edit-icon");
const projectEditDelete = document.querySelector(".project-edit-delete");
const spans = document.querySelectorAll(".project-edit-delete span");

const [span1, span2] = spans;

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
