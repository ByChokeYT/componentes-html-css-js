document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");

  // 1. Manejador de clics en la barra izquierda
  const navIconBtns = document.querySelectorAll(".nav-icon-btn");
  navIconBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("exit-btn")) {
        alert("Cerrando sesión...");
        return;
      }
      navIconBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // 2. Manejador de clics en botones grid del panel derecho
  const gridNavBtns = document.querySelectorAll(".grid-nav-btn");
  gridNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      gridNavBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // 3. Filtrado dinámico en el buscador interno del panel
  const panelSearch = document.getElementById("panel-search");
  if (panelSearch) {
    panelSearch.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      gridNavBtns.forEach((btn) => {
        const text = btn.querySelector("span").textContent.toLowerCase();
        if (text.includes(query)) {
          btn.style.display = "flex";
        } else {
          btn.style.display = "none";
        }
      });
    });
  }

  // 4. Selector de Color de Acento (Tema dinámico)
  const colorDots = document.querySelectorAll(".color-dot");
  colorDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      colorDots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
      const hexColor = dot.dataset.color;
      
      // Aplicar variable CSS al elemento root/sidebar
      sidebar.style.setProperty("--color-primary", hexColor);
      sidebar.style.setProperty("--color-primary-glow", `${hexColor}66`);
    });
  });
});
