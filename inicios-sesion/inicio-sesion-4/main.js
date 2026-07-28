const signinForm = document.querySelector(".form.signin");
const signupForm = document.querySelector(".form.signup");
const cardBg1 = document.querySelector(".card-bg-1");
const cardBg2 = document.querySelector(".card-bg-2");

const toggleView = () => {
  const signinActive = signinForm.classList.contains("active");

  signinForm.classList.toggle("active", !signinActive);
  signupForm.classList.toggle("active", signinActive);

  [cardBg1, cardBg2].forEach((el) =>
    el.classList.toggle("signin", signinActive)
  );
  [cardBg1, cardBg2].forEach((el) =>
    el.classList.toggle("signup", !signinActive)
  );
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

// Soporte para interacción por teclado en enlaces con role="button"
document.querySelectorAll('[role="button"]').forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleView();
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
