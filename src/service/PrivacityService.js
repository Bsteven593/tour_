// service/hotelService.js

import axios from 'axios';

const API_URL_HOTEL = 'http://localhost:8080/api/v1/hotels'; 

let token = null;

export const setToken = (newToken) => {
    token = `Bearer ${newToken}`;
};

export const createMessage = async (message) => {
    const { data } = await axios.post('http://localhost:8080/api/v1/messages', message, {
        headers: {
            Authorization: token,
        },
    });
    return data;
};

export const getHotel = (id) => {
    return axios.get(`${API_URL_HOTEL}/${id}`, {
        headers: {
            Authorization: token,
        },
    }).then(response => response.data);
};

export const getHotelAll = () => {
    return axios.get(API_URL_HOTEL, {
        headers: {
            Authorization: token,
        },
    }).then(response => response.data);
};

export const createHotel = (data) => {
    return axios.post(API_URL_HOTEL, data, {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
    }).then(response => response.data);
};

export const updateHotel = (id, data) => {
    return axios.put(`${API_URL_HOTEL}/${id}`, data, {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
    }).then(response => response.data);
};

export const deleteHotel = (id) => {
    return axios.delete(`${API_URL_HOTEL}/${id}`, {
        headers: {
            Authorization: token,
        },
    }).then(response => response.data);
};
