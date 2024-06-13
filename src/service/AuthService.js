// src/service/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/auth/register'; // Cambia esta URL por la de tu API

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al crear usuario');
  }
};


export const createDriver = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/driver`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al crear conductor');
  }
};

export const createGuide = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/guide`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al crear guia');
  }
};






