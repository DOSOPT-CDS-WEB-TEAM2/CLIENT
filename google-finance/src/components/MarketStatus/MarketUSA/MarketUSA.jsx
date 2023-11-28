import React from 'react';
import { GraphRed3xImage, ArrowUpSmallIcon } from '../../../assets';
import styled from 'styled-components';
import { CommonRateButton } from '../../Common/buttons';

const MarketUSA = ({ title, stockIndex, fluctuationRate }) => {
  return (
    <St.Container>
      <St.TitleContainer>
        <St.Title>{title}</St.Title>
        <St.Category>지수</St.Category>
      </St.TitleContainer>
      <St.Graph src={GraphRed3xImage} alt="지수-그래프" />
      <St.RateSection>
        <St.StockIndex>{stockIndex}</St.StockIndex>
        <CommonRateButton>
          <img src={ArrowUpSmallIcon} />
          {fluctuationRate}%
        </CommonRateButton>
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
    padding: 0.9rem 1.3rem;
  `,

  Graph: styled.img`
    margin-right: 3.6rem;
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

  fluctiorate: styled.p``,

  TitleContainer: styled.span`
    display: flex;
    flex-direction: column;

    width: 34rem;
  `,
  RateSection: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export default MarketUSA;
