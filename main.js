import { renderBeers } from "./renderer.js";
import { beersRepository } from "./beers-repository.js";
import { createFilterEvents } from "./filter-beer.js";
import { createBeer } from "./create-beer.js";
import { requestBeers } from "./request-beers.js";
import { modalRender } from "./modalRender.js";

function toggleBeerDetail(id) {
  const beerDetail = document.querySelector("#beer-detail");
  beerDetail.classList.toggle("beer-detail-show");
  let foundBeer;
  for (let i = 0; i < beersRepository.beers.length; i++) {
    if (beersRepository.beers[i].id === id) {
      foundBeer = beersRepository.beers[i];
    }
  }
  modalRender(foundBeer);
}

export function createToggleModalEvents() {
  const elements = document.querySelectorAll(".beer");

  elements.forEach(element =>
    element.addEventListener("click", () => {
      const id = Number(element.dataset.id);
      toggleBeerDetail(id);
    })
  );
}

requestBeers().then(beersResponse => {
  beersRepository.beers = beersResponse.map(responseBeer =>
    createBeer(responseBeer)
  );
  renderBeers(beersRepository.beers);
  createFilterEvents();
});
