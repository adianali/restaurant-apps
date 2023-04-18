import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './component/app-bar.js';
import './component/jumbotron.js';
import './component/footer.js';

document.addEventListener("DOMContentLoaded", async () => {
   const Data = await import('../DATA.json');
   const datas = Data.default.restaurants;
   let dataCard = '';
   datas.forEach(function(data) {
       dataCard +=`
       <div class="card">
           <img class="gambar" src="${data.pictureId}" alt="${data.name}">
           <div class="kota">${data.city}</div>
           <div class="card_content">
               <p tabindex="0" class="rating"> Rating : <b>${data.rating}</b   ></p>
               <p tabindex="0"  class="card_title">${data.name}</p>
               <div tabindex="0" class="card_desc">${data.description.slice(0, 500)}...</div>
           </div>
       </div>
       `;
   });
   document.querySelector('#list').innerHTML = dataCard;
 });

const menu = document.querySelector('nav ul');
const garis = document.querySelector('.garis');

garis.addEventListener('click', function () {
   menu.classList.toggle('active');
});


