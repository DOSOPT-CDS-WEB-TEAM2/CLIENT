import React from 'react';
import styled from 'styled-components';

const EachPortfolio = ({ portfolio }) => {
  const { name, company, imageUrl, price, percentage } = portfolio;
  return (
    <St.EachPortfolioContainer>
      <St.FlexedColumnContainer>
        <St.NameAndPrice>{name}</St.NameAndPrice>
        <St.Company>{company}</St.Company>
      </St.FlexedColumnContainer>
      <St.FlexedRowContainer>
        <St.GraphImg>
          이미지
          <img src={imageUrl} alt="그래프" />
        </St.GraphImg>
        <St.FlexedColumnContainer align="right">
          <St.NameAndPrice>{price}</St.NameAndPrice>
          <St.Percentage percentage={percentage}>{Math.abs(percentage)}%</St.Percentage>
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
    align-items: ${({ align }) => align && 'flex-end'};
  `,
  FlexedRowContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,

  NameAndPrice: styled.div`
    margin: 1rem 0;

    color: ${({ theme }) => theme.colors.gray_1};
    ${({ theme }) => theme.fonts.roboto_18_bold};
  `,
  Company: styled.div`
    color: ${({ theme }) => theme.colors.gray_2};
    ${({ theme }) => theme.fonts.roboto_12_cond};
  `,
  Percentage: styled.div`
    display: inline-flex;
    /* align-items: center; */
    align-items: flex-end;
    width: 7.7rem;
    height: 2.5rem;
    margin: 0 0 -0.4rem;
    padding: 0.4rem 1rem;

    border-radius: 0.5rem;
    ${({ theme }) => theme.fonts.productsans_14_bold};

    color: ${({ theme, percentage }) => (percentage > 0 ? theme.colors.red_main : theme.colors.blue_main)};
    background-color: ${({ theme, percentage }) =>
      percentage > 0 ? theme.colors.red_background : theme.colors.blue_background};
  `,
  GraphImg: styled.div`
    margin: 1rem 0;
    padding: 1rem;
  `,
  AddButton: styled.div`
    display: flex;
    align-items: end;
    color: ${({ theme }) => theme.colors.blue_main};
    ${({ theme }) => theme.fonts.rototo_12_bold};
  `,
};
