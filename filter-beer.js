import { renderBeers } from "./renderer.js";
import { beersRepository } from "./beers-repository.js";
import { sortBeers } from "./sort-beers.js";

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
  return beersRepository.getBeers({ name });
}

function filterBeersByDate(date) {
  return beersRepository.beers.filter(
    beer => beer.date.getTime() >= date.getTime()
  );
}
