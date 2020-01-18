import { renderBeers } from "./renderer.js";
import { beersRepository } from "./beers-repository.js";
import { createFilterEvents } from "./filter-beer.js";
import { requestBeers } from "./request-beers.js";
import { modalRender } from "./modal-render.js";

function toggleBeerDetail(id) {
  const beerDetail = document.querySelector("#beer-detail");
  beerDetail.classList.toggle("beer-detail-show");
  const foundBeer = beersRepository.beers.find(beer => beer.id === id);
  modalRender(foundBeer);
}

export function createToggleModalEvents() {
  const elements = document.querySelectorAll(".beer");
  elements.forEach(element =>
    element.addEventListener("click", () => {
      const id = Number(element.dataset.id);
      history.pushState({ id }, "beer", `/beers/${id}`);
    })
  );
}
function createModalEvents() {
  const pushState = history.pushState;
  history.pushState = function() {
    pushState.apply(history, arguments);
    dispatchEvent(new Event("popstate"));
  };

  window.addEventListener("popstate", () => {
    if (history.state.id !== undefined) {
      toggleBeerDetail(history.state.id);
    }
  });

  const id = location.pathname.split("/")[2];
  if (id !== undefined) {
    toggleBeerDetail(Number(id));
  }
}

requestBeers().then(beersResponse => {
  beersRepository.beers = beersResponse;
  renderBeers(beersRepository.beers);
  createFilterEvents();
  createModalEvents();
});
