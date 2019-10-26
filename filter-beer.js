import { renderBeers } from "./renderer.js";
import { beersRepository } from "./beers-repository.js";

export function createFilterEvents() {
  const input = document.querySelector("#search-beer");
  input.addEventListener("keypress", event => {
    let foundBeers = [];
    for (let i = 0; i < beersRepository.beers.length; i++) {
      const beer = beersRepository.beers[i];
      if (beer.name.includes(event.target.value)) {
        foundBeers.push(beer);
      }
    }
    renderBeers(foundBeers);
  });
}

export function filterbeers() {
  for (let i = 0; i < beersRepository.length; i++) {
    if (beersRepository.name === input.name) {
      beersRepository.filter("#search-beer");
    }
  }
}
