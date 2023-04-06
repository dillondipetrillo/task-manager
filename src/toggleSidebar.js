const headerBtn = document.querySelector("[data-header-btn]");
const sidebar = document.querySelector("[data-sidebar]");

const toggleSidebar = () => {
  headerBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    } else {
      sidebar.classList.add("open");
    }
  });
};

export default toggleSidebar;
