import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Price from './Price';
import MainGraph from '../Graph/MainGraph';
import { useEffect } from 'react';
import axios from 'axios';

const MainInfo = () => {
  const [stockData, setStockData] = useState({
    title: '',
    currentPrice: '',
    fluctuationPrice: '',
    previousDayIncrease: '',
    todayLowestPrice: '',
    todayHighestPrice: '',
    pastWeekLowestPrice: '',
    pastWeekHighestPrice: '',
    marketCapitalization: '',
    averageTrading: '',
    stockPriceReturn: '',
    dividendYield: '',
  });

  const DATA_ARR_MAIN = ['1일', '5일', '1개월', '6개월', 'YTD', '1년'];
  useEffect(() => {
    const fetchData = async () => {
      console.log(import.meta.env.VITE_BASE_URL);
      try {
        console.log('요청 시작');
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/stock/051910`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setStockData({
          ...stockData,
          title: response.data.name,
          currentPrice: response.data.currentPrice,
          previousDayIncrease: response.data.previousDayIncrease,
          todayLowestPrice: response.data.todayLowestPrice,
          todayHighestPrice: response.data.todayHighestPrice,
          pastWeekLowestPrice: response.data.pastWeekLowestPrice,
          pastWeekHighestPrice: response.data.pastWeekHighestPrice,
          marketCapitalization: response.data.marketCapitalization,
          averageTrading: response.data.averageTrading,
          stockPriceReturn: response.data.stockPriceReturn,
          dividendYield: response.data.dividendYield,
        });
        console.log(response.data);
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Title title={stockData.title} />
      <Price currentPrice={stockData.currentPrice} />
      <MainGraph stockData={stockData} />
    </>
  );
};

export default MainInfo;
