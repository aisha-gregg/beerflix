import { createToggleModalEvents } from "./main.js";

export function renderBeers(beers) {
  const beerList = document.querySelector("#beer-list");

  let result = "";

  for (let i = 0; i < beers.length; i++) {
    const beer = beers[i];
    result += `
    <div class="beer" data-id="${beer.id}">
      <p>${beer.name}</p>
      <p>${beer.description}</p>
      <img src="${beer.photo}" alt="" />
    </div>
    `;
  }

  beerList.innerHTML = result;
  createToggleModalEvents();
}
