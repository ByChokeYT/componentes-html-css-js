const sidebar = document.getElementById("sidebar");
const subMenus = document.querySelectorAll(".sub-menu");
const buttons = document.querySelectorAll(".sidebar .menu-list > li > button");

const onClick = (item) => {
  const isCurrentlyActive = item.classList.contains("active");

  // Cerrar otros menús abiertos
  subMenus.forEach((menu) => (menu.style.height = "0px"));
  buttons.forEach((button) => button.classList.remove("active"));

  if (!item.nextElementSibling) {
    item.classList.add("active");
    return;
  }

  const subMenu = item.nextElementSibling;
  const ul = subMenu.querySelector("ul");

  if (!isCurrentlyActive) {
    subMenu.style.height = `${ul.clientHeight}px`;
    item.classList.add("active");
  } else {
    subMenu.style.height = "0px";
    item.classList.remove("active");
  }
};

// Función para colapsar / expandir la barra lateral completa
const toggleSidebar = () => {
  if (sidebar) {
    sidebar.classList.toggle("collapsed");
    // Si se colapsa, cerrar acordeones abiertos
    if (sidebar.classList.contains("collapsed")) {
      subMenus.forEach((menu) => (menu.style.height = "0px"));
      buttons.forEach((button) => button.classList.remove("active"));
    }
  }
};

// Interacción del botón de cerrar sesión
const logoutBtn = document.querySelector(".logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    const userName = document.querySelector(".user-name");
    if (userName) {
      const originalText = userName.textContent;
      userName.textContent = "Cerrando sesión...";
      setTimeout(() => {
        userName.textContent = originalText;
      }, 1000);
    }
  });
}
