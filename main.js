import { renderBeers } from "./renderer.js";
import { beersRepository } from "./beers-repository.js";
import { createFilterEvents } from "./filter-beer.js";
import { createBeer } from "./create-beer.js";
import { requestBeers } from "./request-beers.js";
import { postComment } from "./post-comment.js";
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
  const modalBody = document.querySelector("#add-comment");
  modalBody.addEventListener("click", async () => {
    const commentValue = document.querySelector(".comments-input").value;
    await postComment(id, commentValue);
    const beersResponse = await requestBeers();
    beersRepository.beers = beersResponse.map(responseBeer =>
      createBeer(responseBeer)
    );
    let foundBeer;
    for (let i = 0; i < beersRepository.beers.length; i++) {
      if (beersRepository.beers[i].id === id) {
        foundBeer = beersRepository.beers[i];
      }
    }
    modalRender(foundBeer);
  });

  const body = document.querySelector("body");
  body.classList.add("lock-scroll");
  const closeModalElements = document.querySelectorAll(
    ".close-icon i, #beer-detail-veil"
  );

  closeModalElements.forEach(closeModalElement => {
    closeModalElement.addEventListener("click", () => {
      beerDetail.classList.toggle("beer-detail-show");
      body.classList.remove("lock-scroll");
    });
  });
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
