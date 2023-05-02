import CONFIG from '../../globals/config.js';

const createRestoItemTemplate = (resto) => `
<div class="card">
<img class="gambar" src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${resto.name}">
<div class="kota">${resto.city}</div>
<div class="card_content">
    <p tabindex="0" class="rating"> Rating : <b>${resto.rating}</b   ></p>
    <p tabindex="0"  class="card_title">${resto.name}</p>
    <div tabindex="0" class="card_desc">${resto.description.slice(0, 500)}...</div>
</div>
<h3 class="container-detail">
<a href="./#/detail/${resto.id}">detail</a>
</h3>
</div>`;

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
  <div class="image" id="image">
  <img class="image-detail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  </div>
  <div class="descripsi">
  <h1 class="detail-title" id="resto-title"> ${resto.name} </h1>
  
  <div class="info">
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${resto.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${resto.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${resto.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${resto.description}</p>
    </div>
  </div>
  </div>
`;

const createRestoReviewTemplate = (reviews) => `
  <div class="review">
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p class="komen">${reviews.review}</p>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
