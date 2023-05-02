import RestauranAppsSource from '../../data/restaurantapps-source';
import { createRestoItemTemplate } from '../template/template-creator';
import '../../component/review-web.js';

const home = {
  async render() {
    return `
  <restauranku-jumbotron></restauranku-jumbotron>
    <article class="intro">
    <h2 tabindex="0"> 9 Restaurant terbaik disembilan kota besar </h2>
    <p tabindex="0"> 
      &nbsp; Kamu sedang mencari restoran yang ramai dikunjungi karena suasana nyaman, spot foto bagus, dan makanannya enak. Ada 9 kota besar yang menurut RestaurantKu menjadi rekomendasi tempat makan yang wajib kamu coba. 
       Memang ada banyak restoran yang ramai terdekat setiap kamu menggunakan google maps, lalu mencari sebuah restoran terdekat dengan menggunakan smartphone yang kamu miliki.Hasilnya nanti akan ada beberapa restoran yang bisa kamu pilih lalu ada puluhan ribu orang yang review restoran tersebut, sehingga kamu tinggal memilih tempat makan berdasarkan review orang-orang yang ada di google maps.
      <br><br>Tanpa panjang lebar, berikut ini rekomendasi restaurant yang ramai dikunjungi berdasarkan rekomendasi RestaurantKu.
    </p>
  </article>
  
  <section class="content">
          <h1 class="judul">Explore Restaurant</h1>
          <div class="card-list" id="list"></div>
  </section>

  <review-web></review-web>
      `;
  },

  async afterRender() {
    const restaurants = await RestauranAppsSource.home();
    const restaurantsitem = document.querySelector('#list');
    console.log(restaurants);
    restaurants.forEach((restaurant) => {
      restaurantsitem.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default home;
