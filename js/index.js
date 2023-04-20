const toggleButton = document.querySelector(".hamburger-button");
const hamburgerWrapper = document.querySelector(".links-panel");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  hamburgerWrapper.classList.toggle("show");
});

hamburgerWrapper.addEventListener("click", (e) => {
  if (e.target === "hamburger-button") {
    hamburgerWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
