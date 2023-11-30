import React from 'react';
import styled from 'styled-components';
const StockIndex = ({ stock }) => {
  const { name, currentStockIndex, fluctuationRate } = stock;

  return (
    <St.StockIndexContainer>
      {name}
      {currentStockIndex}
      {fluctuationRate}
    </St.StockIndexContainer>
  );
};

export default StockIndex;

const St = {
  StockIndexContainer: styled.article`
    width: 9rem;
    height: 7.6rem;

    margin: 0 1rem;
  `,
};
