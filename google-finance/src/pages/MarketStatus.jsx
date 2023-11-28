import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/MarketStatus/HeaderIndex/HeaderIndex';
import MarketCategory from '../components/MarketStatus/MarketUSA/MarketCategory';
import MarketUSA from '../components/MarketStatus/MarketUSA/MarketUSA';
import NavHr from '../components/Nav/NavHr';
import { MARKET_STATUS_USA } from '../assets/data';

const MarketStatus = () => {
  const MARKET = MARKET_STATUS_USA;
  return (
    <HomeContainer>
      <HeaderIndex />
      <MarketCategory />

      {MARKET.map((MARKET, index) => (
        <div key={index}>
          <hr />
          <MarketUSA
            title={MARKET.name}
            stockIndex={MARKET.currentStockIndex}
            fluctuationRate={MARKET.fluctuationRate}
          />
        </div>
      ))}
       <MarketCategory />
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MarketStatus;
