import UrlParser from '../../routes/url-parser';
import RestauranAppsSource from '../../data/restaurantapps-source';
import { createRestoDetailTemplate, createFavoriteButtonTemplate , createRestoReviewTemplate} from '../template/template-creator';
import FavoriteButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';


const Detail = {
  async render() {
    return `
    <h1 class="title-content"> Detail Restaurant</h1>
    <div id="resto-detail" class="row"></div>
    <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestauranAppsSource.detailrestaurant(url.id);
    const restoContainer = document.querySelector('#resto-detail');   
    const likeButtonContainer = document.querySelector('#favoriteButtonContainer');
 
    restoContainer.innerHTML = createRestoDetailTemplate(detail);
    likeButtonContainer.innerHTML = createFavoriteButtonTemplate();

    restoContainer.innerHTML += `
    <h2 class="judul-review">Reviews Restaurant</h2>
    <div id="resto-review"></div>
  `;
    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantDB,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
