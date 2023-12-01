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
    throw error;
  }
};

export const FetchStocks = async () => {
  try {
    const response = await API.get('/stock', { params: { order: 'trade_asc' } });
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Failed to fetch stock data');
      return [];
    }
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
};
