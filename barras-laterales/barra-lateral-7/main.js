const sidebar = document.querySelector(".sidebar");
const handle = document.querySelector(".handle");
const navButtons = document.querySelectorAll(".sidebar button");

let isResizing = false;

const MIN_WIDTH = 64;
const MAX_WIDTH = 260;

// Arrastre para cambiar el tamaño
handle.addEventListener("mousedown", (e) => {
  isResizing = true;
  document.body.classList.add("resizing");
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;

  const sidebarRect = sidebar.getBoundingClientRect();
  let newWidth = e.clientX - sidebarRect.left;
  if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
  if (newWidth > MAX_WIDTH) newWidth = MAX_WIDTH;

  sidebar.style.width = newWidth + "px";

  // Si el ancho es estrecho, ocultar texto limpiamente
  if (newWidth < 120) {
    sidebar.classList.add("narrow");
  } else {
    sidebar.classList.remove("narrow");
  }
});

document.addEventListener("mouseup", () => {
  if (!isResizing) return;

  isResizing = false;
  document.body.classList.remove("resizing");
});

// Selección activa de botones del menú
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
