import { renderBeers } from "./renderer.js";
import { beersRepository } from "./beers-repository.js";
import { sortBeers } from "./sort-beers.js";

export function createFilterEvents() {
  const input = document.querySelector("#search-beer");
  input.addEventListener("input", event => {
    const filteredBeersByName = filterBeersByName(event.target.value);
    const sortedFilteredBeers = sortBeers(filteredBeersByName);
    renderBeers(sortedFilteredBeers);
  });

  const date = document.querySelector("#search-beer-date");
  date.addEventListener("input", event => {
    const date = new Date(event.target.value);
    const filteredBeersByDate = filterBeersByDate(date);
    const sortedFilteredBeers = sortBeers(filteredBeersByDate);
    renderBeers(sortedFilteredBeers);
  });
}

function filterBeersByName(name) {
  let foundBeers = [];
  for (let i = 0; i < beersRepository.beers.length; i++) {
    const beer = beersRepository.beers[i];
    if (beer.name.toLowerCase().includes(name.toLowerCase())) {
      foundBeers.push(beer);
    }
  }
  return foundBeers;
}

function filterBeersByDate(date) {
  let foundBeers = [];
  for (let i = 0; i < beersRepository.beers.length; i++) {
    const beer = beersRepository.beers[i];
    if (beer.date.getTime() >= date.getTime()) {
      foundBeers.push(beer);
    }
  }
  return foundBeers;
}
