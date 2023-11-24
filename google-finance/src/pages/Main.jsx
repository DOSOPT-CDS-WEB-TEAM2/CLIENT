import React from 'react';
import styled from 'styled-components';
import NewsArticle from '../components/Common/NewsArticle';
import { ARTICLE_DUMMY } from './../assets/data/ARTICLE_DUMMY';

const Main = () => {
  return (
    <St.MainContainer>
      구글 금융 페이지입니다.
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
    /* max-width: 90%; */
    margin: 0 auto;
  `,
};
