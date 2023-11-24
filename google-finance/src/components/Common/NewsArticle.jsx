import React, { useState } from 'react';
import styled from 'styled-components';

const NewsArticle = ({ article }) => {
  //   const [imgUrl, setImgUrl] = useState('');
  const { title, imgUrl, createdAt, publisher } = article;
  return (
    <St.NewsArticleContainer>
      <St.ArticleEtcInfo>{publisher} | 2시간 전</St.ArticleEtcInfo>
      <St.ArticleTitle>{title}</St.ArticleTitle>
      {imgUrl && <St.ArticlePictureWrapper></St.ArticlePictureWrapper>}
    </St.NewsArticleContainer>
  );
};

export default NewsArticle;

const St = {
  NewsArticleContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-shrink: 0;

    height: 9.9rem;
    padding: 1rem 1.4rem 0.9rem 1.6rem;
    gap: 1rem;
  `,
  ArticleTitle: styled.div`
    color: ${({ theme }) => theme.colors.gray_1};
    ${({ theme }) => theme.fonts.productsans_16_cond};
  `,
  ArticleEtcInfo: styled.span`
    color: ${({ theme }) => theme.colors.gray_2};
    ${({ theme }) => theme.fonts.roboto_12};
  `,
  ArticlePictureWrapper: styled.div``,
};
