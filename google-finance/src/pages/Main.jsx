import React from 'react';
import styled from 'styled-components';
import NewsArticle from '../components/Common/NewsArticle';
import { ARTICLE_DUMMY } from './../assets/data/ARTICLE_DUMMY';
import { STOCKINFO_OBJECT_DUMMY } from '../assets/data/STOCKINFO_OBJECT_DUMMY';
import StockIndex from '../components/Main/StockIndex';
const Main = () => {
  return (
    <St.MainContainer>
      <St.StockContainer>
        {STOCKINFO_OBJECT_DUMMY.map((stock, idx) => (
          <StockIndex key={idx} stock={stock} />
        ))}
      </St.StockContainer>

      {ARTICLE_DUMMY.map((article, idx) => (
        <NewsArticle
          key={idx}
          //key ={article.id}
          article={article}
        />
      ))}
    </St.MainContainer>
  );
};

export default Main;

const St = {
  MainContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
  StockContainer: styled.section`
    display: flex;
    flex-direction: row;

    margin: 0.4rem 0.5rem 1rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  `,
};
