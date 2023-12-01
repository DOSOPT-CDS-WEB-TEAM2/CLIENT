import React, { useEffect, useState } from 'react';
import { GraphRed3xImage, ArrowUpSmallIcon } from '../../../assets';
import styled from 'styled-components';
import { FetchMarketData } from '../../Api/FetchData';
import { PercentButton } from '../../Common/PercentButton';
import { CommonRateButton } from '../../Common/buttons';
import theme from '../../../styles/theme';

const MarketTotal = () => {
  const [marketStatus, setMarketStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketStatus = async () => {
      try {
        const data = await FetchMarketData();
        console.log('Market USA Data:', data);
        setMarketStatus(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMarketStatus();
  }, []);

  if (error) {
    return <div>Error during fetch: {error.message}</div>;
  }

  if (!marketStatus) {
    return <div>Loading...</div>;
  }

  const continents = Object.entries(marketStatus);

  const renderContinentData = (continent) => {
    const continentData = continents.find(([c]) => c === continent);
    return continentData && <ContinentData data={continentData[1]} />;
  };

  return (
    <div>
      {renderContinentData('유럽')}
      <St.Line />
      {renderContinentData('중동')}
      <St.Line />
      {renderContinentData('아프리카')}
      <St.Line />
    </div>
  );
};

const ContinentData = ({ data }) => (
  <div>
    {data.map((item, index) => (
      <React.Fragment key={item.id}>
        <MarketItem {...item} />
        {index !== data.length - 1 && <St.Line />}
      </React.Fragment>
    ))}
  </div>
);

const MarketItem = ({ name, currentStockIndex, fluctuationRate }) => {
  const isUp = fluctuationRate > 0;

  return (
    <St.Container>
      <St.TitleContainer>
        <St.Title>{name}</St.Title>
        <St.Category>지수</St.Category>
      </St.TitleContainer>
      <St.Graph src={GraphRed3xImage} alt="지수-그래프" />
      <St.RateSection>
        <St.StockIndex>{currentStockIndex}</St.StockIndex>
        <PercentButton isUp={isUp} isSmall={true} value={`${Math.abs(fluctuationRate)}%`} />
      </St.RateSection>
    </St.Container>
  );
};
const St = {
  Container: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 7rem;
    padding: 1rem 1.5rem;
  `,

  Graph: styled.img`
    margin-right: 3rem;
  `,

  Title: styled.h1`
    ${(props) => props.theme.fonts.roboto_14_cond};
  `,

  Category: styled.p`
    ${(props) => props.theme.fonts.roboto_12_cond};
  `,

  StockIndex: styled.p`
    ${(props) => props.theme.fonts.productsans_18_bold};
  `,

  TitleContainer: styled.span`
    display: flex;
    flex-direction: column;

    width: 34rem;
  `,
  RateSection: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    width: 7rem;
  `,
  Line: styled.hr`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 93%;
    height: 0.05rem;
    margin: 0 auto;
    border: 0;

    background-color: #d5d5d5;
  `,
};

export default MarketTotal;
