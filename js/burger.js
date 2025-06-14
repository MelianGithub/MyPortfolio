const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("navBar");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

navWrapper.addEventListener("click", (e) => {
  if (e.target.id === "navBar") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
