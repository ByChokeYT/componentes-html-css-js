const sidebar = document.getElementById("sidebar");
const burger = document.getElementById("burger");
const icon = document.getElementById("burgerIcon");
const navButtons = document.querySelectorAll(".sidebar nav button");

let isOpen = false;

// Alternar apertura de la barra lateral
const toggleSidebar = () => {
  isOpen = !isOpen;
  sidebar.classList.toggle("open");
  icon.textContent = isOpen ? "close" : "menu";
};

burger.addEventListener("click", toggleSidebar);

// Selección activa de botones del menú
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Atajos de teclado: Ctrl + B o Cmd + B para alternar, Esc para cerrar
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && (e.key === "b" || e.key === "B")) {
    e.preventDefault();
    toggleSidebar();
  }
  if (e.key === "Escape" && sidebar.classList.contains("open")) {
    toggleSidebar();
  }
});
