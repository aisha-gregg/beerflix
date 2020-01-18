import { createToggleModalEvents } from "./main.js";

export function renderBeers(beers) {
  const beerList = document.querySelector("#beer-list");

  const result = beers.reduce((previousValue, currentValue) => {
    return (
      previousValue +
      `
      <div class="beer" data-id="${currentValue.id}">
        <p>${currentValue.name}</p>
        <p>${currentValue.description}</p>
        <img src="${currentValue.photo}" alt="" />
      </div>
      `
    );
  }, "");

  beerList.innerHTML = result;
  createToggleModalEvents();
}
