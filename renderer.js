import { requestBeers } from "./request-beers.js";
import { createBeer } from "./create-beer.js";
import { beersRepository } from "./beers-repository.js";

export async function renderBeers() {
  const responseBeers = await requestBeers();
  beersRepository.beers = responseBeers.map(responseBeer =>
    createBeer(responseBeer)
  );
  const beerList = document.querySelector("#beer-list");

  let result = "";

  for (let i = 0; i < beersRepository.beers.length; i++) {
    const beer = beersRepository.beers[i];
    result += `
    <div class="beer" data-id="${beer.id}">
    <p>${beer.name}</p>
    <p>${beer.description}</p>
    <img src="${beer.photo}" alt="" />
    </div>
    `;
  }
  beerList.innerHTML = result;
}
