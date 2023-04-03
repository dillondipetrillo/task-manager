import toggleOpenClass from "./toggleOpenClass";

export const addProject = () => {
  //cache DOM elements
  const addProjectBtn = document.querySelector(".add-project-icon");
  const addProjectForm = document.querySelector(".add-project-form");
  const addProjectCancelBtn = document.querySelector(
    ".add-project-btns button.cancel"
  );

  // open or close form modal with icon
  addProjectBtn.addEventListener("click", () => {
    toggleOpenClass(addProjectForm, addProjectBtn);
  });

  // close form modal with cancel button
  addProjectCancelBtn.addEventListener("click", () => {
    toggleOpenClass(addProjectForm, addProjectBtn);
  });
};
