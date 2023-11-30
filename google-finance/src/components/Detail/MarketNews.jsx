import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import NewsArticle from '../Common/NewsArticle';
import SubHeader from './SubHeader';
import axios from 'axios';
import { ARTICLE_DUMMY } from '../../assets/data/ARTICLE_DUMMY';

const MarketNews = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/news`, {
          params: {
            related_stock: '051910',
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setNewsData(response.data);
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchNewsData();
  }, []);

  // Filter newsData to include only articles with id 8, 9, and 10
  const filteredNewsData = newsData.filter((article) => [8, 9, 10].includes(article.id));
  console.log(filteredNewsData);
  console.log(ARTICLE_DUMMY);
  return (
    <>
      <SubHeader title={'시장 뉴스'} />
      {filteredNewsData.map((article, idx) => (
        <NewsArticle key={idx} article={article} />
      ))}
    </>
  );
};

export default MarketNews;
