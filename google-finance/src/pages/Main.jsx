import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPorfolio from '../components/Main/MyPorfolio';
import NewsArticle from '../components/Common/NewsArticle';
import { ARTICLE_DUMMY } from './../assets/data/ARTICLE_DUMMY';
import { FetchArticleData } from '../components/Api/FetchData';

const Main = () => {
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
      <MyPorfolio />
      {articles.map((article, idx) => (
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
