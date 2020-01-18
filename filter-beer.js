import { renderBeers } from "./renderer.js";
import { beersRepository } from "./beers-repository.js";
import { sortBeers } from "./sort-beers.js";
import { requestBeers } from "./request-beers.js";
import { createBeer } from "./create-beer.js";

export function createFilterEvents() {
  const input = document.querySelector("#search-beer");
  input.addEventListener("input", async event => {
    const filteredBeersByName = await filterBeersByName(event.target.value);
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

async function filterBeersByName(name) {
  const beersReponse = await requestBeers({ name });
  beersRepository.beers = beersReponse.map(responseBeer =>
    createBeer(responseBeer)
  );
  return beersRepository.beers;
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
