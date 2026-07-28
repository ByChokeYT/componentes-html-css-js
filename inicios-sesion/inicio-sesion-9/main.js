const loginForm = document.querySelector(".form.login");
const registerForm = document.querySelector(".form.register");
const toggle = document.querySelector(".toggle");

const toggleView = (next) => {
  toggle.classList.toggle("login-active", next === "login");

  // Limpiar estados de formulario
  [loginForm, registerForm].forEach((element) =>
    element.classList.remove("active")
  );

  // Activar vista seleccionada
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

// Simulación de Autenticación Biométrica por Huella / FaceID
const biometricBtn = document.querySelector(".biometric-btn");
if (biometricBtn) {
  biometricBtn.addEventListener("click", () => {
    const span = biometricBtn.querySelector("span");
    const originalText = span.textContent;
    span.textContent = "Escaneando huella biométrica...";
    biometricBtn.style.borderColor = "#00f2fe";
    biometricBtn.style.color = "#00f2fe";

    setTimeout(() => {
      span.textContent = "¡Identidad Verificada!";
      setTimeout(() => {
        span.textContent = originalText;
      }, 1200);
    }, 1000);
  });
}

// Soporte para interacción por teclado en conmutadores y botones
document.querySelectorAll(".toggle button, .biometric-btn, .social-btn").forEach((btn) => {
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
      btnSpan.textContent = "VERIFICANDO...";
      setTimeout(() => {
        btnSpan.textContent = originalText;
      }, 1200);
    }
  });
});
