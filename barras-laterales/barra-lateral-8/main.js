const sidebar = document.querySelector(".sidebar");
const nav = document.querySelector(".sidebar .menu");
const buttons = document.querySelectorAll(".sidebar .menu button");

const toggleOpen = () => sidebar.classList.toggle("open");

// Activar primera opción por defecto
if (buttons.length > 0) {
  buttons[0].classList.add("active");
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    nav.style.setProperty("--top", `${index * 52}px`);
  });
});
