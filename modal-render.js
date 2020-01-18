import { postComment } from "./post-comment.js";
import { beersRepository } from "./beers-repository.js";

export function modalRender(beer) {
  const beerDetail = document.querySelector("#beer-detail");
  const comments = beer.comments.reduce(
    (previousValue, currentValue) =>
      previousValue +
      `
    <div>
      <p>${currentValue.comment}</p>
    </div>
    `,
    ""
  );
  const modalResult = `
     <div class="modal-container">
      <div id="beer-detail-veil" class="veil"></div>
      <div class="beer-details">
        <div class="close-icon">
          <i class="fas fa-times"></i>
        </div>
        <div class="beer-wrapper" data-id="${beer.id}">
          <div class="beer-content"> 
            <div class="beer-header">
              <h2>${beer.name}</h2>
              <div class="beer-likes">
                <span>Likes ${beer.likes}</span>
                <img src="/images/beer-like.png" alt="" class="likes-logo" />
              </div>
            </div>
            <p class="beer-description">${beer.description}</p>
              
            <div class="comments">
              <div class="comments-controls">
                <textarea class="comments-input"></textarea>
                <button id="add-comment">Add Comment</button>
              </div>
              <div class="comments-section">
                ${comments}
              </div>
            </div>
          </div>
          <div class="beer-image-container">
            <img src="${beer.photo}" alt="" class="beer-image"/>
          </div>
        </div>
      </div>
    </div>
    `;
  beerDetail.innerHTML = modalResult;
  addCommentEvents(beer.id);
  addCloseEvents();
}

function addCommentEvents(id) {
  const modalBody = document.querySelector("#add-comment");
  modalBody.removeEventListener("click", () => clickHandler(id));
  modalBody.addEventListener("click", () => clickHandler(id));
}

async function clickHandler(id) {
  const commentValue = document.querySelector(".comments-input").value;
  await postComment(id, commentValue);
  const beers = await beersRepository.getBeers();
  const foundBeer = beers.find(beer => beer.id === id);
  modalRender(foundBeer);
}

function addCloseEvents() {
  const beerDetail = document.querySelector("#beer-detail");
  const body = document.querySelector("body");
  body.classList.add("lock-scroll");
  const closeModalElements = document.querySelectorAll(
    ".close-icon i, #beer-detail-veil"
  );

  closeModalElements.forEach(closeModalElement => {
    closeModalElement.addEventListener("click", () => {
      history.pushState({}, "home", "/");
      beerDetail.classList.toggle("beer-detail-show");
      body.classList.remove("lock-scroll");
    });
  });
}
