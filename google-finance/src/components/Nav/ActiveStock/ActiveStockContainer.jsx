import React from 'react';
import StockList from './StockList';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const ActiveStockContainer = () => (
  <St.ActiveStockContainer>
    <St.NavTitle>가장 거래가 활발한 주식</St.NavTitle>
    <StockList />
  </St.ActiveStockContainer>
);

const St = {
  ActiveStockContainer: styled.div`
    padding-bottom: 1rem;
  `,

  NavTitle: styled.div`
    color: ${theme.colors.gray_2};
    ${theme.fonts.roboto_14};
    margin: 1rem 0;
  `,
};

export default ActiveStockContainer;
