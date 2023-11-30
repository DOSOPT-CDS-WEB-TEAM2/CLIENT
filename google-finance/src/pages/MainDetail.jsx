import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/Detail/HeaderIndex/HeaderIndex';
import { PercentButton, PercentButtonContainer } from '../components/Common/PercentButton';
import MainInfo from '../components/Detail/MainInfo/MainInfo';
import InOutComeInfo from '../components/Detail/InOutCome/InOutComeInfo';
import CompareHeader from '../components/Detail/Compare/CompareHeader';
import EachPortfolio from '../components/Main/EachPortfolio';
import NewsArticle from '../components/Common/NewsArticle';
import MarketNews from '../components/Detail/MarketNews';

const MainDetail = () => {
  const myPortfolio = {
    name: 'TSLA',
    company: 'Tesla Inc',
    imageUrl: 'path-to-your-image',
    price: '$1000', // or any other format you desire
    percentage: 2.2, // or any other numeric value representing the percentage
  };
  return (
    <HomeWrapper>
      <HeaderIndex />
      <MainInfo />
      <CompareHeader />
      <EachPortfolio portfolio={myPortfolio} />
      <MarketNews />
      <InOutComeInfo />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MainDetail;
