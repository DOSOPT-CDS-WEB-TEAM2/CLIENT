import React from 'react';
import CompareHeader from './CompareHeader';
import EachPortfolio from '../../Main/EachPortfolio';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompareIndexContainer from './CompareIndexContainer';
import CompareIndex from './CompareIndex';
import { FetchCompareData } from '../Api/fetchDetailData';

const Compare = () => {
  const [compareData, setCompareData] = useState([]);
  useEffect(() => {
    const fetchCompareData = async () => {
      try {
        const response = await FetchCompareData();
        setCompareData(response);
      } catch (error) {
        console.error('에러:', error);
      }
    };
    fetchCompareData();
  }, []);
  return (
    <St.CompareContainer>
      <CompareHeader />
      {compareData.slice(0, 5).map((each, idx) => (
        <div key={idx}>
          <EachPortfolio key={idx} portfolio={each} />
          {idx !== 4 && <St.Line />}
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
      <St.Line2 />
    </St.CompareContainer>
  );
};

export default Compare;

const St = {
  CompareContainer: styled.article`
    padding: 0 1.5rem;
  `,

  Line: styled.hr`
    width: 34.5rem;
    height: 0.05rem;
    padding: 0 1.5rem;

    border: 0;
    background-color: ${({ theme }) => theme.colors.gray_3};
  `,
  Line2: styled.hr`
    width: 100%;
    height: 0.3rem;
    margin-top: 1.6rem;
    margin-bottom: 0;

    border: 0.3rem;
    background-color: ${({ theme }) => theme.colors.gray_4};
  `,
};
