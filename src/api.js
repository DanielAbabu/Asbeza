import axios from 'axios';

const API_URL = 'https://your-backend-api-url';

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchIngredients = async () => {
    try {
      const response = await axios.get(`${API_URL}/ingredients`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  export const fetchMeals = async () => {
    try {
      const response = await axios.get(`${API_URL}/meals`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  export const fetchMealDetails = async (mealId) => {
    try {
      const response = await axios.get(`${API_URL}/meals/${mealId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };