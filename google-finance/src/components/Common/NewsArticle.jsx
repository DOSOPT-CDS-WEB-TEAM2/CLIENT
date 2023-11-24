import React, { useState } from 'react';
import styled from 'styled-components';

const NewsArticle = ({ article }) => {
  const { title, imageUrl, createdAt, publisher } = article;
  return (
    <St.NewsArticleContainer>
      <St.ArticleWrapper imageUrl={imageUrl}>
        <St.ArticleEtcInfo>{publisher} | 2시간 전</St.ArticleEtcInfo>
        <St.ArticleTitle>{title}</St.ArticleTitle>
      </St.ArticleWrapper>
      {imageUrl && (
        <St.ArticlePictureWrapper>
          <img src={imageUrl} alt="뉴스기사-사진" />
        </St.ArticlePictureWrapper>
      )}
    </St.NewsArticleContainer>
  );
};

export default NewsArticle;

const St = {
  NewsArticleContainer: styled.div`
    display: flex;
    border-bottom: 0.05rem solid;
    /* border-bottom-width: 34.4rem; */
    border-bottom-color: ${({ theme }) => theme.colors.gray_3};
  `,
  ArticleWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-shrink: 0;

    width: ${({ imageUrl }) => (imageUrl !== null ? '29rem' : '37.5rem')};
    height: 9.9rem;

    padding: ${({ imageUrl }) => (imageUrl !== null ? '1rem 1rem 0.9rem 1.6rem' : '1rem 1.4rem 0.9rem 1.6rem')};
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
  ArticlePictureWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 1.5rem;
  `,
};
