import { renderBeers } from "./renderer.js";
import { beersRepository } from "./beers-repository.js";
import { filterbeers, createFilterEvents } from "./filter-beer.js";

function toggleBeerDetail(id) {
  const beerDetail = document.querySelector("#beer-detail");
  beerDetail.classList.toggle("beer-detail-show");
  let foundBeer;
  for (let i = 0; i < beersRepository.beers.length; i++) {
    if (beersRepository.beers[i].id === id) {
      foundBeer = beersRepository.beers[i];
    }
  }
  const modalResult = `
  
     <div class="modal-container">
      <div id="beer-detail-veil" class="veil"></div>
      <div class="beer-details">
        <div class="close-icon">
          <i class="fas fa-times"></i>
        </div>
        <div class="beer-wrapper" data-id="${foundBeer.id}">
          <div class="beer-content"> 
            <div class="beer-header">
              <h2>${foundBeer.name}</h2>
              <div class="beer-likes">
                <span>Like</span>
                <img src="./images/beer-like.png" alt="" class="likes-logo" />
              </div>
            </div>
            <p class="beer-description">${foundBeer.description}</p>
              
            <div class="comments">
              <textarea class="comments-input"> 
              </textarea>
              <button>Add Comment</button>
            </div>
          </div>
          <div class="beer-image-container">
            <img src="${foundBeer.photo}" alt="" class="beer-image"/>
          </div>
        </div>
      </div>
    </div>
  
  
    `;
  beerDetail.innerHTML = modalResult;

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

function createToggleModalEvents() {
  const elements = document.querySelectorAll(".beer");

  elements.forEach(element =>
    element.addEventListener("click", () => {
      const id = Number(element.dataset.id);
      toggleBeerDetail(id);
    })
  );
}

renderBeers().then(() => {
  createToggleModalEvents();
  createFilterEvents();
});
