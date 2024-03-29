import API_ENDPOINT from '../globals/api-endpoint';

class RestauranAppsSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailrestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    
    return responseJson.restaurant;
  }
}

export default RestauranAppsSource;
