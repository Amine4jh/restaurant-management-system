import axios from "axios";

const BASE_URL = `https://punkapi.online/v3/beers?page=1`;

export const fetchMeals = async () => {
  const response = axios.get(BASE_URL);
  return response;
};
