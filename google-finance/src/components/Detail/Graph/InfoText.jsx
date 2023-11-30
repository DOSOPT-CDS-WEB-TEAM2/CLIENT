import React, { useEffect } from 'react';
import styled from 'styled-components';
import InfoEach from './InfoEach';

const InfoText = ({
  previousDayIncrease,
  todayHighestPrice,
  todayLowestPrice,
  pastWeekHighestPrice,
  pastWeekLowestPrice,
  marketCapitalization,
  averageTrading,
  stockPriceReturn,
  dividendYield,
}) => {
  const CategoryList = [
    '전일종가',
    '일일 변동 폭',
    '52주 변동폭',
    '시가 총액',
    '평균 거래량',
    '주가 수익률',
    '배당 수익률',
  ];

  const Data = {
    전일종가: previousDayIncrease,
    '일일 변동 폭': `${todayHighestPrice} - ${todayLowestPrice}`,
    '52주 변동폭': `${pastWeekLowestPrice} - ${pastWeekHighestPrice}`,
    '시가 총액': marketCapitalization,
    '평균 거래량': averageTrading,
    '주가 수익률': `${stockPriceReturn}%`,
    '배당 수익률': ` ${dividendYield}%`,
  };

  return (
    <St.Container>
      {CategoryList.map((category) => (
        <InfoEach key={category} category={category} value={Data[category]} />
      ))}
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};

export default InfoText;
