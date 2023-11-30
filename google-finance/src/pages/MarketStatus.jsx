import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import HeaderIndex from '../components/MarketStatus/HeaderIndex/HeaderIndex';
import MarketCategory from '../components/MarketStatus/MarketUSA/MarketCategory';
import MarketUSA from '../components/MarketStatus/MarketUSA/MarketUSA';
import { MARKET_STATUS_USA } from '../assets/data';

const USA = '미주';
const MID_EAST_AFRICA = '유럽, 중동, 아프리카';

const MarketStatus = () => {
  const MARKET = MARKET_STATUS_USA;
  return (
    <HomeContainer>
      <HeaderIndex />
      <MarketCategory category={USA} />

      {MARKET.map((MARKET, index) => (
        <div key={index}>
          <MarketHr />
          <MarketUSA
            title={MARKET.name}
            stockIndex={MARKET.currentStockIndex}
            fluctuationRate={MARKET.fluctuationRate}
          />
        </div>
      ))}

      <MarketCategory category={MID_EAST_AFRICA} />
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const MarketHr = styled.hr`
  position: relative;
  width: 92%;
  margin: 0 auto;
  border-top: 0.03rem solid ${(props) => props.theme.colors.gray_4};
`;

export default MarketStatus;
