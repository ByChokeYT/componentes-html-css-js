const tabSignin = document.getElementById("tab-signin");
const tabSignup = document.getElementById("tab-signup");
const viewSignin = document.getElementById("view-signin");
const viewSignup = document.getElementById("view-signup");
const tabIndicator = document.querySelector(".tab-indicator");

const switchTab = (tab) => {
  if (tab === "signin") {
    tabSignin.classList.add("active");
    tabSignup.classList.remove("active");
    viewSignin.classList.add("active");
    viewSignup.classList.remove("active");

    if (tabIndicator) {
      tabIndicator.style.transform = "translateX(0%)";
    }
  } else {
    tabSignup.classList.add("active");
    tabSignin.classList.remove("active");
    viewSignup.classList.add("active");
    viewSignin.classList.remove("active");

    if (tabIndicator) {
      tabIndicator.style.transform = "translateX(100%)";
    }
  }
};

// Alternar visibilidad de contraseña (Mostrar / Ocultar)
document.querySelectorAll(".toggle-pass-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.parentElement.querySelector("input");
    const icon = btn.querySelector("i");

    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("bx-hide", "bx-show");
    } else {
      input.type = "password";
      icon.classList.replace("bx-show", "bx-hide");
    }
  });
});

// Soporte para interacción por teclado en pestañas y botones
document.querySelectorAll(".tab-btn, .social-btn").forEach((btn) => {
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
});

// Manejo interactivo de envío de formularios
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btnSpan = form.querySelector(".submit-btn span");
    if (btnSpan) {
      const originalText = btnSpan.textContent;
      btnSpan.textContent = "Procesando...";
      setTimeout(() => {
        btnSpan.textContent = originalText;
      }, 1200);
    }
  });
});
