import React from 'react';
import styled from 'styled-components';
import MyPorfolio from '../components/Main/MyPorfolio';
import NewsArticle from '../components/Common/NewsArticle';
import { ARTICLE_DUMMY } from './../assets/data/ARTICLE_DUMMY';

const Main = () => {
  return (
    <St.MainContainer>
      <MyPorfolio />
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
};
