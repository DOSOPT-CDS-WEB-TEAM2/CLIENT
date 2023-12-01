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

export const FetchArticleData = async () => {
  try {
    const response = await API.get(`/news`);
    return response.data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error; // 에러를 상위로 전파
  }
};

export const FetchMarketData = async () => {
  try {
    const response = await API.get(`/stock-index`);
    return response.data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error; // 에러를 상위로 전파
  }
};
