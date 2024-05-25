const API_URL = 'http://localhost:8080/api/vu'; // Cambia la URL base según la configuración de tu backend

const userService = {
  async createUser(data) {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getUserById(id) {
    const response = await fetch(`${API_URL}/users/${id}`);
    return response.json();
  },

  async getAllUsers() {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
  },

  async deleteUserById(id) {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
  },

  async updateUser(id, data) {
    const response = await fetch(`${API_URL}/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async partialUpdateUser(id, data) {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default userService;