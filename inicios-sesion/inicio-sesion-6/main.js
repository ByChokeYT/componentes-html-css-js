const loginForm = document.querySelector(".form.login");
const registerForm = document.querySelector(".form.register");
const toggle = document.querySelector(".toggle");

const toggleView = (next) => {
  toggle.classList.toggle("login-active", next === "login");

  // Ocultar ambos formularios limpiando estado
  [loginForm, registerForm].forEach((element) =>
    element.classList.remove("active")
  );

  // Activar vista solicitada
  if (next === "login") {
    loginForm.classList.add("active");
  } else {
    registerForm.classList.add("active");
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

// Soporte para interacción por teclado en conmutadores
document.querySelectorAll(".toggle button").forEach((btn) => {
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
