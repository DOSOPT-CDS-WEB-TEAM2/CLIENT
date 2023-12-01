import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EachPortfolio from './EachPortfolio';
import { SmallIcon } from '../../assets';
import { FetchPortfolioData } from '../Api/FetchData';

const MyPorfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const portfolioData = await FetchPortfolioData();
        setPortfolios(portfolioData);
      } catch (error) {
        return <div>{error.message}</div>;
      }
    };
    getData();
  }, []);

  return (
    <St.MyPortfolioContainer>
      <St.MyPortfolioHeader>
        <St.Title>내 포트폴리오</St.Title>
        <St.AddButton>
          <img src={SmallIcon} alt="추가아이콘" />
          추가
        </St.AddButton>
      </St.MyPortfolioHeader>
      {portfolios.map((each, idx) => (
        <div key={idx}>
          <EachPortfolio key={idx} portfolio={each} />
          {idx !== portfolios.length - 1 && <St.Line />}
        </div>
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

    padding: 2rem 1.4rem;
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
    align-items: center;

    margin-bottom: -0.5rem;

    color: ${({ theme }) => theme.colors.blue_main};
    ${({ theme }) => theme.fonts.roboto_12_bold};
  `,

  Line: styled.hr`
    height: 0.05rem;
    margin: 0.7rem 0;

    border: 0;
    background-color: ${({ theme }) => theme.colors.gray_3};
  `,
};
