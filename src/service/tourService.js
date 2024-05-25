const API_URL = 'http://localhost:8080/api/vto'; // Cambia la URL base según la configuración de tu backend

const tourService = {
  async createTour(data) {
    const response = await fetch(`${API_URL}/tours`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getTourById(id) {
    const response = await fetch(`${API_URL}/tours/${id}`);
    return response.json();
  },

  async getAllTours() {
    const response = await fetch(`${API_URL}/tours`);
    return response.json();
  },

  async deleteTourById(id) {
    await fetch(`${API_URL}/tours/${id}`, {
      method: 'DELETE',
    });
  },

  async updateTour(id, data) {
    const response = await fetch(`${API_URL}/tours/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async partialUpdateTour(id, data) {
    const response = await fetch(`${API_URL}/tours/${id}`, {
      method: 'PATCH', // Cambiado a PATCH ya que es una actualización parcial
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default tourService;