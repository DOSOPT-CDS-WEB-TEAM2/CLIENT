import React, { useEffect, useState } from 'react';
import { GraphRed3xImage, ArrowUpSmallIcon } from '../../../assets';
import styled from 'styled-components';
import { FetchMarketData } from '../../Api/FetchData';
import { PercentButton } from '../../Common/PercentButton';
import theme from '../../../styles/theme';

const MarketUSA = () => {
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

  // "미국"에 해당하는 부분을 추출
  const usMarketData = marketStatus?.미국;

  return (
    <div>
      {usMarketData.map((item, index) => (
        <React.Fragment key={item.id}>
          <MarketItem {...item} />
          {index !== usMarketData.length - 1 && <St.Line />}
        </React.Fragment>
      ))}
    </div>
  );
};
const MarketItem = ({ name, currentStockIndex, fluctuationRate }) => {
  const isUp = fluctuationRate > 0;

  return (
    <St.MarketUSAContainer>
      <St.TitleContainer>
        <St.Title>{name}</St.Title>
        <St.Category>지수</St.Category>
      </St.TitleContainer>
      <St.Graph src={GraphRed3xImage} alt="지수-그래프" />
      <St.RateSection>
        <St.StockIndex>{currentStockIndex}</St.StockIndex>
        <PercentButton isUp={isUp} isSmall={true} value={`${Math.abs(fluctuationRate)}%`} />
      </St.RateSection>
    </St.MarketUSAContainer>
  );
};
const St = {
  MarketUSAContainer: styled.article`
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

  Line: styled.hr`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 93%;
    height: 0.05rem;
    margin: 0 auto;
    border: 0;

    background-color: ${(props) => props.theme.colors.gray_3};
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
};

export default MarketUSA;
