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
        setStockData((prevData) => ({
          ...prevData,
          ...response.data,
        }));
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
