class navRestaurantKu extends HTMLElement{
    connectedCallback(){
        this.render();

    }

    render() {
        this.innerHTML = `<nav>
        <div class="logo">
        <a href="index.html"><h4>RestaurantKu</h4></a>
        </div>
        <button class="garis">
            <span ></span>
            <span ></span>
            <span ></span>
        </button>

        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Favorite</a></li>
            <li><a href="https://github.com/adianali">About Us</a></li>
        </ul>
       
    </nav>`;
    }
}
customElements.define("restaurantku-nav", navRestaurantKu)