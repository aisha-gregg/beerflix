import { requestBeers } from "./request-beers.js";
import { createBeer } from "./create-beer.js";

export async function renderBeers() {
  const responseBeers = await requestBeers();
  const beers = responseBeers.map(responseBeer => createBeer(responseBeer));
  const beerList = document.querySelector("#beer-list");
  beerList.innerHTML = `
    <article class<%="beer"%>>
        <img src="" alt="" />
        <p>Berr</p>
        <p>Price:20</p>
    </article>

    <article class="beer">
        <img src="" alt="" />
        <p>Berr lala,</p>
        <p>Price:100</p>
    </article>`;
}
<h1><%= message %></h1>