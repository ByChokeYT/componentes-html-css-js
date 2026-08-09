const sidebar = document.querySelector(".sidebar");

const toggleOpen = () => sidebar.classList.toggle("open");

const nav = document.querySelector(".sidebar nav");
const buttons = document.querySelectorAll(".sidebar nav button");
const searchInput = document.getElementById("menu-search-input");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Marcar primer botón activo por defecto
if (buttons.length > 0) {
  buttons[0].classList.add("active");
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    nav.style.setProperty("--top", `${index === 0 ? 0 : index * 52}px`);
  });
});

// 1. Buscador Dinámico con Auto-Expansión
if (searchInput) {
  searchInput.addEventListener("focus", () => {
    if (!sidebar.classList.contains("open")) {
      sidebar.classList.add("open");
    }
  });

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    // Si el usuario escribe y la barra está cerrada, expandirla automáticamente
    if (query.length > 0 && !sidebar.classList.contains("open")) {
      sidebar.classList.add("open");
    }

    buttons.forEach((button) => {
      const text = button.querySelector("p").textContent.toLowerCase();
      if (text.includes(query)) {
        button.style.display = "flex";
      } else {
        button.style.display = "none";
      }
    });
  });
}

// 2. Atajos de Teclado (Ctrl + / para alternar, Esc para cerrar)
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "/") {
    e.preventDefault();
    toggleOpen();
  }
  if (e.key === "Escape" && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }
});

// 3. Alternar Tema (Modo Claro / Oscuro) en el Pie
if (themeToggleBtn) {
  let isDarkMode = true;
  themeToggleBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    const iconSpan = themeToggleBtn.querySelector("span");
    if (isDarkMode) {
      sidebar.style.setProperty("--color-bg-sidebar", "#0f1629");
      iconSpan.textContent = "dark_mode";
    } else {
      sidebar.style.setProperty("--color-bg-sidebar", "#1e293b");
      iconSpan.textContent = "light_mode";
    }
  });
}
