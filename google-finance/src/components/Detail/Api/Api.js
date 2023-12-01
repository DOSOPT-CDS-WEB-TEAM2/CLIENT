import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

export const API = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
