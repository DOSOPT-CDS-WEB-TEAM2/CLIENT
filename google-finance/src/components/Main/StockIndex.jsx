import React from 'react';
import styled from 'styled-components';
const StockIndex = ({ stock }) => {
  const { name, currentStockIndex, fluctuationRate } = stock;

  return (
    <St.StockIndexContainer>
      <St.StockName>{name}</St.StockName>
      <St.StockCurrentIndex>{currentStockIndex}</St.StockCurrentIndex>
      {fluctuationRate}
    </St.StockIndexContainer>
  );
};

export default StockIndex;

const St = {
  StockIndexContainer: styled.article`
    display: inline-block;
    flex-direction: column;
    width: 11rem;
    height: 7.6rem;

    padding: 0 1rem;

    border-right: solid 0.05rem ${(props) => props.theme.colors.gray_3};
  `,
  StockName: styled.header`
    color: ${(props) => props.theme.colors.gray_1};
    ${(props) => props.theme.fonts.roboto_12_bold};
  `,
  StockCurrentIndex: styled.div`
    margin: 0.5rem 0;
    color: ${(props) => props.theme.colors.gray_2};
    ${(props) => props.theme.fonts.productsans_14};
  `,
};
