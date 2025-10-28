import axios from "axios";

const BASE_URL = `https://www.themealdb.com/api/json/v1/1/categories.php`;

export const fetchCategories = async () => {
  const response = axios.get(BASE_URL);
  return response;
};
