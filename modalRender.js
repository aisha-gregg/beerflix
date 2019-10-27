export function modalRender(beer) {
  const beerDetail = document.querySelector("#beer-detail");
  let comments = "";
  for (let i = 0; i < beer.comments.length; i++) {
    comments += `
    <div>
      <p>${beer.comments[i].comment}</p>
    </div>
    `;
  }
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
                <span>Like ${beer.likes}</span>
                <img src="./images/beer-like.png" alt="" class="likes-logo" />
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
}
