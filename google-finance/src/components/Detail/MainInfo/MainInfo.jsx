import React, { useState } from 'react';
import Title from './Title';
import Price from './Price';
import MainGraph from '../Graph/MainGraph';
import { useEffect } from 'react';
import axios from 'axios';

const MainInfo = () => {
  const [stockData, setStockData] = useState({
    name: '',
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/stock/051910`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setStockData({
          ...stockData,
          name: response.data.name,
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
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Title title={stockData.name} />
      <Price currentPrice={stockData.currentPrice} />
      <MainGraph stockData={stockData} />
    </>
  );
};

export default MainInfo;
