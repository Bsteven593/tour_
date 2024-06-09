const API_URL = 'http://localhost:8080/api/vre'; // Cambia la URL base según la configuración de tu backend

const restaurantService = {
  async createRestaurant(data) {
    const response = await fetch(`${API_URL}/restaurants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getRestaurantById(id) {
    const response = await fetch(`${API_URL}/restaurants/${id}`);
    return response.json();
  },

  async getAllRestaurants() {
    const response = await fetch(`${API_URL}/restaurants`);
    return response.json();
  },

  async deleteRestaurantById(id) {
    await fetch(`${API_URL}/restaurants/${id}`, {
      method: 'DELETE',
    });
  },

  async updateRestaurant(id, data) {
    const response = await fetch(`${API_URL}/restaurant/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async partialUpdateRestaurant(id, data) {
    const response = await fetch(`${API_URL}/restaurants/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default restaurantService;
