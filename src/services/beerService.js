import axios from "axios";

const API_URL = "https://thebeerapiv1.azurewebsites.net";

export const getBeerMenu = () => {
  return axios.get(`${API_URL}/beer/menu`);
};

export const getBeerDetails = (id) => {
  return axios.get(`${API_URL}/beer/${id}`);
};

export const getRandomBeer = () => {
  return axios.get(`${API_URL}/beer/random`);
};

export const searchBeers = (query) => {
  return axios.get(`${API_URL}/search?query=${query}`);
};
