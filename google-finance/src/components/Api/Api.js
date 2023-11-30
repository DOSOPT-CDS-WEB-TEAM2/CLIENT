import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

/** api 인스턴스 생성 */
export const API = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
