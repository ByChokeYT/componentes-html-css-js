document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  const navItems = document.querySelectorAll(".nav-item");

  // Alternar estado de expansión/colapso de la barra lateral
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      const isCollapsed = sidebar.classList.contains("collapsed");
      toggleBtn.setAttribute("aria-expanded", !isCollapsed);
    });
  }

  // Manejar el estado activo de los botones del menú
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((btn) => btn.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Atajo de teclado (Ctrl/Cmd + K para enfocar la caja de búsqueda)
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const searchInput = document.querySelector(".search-box input");
      if (searchInput) {
        if (sidebar && sidebar.classList.contains("collapsed")) {
          sidebar.classList.remove("collapsed");
          if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
        }
        searchInput.focus();
      }
    }
  });
});
