const API_URL = 'http://localhost:8080/api/vh'; // Cambia la URL base según la configuración de tu backend

const hotelService = {
  async createHotel(data) {
    const response = await fetch(`${API_URL}/hotels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getHotelById(id) {
    const response = await fetch(`${API_URL}/hotels/${id}`);
    return response.json();
  },

  async getAllHotels() {
    const response = await fetch(`${API_URL}/hotels`);
    return response.json();
  },

  async deleteHotelById(id) {
    await fetch(`${API_URL}/hotels/${id}`, {
      method: 'DELETE',
    });
  },

  async updateHotel(id, data) {
    const response = await fetch(`${API_URL}/hotel/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async partialUpdateHotel(id, data) {
    const response = await fetch(`${API_URL}/hotels/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default hotelService;
