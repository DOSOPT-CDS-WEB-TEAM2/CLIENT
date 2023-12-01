import React from 'react';
import styled from 'styled-components';
import { RedImage, BlueImage, UpSmallIcon, DownSmallIcon } from '../../assets';

const EachPortfolio = ({ portfolio }) => {
  const { code, name, currentPrice, fluctuationRate } = portfolio;
  return (
    <St.EachPortfolioContainer>
      <St.FlexedColumnContainer>
        <St.Name>{code}</St.Name>
        <St.Company>{name}</St.Company>
      </St.FlexedColumnContainer>
      <St.FlexedRowContainer>
        <St.GraphImg>
          {fluctuationRate > 0 ? <img src={RedImage} alt="상승그래프" /> : <img src={BlueImage} alt="하강그래프" />}
        </St.GraphImg>
        <St.FlexedColumnContainer $align="right">
          <St.Price>{currentPrice}</St.Price>
          <St.Percentage $percentage={fluctuationRate}>
            {fluctuationRate > 0 ? (
              <St.ArrowIcon src={UpSmallIcon} alt="상승화살표" />
            ) : (
              <St.ArrowIcon src={DownSmallIcon} alt="하강화살표" />
            )}
            {Math.abs(fluctuationRate).toFixed(2)}%
          </St.Percentage>
        </St.FlexedColumnContainer>
      </St.FlexedRowContainer>
    </St.EachPortfolioContainer>
  );
};

export default EachPortfolio;

const St = {
  EachPortfolioContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 1rem 0;
  `,
  FlexedColumnContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ $align }) => $align && 'flex-end'};

    width: ${({ align }) => align && '9rem'};
  `,
  FlexedRowContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,

  Name: styled.div`
    margin: 1rem 0;

    color: ${({ theme }) => theme.colors.gray_1};
    ${({ theme }) => theme.fonts.roboto_18_bold};
  `,
  Price: styled.div`
    margin: 1rem 0;

    ${({ theme }) => theme.fonts.productsans_14_bold}
  `,
  Company: styled.div`
    color: ${({ theme }) => theme.colors.gray_2};
    ${({ theme }) => theme.fonts.roboto_12_cond};
  `,
  Percentage: styled.div`
    display: inline-flex;
    align-items: flex-end;
    justify-content: center;

    width: 7.1rem;
    height: 2.5rem;
    margin: 0 0 -0.4rem;
    padding: 0.4rem 1rem;

    border-radius: 0.5rem;
    ${({ theme }) => theme.fonts.productsans_14_bold};

    color: ${({ theme, $percentage }) => ($percentage > 0 ? theme.colors.red_main : theme.colors.blue_main)};
    background-color: ${({ theme, $percentage }) =>
      $percentage > 0 ? theme.colors.red_background : theme.colors.blue_background};
  `,
  GraphImg: styled.div`
    padding: 1rem;
  `,
  AddButton: styled.div`
    display: flex;
    align-items: end;

    color: ${({ theme }) => theme.colors.blue_main};
    ${({ theme }) => theme.fonts.rototo_12_bold};
  `,
  ArrowIcon: styled.img`
    margin: auto;
    margin-right: 0.4rem;
  `,
};
