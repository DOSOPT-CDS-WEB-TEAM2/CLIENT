import React from 'react';
import CompareHeader from './CompareHeader';
import EachPortfolio from '../../Main/EachPortfolio';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CompareIndexContainer from './CompareIndexContainer';
import CompareIndex from './CompareIndex';

const Compare = () => {
  const [compareData, setCompareData] = useState([]);
  useEffect(() => {
    const fetchCompareData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/stock`, {
          params: {
            type: 'chemistry',
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setCompareData(response.data);
      } catch (error) {
        console.error('에러:', error);
      }
    };
    fetchCompareData();
  }, []);
  return (
    <>
      <CompareHeader />
      {compareData.slice(0, 5).map((each, idx) => (
        <div key={idx}>
          <EachPortfolio key={idx} portfolio={each} />
        </div>
      ))}
      <CompareIndexContainer>
        {' '}
        {compareData.slice(5, 8).map((each, idx) => (
          <div key={idx}>
            <CompareIndex key={idx} index={each} />
          </div>
        ))}
      </CompareIndexContainer>
    </>
  );
};

export default Compare;
