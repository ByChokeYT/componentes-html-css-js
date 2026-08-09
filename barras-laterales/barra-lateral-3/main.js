document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");

  // Alternar colapso / expansión de la barra lateral
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      const isCollapsed = sidebar.classList.contains("collapsed");
      toggleBtn.setAttribute("aria-expanded", !isCollapsed);

      // Si se colapsa la barra, cerrar todos los submenús abiertos
      if (isCollapsed) {
        closeAllSubmenus();
      }
    });
  }

  // Atajo de teclado ⌘K / Ctrl+K para enfocar el buscador
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

// Función para alternar submenús (Acordeón)
function toggleSubmenu(element) {
  const sidebar = document.getElementById("sidebar");

  // Si la barra está colapsada, expandirla primero
  if (sidebar && sidebar.classList.contains("collapsed")) {
    sidebar.classList.remove("collapsed");
    const toggleBtn = document.getElementById("toggleBtn");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
  }

  const subMenu = element.nextElementSibling;
  const isOpen = element.classList.contains("open");

  // Cerrar otros submenús abiertos (Comportamiento Acordeón limpio)
  closeAllSubmenus();

  if (!isOpen && subMenu) {
    element.classList.add("open");
    const innerUl = subMenu.querySelector("ul");
    if (innerUl) {
      subMenu.style.height = `${innerUl.scrollHeight + 12}px`;
    }
  }
}

// Cerrar todos los submenús de la interfaz
function closeAllSubmenus() {
  const allSubmenuBtns = document.querySelectorAll(".nav-btn.has-submenu");
  const allSubmenus = document.querySelectorAll(".sub-menu");

  allSubmenuBtns.forEach((btn) => btn.classList.remove("open"));
  allSubmenus.forEach((menu) => {
    menu.style.height = "0";
  });
}

// Función para ir a una página directa (sin submenú)
function gotoPage(element) {
  clearAllActiveStates();
  element.classList.add("active");
  closeAllSubmenus();
}

// Selección de un sub-elemento dentro de un submenú
function selectSubItem(subElement) {
  clearAllActiveStates();
  subElement.classList.add("active");

  // Resaltar el botón padre del submenú
  const parentMenuItem = subElement.closest(".menu-item");
  if (parentMenuItem) {
    const parentNavBtn = parentMenuItem.querySelector(".nav-btn");
    if (parentNavBtn) {
      parentNavBtn.classList.add("active");
    }
  }
}

// Limpia las clases 'active' de todos los elementos
function clearAllActiveStates() {
  const allNavBtns = document.querySelectorAll(".nav-btn");
  const allSubNavBtns = document.querySelectorAll(".sub-nav-btn");

  allNavBtns.forEach((btn) => btn.classList.remove("active"));
  allSubNavBtns.forEach((btn) => btn.classList.remove("active"));
}
