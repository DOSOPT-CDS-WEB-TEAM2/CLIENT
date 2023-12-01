import axios from 'axios';
import { API } from './Api';

export const FetchMarketData = async () => {
  try {
    const response = await API.get(`/stock-index`);
    return response.data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error; // 에러를 상위로 전파
  }
};
