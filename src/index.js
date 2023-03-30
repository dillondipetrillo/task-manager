import "./styles/styles.scss";

const addProjectIcon = document.querySelector(".add-project-icon");
const addProjectForm = document.querySelector(".add-project-form");
const addProjectCancelBtn = document.querySelector("button.cancel");

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
