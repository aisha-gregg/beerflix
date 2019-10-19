export function createBeer({ beerId, name, description }) {
  return {
    id: beerId,
    name,
    description
  };
}

function toggleBeerDetail(beerId) {
  const beerDetail = document.querySelector("#beer-detail");
  beerDetail.classList.toggle("beer-detail-show");
}

function createToggleModalEvents() {
  const elements = document.querySelectorAll(
    "#beer-detail-veil, .close-icon i, .beer"
  );
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => toggleBeerDetail());
  }
}

createToggleModalEvents();
