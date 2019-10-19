import { renderBeers } from "./renderer.js";

function toggleBeerDetail() {
  const beerDetail = document.querySelector("#beer-detail");
  beerDetail.classList.toggle("beer-detail-show");
}

function createToggleModalEvents() {
  const elements = document.querySelectorAll(
    "#beer-detail-veil, .close-icon i, .beer"
  );

  elements.forEach(element =>
    element.addEventListener("click", () => toggleBeerDetail())
  );
}

createToggleModalEvents();
renderBeers();
