const toggleOpenClass = (...domElements) => {
  domElements.forEach((element) => {
    if (element.classList.contains("open")) {
      element.classList.remove("open");
    } else {
      element.classList.add("open");
    }
  });
};

export default toggleOpenClass;
