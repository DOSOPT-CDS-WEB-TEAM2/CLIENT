import React from 'react';
import styled from 'styled-components';
import NewsArticle from '../components/Common/NewsArticle';

const Main = () => {
  return (
    <St.MainContainer>
      구글 금융 페이지입니다.
      <NewsArticle />
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
