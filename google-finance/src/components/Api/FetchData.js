import axios from 'axios';
import { API } from './Api';

export const FetchPortfolioData = async () => {
  try {
    const response = await API.get(`/portfolio`);
    return response.data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error; // 에러를 상위로 전파
  }
};

export const FetchNewsData = async () => {
  try {
    const response = await API.get(`/news`);
    return response.data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error; // 에러를 상위로 전파
  }
};
