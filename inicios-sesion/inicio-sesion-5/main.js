const loginHero = document.querySelector(".hero.login");
const loginForm = document.querySelector(".form.login");
const registerHero = document.querySelector(".hero.register");
const registerForm = document.querySelector(".form.register");
const cardBg = document.querySelector(".card-bg");

const toggleView = () => {
  const loginActive = loginHero.classList.contains("active");

  cardBg.classList.toggle("login", !loginActive);

  [loginHero, loginForm].forEach((el) => el.classList.toggle("active"));
  [registerHero, registerForm].forEach((el) => el.classList.toggle("active"));
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

// Soporte para interacción por teclado en botones interactivos
document.querySelectorAll(".hero-btn, .sso-btn").forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      el.click();
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
