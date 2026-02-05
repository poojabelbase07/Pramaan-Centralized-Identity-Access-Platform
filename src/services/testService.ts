import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const testBackend = async () => {
  const response = await axios.get(`${API_URL}/test/hello`);
  return response.data;
};

export const getStates = async () => {
  const response = await axios.get(`${API_URL}/test/states`);
  return response.data;
};