import toggleOpenClass from "./toggleOpenClass";

export const addProject = () => {
  //cache DOM elements
  const addProjectBtn = document.querySelector(".add-project-icon");
  const addProjectForm = document.querySelector(".add-project-form");
  const addProjectCancelBtn = document.querySelector(
    ".add-project-btns button.cancel"
  );
  const addProjectInput = document.querySelector(".add-project-form input");
  const addProjectAddBtn = document.querySelector(
    ".add-project-btns button.add"
  );
  const addProjectError = document.querySelector(".project-error");
  // cache parent DOM element
  const projectList = document.querySelector(".project-tasks");

  // opens/closes add project form
  document.addEventListener("click", (e) => {
    if (
      !addProjectForm.contains(e.target) &&
      addProjectForm.classList.contains("open")
    ) {
      toggleOpenClass(addProjectForm, addProjectBtn);
      addProjectError.classList.remove("open");
    } else if (addProjectBtn.contains(e.target)) {
      toggleOpenClass(addProjectForm, addProjectBtn);
      addProjectError.classList.remove("open");
    } else if (addProjectCancelBtn.contains(e.target)) {
      addProjectInput.value = "";
      toggleOpenClass(addProjectForm, addProjectBtn);
      addProjectError.classList.remove("open");
    }
  });

  addProjectInput.addEventListener("input", () => {
    if (addProjectError.classList.contains("open")) {
      addProjectError.classList.remove("open");
    }
  });

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  // submits new project
  addProjectAddBtn.addEventListener("click", () => {
    let inputVal = addProjectInput.value;
    if (inputVal === "") {
      addProjectError.classList.add("open");
      return;
    }
    // add project to localStorage array
    addProjectToLocalStorage(inputVal);
    addProjectInput.value = "";
    toggleOpenClass(addProjectForm, addProjectBtn);
  });

  const appendProject = (project) => {
    // create needed DOM elements for new project
    const projectTask = document.createElement("div");
    projectTask.classList.add("project-task");
    const projectName = document.createElement("span");
    projectName.classList.add("project-name");
    const projectEditIcon = document.createElement("span");
    projectEditIcon.classList.add("project-edit-icon");
    const dotIcon = document.createElement("i");
    dotIcon.classList.add("fa-solid", "fa-ellipsis");
    const editPopUp = document.createElement("div");
    editPopUp.classList.add("edit-delete");
    const editSpan = document.createElement("span");
    const deleteSpan = document.createElement("span");

    // add content to DOM elements
    projectName.textContent = project;
    editSpan.textContent = "Edit";
    deleteSpan.textContent = "Delete";

    // add evenetlisteners
    document.addEventListener("click", (e) => {
      if (
        !editPopUp.contains(e.target) &&
        editPopUp.classList.contains("open")
      ) {
        editPopUp.classList.remove("open");
      } else if (projectEditIcon.contains(e.target)) {
        toggleOpenClass(editPopUp);
      } else if (editSpan.contains(e.target)) {
        editProjectName(projectName);
      }
    });

    // append DOM elements in order
    editPopUp.appendChild(editSpan);
    editPopUp.appendChild(deleteSpan);
    projectEditIcon.appendChild(dotIcon);
    projectTask.appendChild(projectName);
    projectTask.appendChild(projectEditIcon);
    projectTask.appendChild(editPopUp);
    projectList.appendChild(projectTask);
  };

  const addProjectToLocalStorage = (inputVal) => {
    if (projects.indexOf(inputVal) >= 0) {
      alert("Project already exists");
      return;
    }

    projects.push(inputVal);
    localStorage.setItem("projects", JSON.stringify(projects));

    renderProjects();
  };

  // edit name of project
  const editProjectName = (target) => {
    const savedProjects = getLocalStorageProjects();
    console.log(savedProjects);
    console.log(target);
  };

  const renderProjects = () => {
    projectList.innerHTML = "";
    // what to display if there are no projects
    const noProjects = document.createElement("span");
    noProjects.classList.add("no-projects");
    noProjects.textContent = "No projects";

    let savedProjects = getLocalStorageProjects();
    savedProjects.length <= 0 ? projectList.appendChild(noProjects) : null;
    savedProjects.forEach((project) => {
      appendProject(project);
    });
  };

  const getLocalStorageProjects = () => {
    return JSON.parse(localStorage.getItem("projects")) || [];
  };

  renderProjects();
};
