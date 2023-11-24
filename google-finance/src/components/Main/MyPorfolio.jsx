import React from 'react';
import styled from 'styled-components';
import EachPortfolio from './EachPortfolio';

const MyPorfolio = () => {
  const PORTFOLIO_DUMMY = [
    {
      id: 1,
      name: '051910',
      company: 'LG화학',
      imgUrl: null,
      price: '\\512,000.00',
      percentage: 8.7,
    },
    {
      id: 2,
      name: 'APPL',
      company: '애플',
      imgUrl: null,
      price: '$182.41',
      percentage: -0.26,
    },
  ];
  return (
    <St.MyPortfolioContainer>
      <St.MyPortfolioHeader>
        <St.Title>내 포트폴리오</St.Title>
        <St.AddButton>추가</St.AddButton>
      </St.MyPortfolioHeader>
      {PORTFOLIO_DUMMY.map((each, idx) => (
        <>
          <EachPortfolio key={idx} portfolio={each} />
          {idx !== PORTFOLIO_DUMMY.length - 1 && <St.Line />}
        </>
      ))}
    </St.MyPortfolioContainer>
  );
};

export default MyPorfolio;

const St = {
  MyPortfolioContainer: styled.div`
    width: 37.5rem;
    border-top: 0.3rem solid;
    border-bottom: 0.3rem solid;
    border-color: ${({ theme }) => theme.colors.gray_4};

    padding: 2rem 1.5rem 1.4rem;
  `,
  MyPortfolioHeader: styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Title: styled.div`
    color: ${({ theme }) => theme.colors.gray_2};
    ${({ theme }) => theme.fonts.productsans_14};
  `,
  AddButton: styled.div`
    display: flex;
    align-items: end;
    color: ${({ theme }) => theme.colors.blue_main};
    ${({ theme }) => theme.fonts.rototo_12_bold};
  `,
  Line: styled.hr`
    margin: 0.7rem 0;
    border: 0;
    height: 0.05rem;
    background-color: ${({ theme }) => theme.colors.gray_3};
  `,
};
