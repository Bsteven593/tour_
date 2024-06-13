
const API_URL = 'http://localhost:8080/api/vtr'; // Cambia la URL base según la configuración de tu backend

const transportService = {
  async createTransport(data) {
    const response = await fetch(`${API_URL}/transports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getTransportById(id) {
    const response = await fetch(`${API_URL}/transports/${id}`);
    return response.json();
  },

  async getAllTransports() {
    const response = await fetch(`${API_URL}/transports`);
    return response.json();
  },

  async deleteTransportById(id) {
    await fetch(`${API_URL}/transports/${id}`, {
      method: 'DELETE',
    });
  },

  async updateTransport(id, data) {
    const response = await fetch(`${API_URL}/transport/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async partialUpdateTransport(id, data) {
    const response = await fetch(`${API_URL}/transports/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default transportService;
