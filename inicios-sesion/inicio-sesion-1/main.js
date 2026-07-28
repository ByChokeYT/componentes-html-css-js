const navButtons = document.querySelectorAll(".card-nav button"),
  cardForms = document.querySelector(".card-form .forms"),
  cardNav = document.querySelector(".card-nav"),
  cardHeroInner = document.querySelector(".card-hero-inner");

const selectView = (view) => {
  for (let button of navButtons) {
    button.classList.remove("active");

    if (button.classList.contains(view)) {
      button.classList.add("active");
    }
  }

  if (view === "signin") {
    cardForms.style.transform = "translateY(0)";
    if (cardHeroInner) cardHeroInner.style.transform = "translateY(0)";
    if (cardNav) cardNav.style.setProperty("--active-index", "1");
  } else {
    cardForms.style.transform = "translateY(-50%)";
    if (cardHeroInner) cardHeroInner.style.transform = "translateY(-50%)";
    if (cardNav) cardNav.style.setProperty("--active-index", "2");
  }
};

// Initial positioning on load
document.addEventListener("DOMContentLoaded", () => {
  selectView("signin");
});
