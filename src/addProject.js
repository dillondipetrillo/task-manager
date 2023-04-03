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
  const projectList = document.querySelector(".project-tasks");
  const defaultTasks = document.querySelectorAll(".default-task");

  defaultTasks.forEach((defaultTask) => {
    defaultTask.addEventListener("click", () => {
      if (defaultTask.classList.contains("active")) return;
      if (!defaultTask.classList.contains("active")) {
        let oldActive = document.getElementsByClassName("active")[0];
        if (oldActive) {
          oldActive.classList.remove("active");
        }
        defaultTask.classList.add("active");
      }
    });
  });

  // prevent default form submit
  addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

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
    const editProjectNameDiv = document.createElement("div");
    editProjectNameDiv.classList.add("edit-project-name");
    const editProjectInput = document.createElement("input");
    editProjectInput.setAttribute("type", "text");
    const editProjectSubmit = document.createElement("button");
    editProjectSubmit.classList.add("edit-project-submit");
    const editProjectNameErr = document.createElement("span");
    editProjectNameErr.classList.add("edit-project-error");

    // add content to DOM elements
    projectName.textContent = project;
    editSpan.textContent = "Edit";
    deleteSpan.textContent = "Delete";
    editProjectSubmit.textContent = "Update";
    editProjectNameErr.textContent =
      "Project name must be one or more characters";

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
        const editPayload = {
          editProjectNameDiv,
          editProjectInput,
          editProjectSubmit,
          editProjectNameErr,
        };
        editProjectName(projectName, editPayload);
        toggleOpenClass(editPopUp);
      } else if (
        !editProjectNameDiv.contains(e.target) &&
        editProjectNameDiv.classList.contains("open")
      ) {
        toggleOpenClass(editProjectNameDiv);
        editProjectNameErr.classList.remove("open");
      } else if (deleteSpan.contains(e.target)) {
        deleteProject(projectName.textContent);
      } else if (projectTask.contains(e.target)) {
        let oldActive = document.getElementsByClassName("active")[0];
        if (oldActive) {
          oldActive.classList.remove("active");
        }
        projectTask.classList.add("active");
      }
    });

    // append DOM elements in order
    editProjectNameDiv.appendChild(editProjectInput);
    editProjectNameDiv.appendChild(editProjectSubmit);
    editProjectNameDiv.appendChild(editProjectNameErr);
    editPopUp.appendChild(editSpan);
    editPopUp.appendChild(deleteSpan);
    projectEditIcon.appendChild(dotIcon);
    projectTask.appendChild(projectName);
    projectTask.appendChild(projectEditIcon);
    projectTask.appendChild(editPopUp);
    projectTask.appendChild(editProjectNameDiv);
    projectList.appendChild(projectTask);
  };

  const addProjectToLocalStorage = (inputVal) => {
    let savedProjects = getLocalStorageProjects();

    if (savedProjects.indexOf(inputVal) >= 0) {
      alert("Project already exists");
      return;
    }

    savedProjects.push(inputVal);
    localStorage.setItem("projects", JSON.stringify(savedProjects));

    renderProjects();
  };

  // edit name of project
  const editProjectName = (target, editPayload) => {
    let isActive = false;
    if (target.classList.contains("active")) {
      isActive = true;
    }
    const {
      editProjectNameDiv,
      editProjectInput,
      editProjectSubmit,
      editProjectNameErr,
    } = editPayload;
    editProjectNameDiv.classList.add("open");
    editProjectInput.value = target.textContent;
    editProjectInput.focus();
    editProjectInput.addEventListener("input", () => {
      if (editProjectNameErr.classList.contains("open")) {
        editProjectNameErr.classList.remove("open");
      }
    });
    editProjectSubmit.addEventListener("click", () => {
      if (editProjectInput.value === "") {
        editProjectNameErr.classList.add("open");
        return;
      } else {
        const savedProjects = getLocalStorageProjects();
        const changeIndex = savedProjects.findIndex(
          (project) => project === target.textContent
        );
        savedProjects[changeIndex] = editProjectInput.value;
        localStorage.setItem("projects", JSON.stringify(savedProjects));
        renderProjects();
        editProjectNameDiv.classList.remove("open");
        isActive ? target.classList.add("active") : null;
      }
    });
  };

  // delete project
  const deleteProject = (target) => {
    const savedProjects = getLocalStorageProjects();
    let filteredProjects = savedProjects.filter((project) => {
      if (project !== target) return true;
    });
    localStorage.setItem("projects", JSON.stringify(filteredProjects));
    renderProjects();
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
