// scroll to leiligheten
const clickableElementLeilighet = document.getElementById("nav-leilighet");

clickableElementLeilighet.addEventListener("click", (e) => {
  e.preventDefault();
  const targetElement = document.getElementById("leiligheten");

  targetElement.scrollIntoView({
    behavior: "smooth",
  });
});

// Scroll to Byen
const clickableElementByen = document.getElementById("nav-byen");

clickableElementByen.addEventListener("click", (e) => {
  e.preventDefault();

  const targetElement = document.getElementById("byen");

  targetElement.scrollIntoView({
    behavior: "smooth",
  });
});

// Scroll to kontakt
const clickableElementKontakt = document.getElementById("nav-kontakt");

clickableElementKontakt.addEventListener("click", (e) => {
  e.preventDefault();

  const targetElement = document.getElementById("kontakt");

  targetElement.scrollIntoView({
    behavior: "smooth",
  });
});
