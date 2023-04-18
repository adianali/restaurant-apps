class footerRestaurantKu extends HTMLElement{
    connectedCallback(){
        this.render();

    }

    render() {
        this.innerHTML = `<footer>
        <p  tabindex="0">Copyright &copy; 2023 - RestaurantKu.</p>
        </footer>  `;
    }
}
customElements.define("restaurantku-footer", footerRestaurantKu)