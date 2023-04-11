const headerBtn = document.querySelector("[data-header-btn]");
const sidebar = document.querySelector("[data-sidebar]");

const toggleSidebar = () => {
  headerBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("toggle")) {
      sidebar.classList.remove("toggle");
    } else {
      sidebar.classList.add("toggle");
    }
  });
};

export default toggleSidebar;
