import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPorfolio from '../components/Main/MyPorfolio';
import NewsArticle from '../components/Common/NewsArticle';
import { FetchArticleData } from '../components/Api/FetchData';
import { CommonButton, CommonButtonContainer } from './../components/Common/buttons';

const Main = () => {
  const CATEGORY_LIST = ['미국', '유럽', '아시아', '통화', '암호화폐', '선물'];
  const NEWS_LIST = ['주요뉴스', '국내 주식 시장', '세계시장'];
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const articleData = await FetchArticleData();
    setArticles(articleData);
  };
  return (
    <St.MainContainer>
      {/* <CommonButtonContainer>
        {CATEGORY_LIST.map((category) => (
          <CommonButton>{category}</CommonButton>
        ))}
      </CommonButtonContainer> */}
      <MyPorfolio />
      <St.NewsHeader>
        <St.Title>오늘의 금융 뉴스</St.Title>
        <CommonButtonContainer>
          {NEWS_LIST.map((news) => (
            <CommonButton>{news}</CommonButton>
          ))}
        </CommonButtonContainer>
      </St.NewsHeader>

      {articles.map((article, idx) => (
        <NewsArticle key={idx} article={article} />
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
  NewsHeader: styled.div`
    padding: 2rem 1.5rem 1.4rem;
  `,
  Title: styled.div`
    padding-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.gray_2};
    ${({ theme }) => theme.fonts.productsans_14};
  `,
};
