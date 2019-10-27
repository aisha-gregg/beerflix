import { renderBeers } from "./renderer.js";
import { beersRepository } from "./beers-repository.js";

export function createFilterEvents() {
  const input = document.querySelector("#search-beer");
  input.addEventListener("input", event => {
    let foundBeers = [];
    for (let i = 0; i < beersRepository.beers.length; i++) {
      const beer = beersRepository.beers[i];
      if (beer.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        foundBeers.push(beer);
      }
    }
    foundBeers.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });

    renderBeers(foundBeers);
  });
}
