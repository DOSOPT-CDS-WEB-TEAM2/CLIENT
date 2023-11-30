import React from 'react';
import styled from 'styled-components';
import NewsArticle from '../components/Common/NewsArticle';
import { ARTICLE_DUMMY } from './../assets/data/ARTICLE_DUMMY';
import Search from '../components/Main/Search';

const Main = () => {
  return (
    <St.MainContainer>
      <Search />
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
