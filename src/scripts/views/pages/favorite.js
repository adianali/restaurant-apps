import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb'
import {createRestoItemTemplate} from '../template/template-creator'
const favorite = {
  async render() {
    return `
    <div class="content">
    <h1 class="favorite-heading">Restaurant Favorite Mu</h1>
    <div id="resto-favorite" class="card-list">

    </div>
  </div>
      `;
  },

  async afterRender() {
  const resto = await FavoriteRestaurantDB.getAllRestaurants();
  const restoContainer = document.querySelector('#resto-favorite');
  
  resto.forEach((resto) => {
    restoContainer.innerHTML += createRestoItemTemplate(resto);  
  });
  },
};

export default favorite;
