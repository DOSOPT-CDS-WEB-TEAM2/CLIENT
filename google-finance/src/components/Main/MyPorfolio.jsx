import React from 'react';
import styled from 'styled-components';

const MyPorfolio = () => {
  return (
    <St.MyPortfolioContainer>
      <St.MyPortfolioHeader>
        <St.Title>내 포트폴리오</St.Title>
        <St.AddButton>추가</St.AddButton>
      </St.MyPortfolioHeader>
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
};
