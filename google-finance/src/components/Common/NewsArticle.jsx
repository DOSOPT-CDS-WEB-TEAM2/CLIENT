import React, { useState } from 'react';
import styled from 'styled-components';

const NewsArticle = () => {
  const [imgUrl, setImgUrl] = useState('');
  return (
    <St.NewsArticleContainer>
      <St.ArticleEtcInfo>YouTube | 2시간 전</St.ArticleEtcInfo>
      <St.ArticleTitle>공매도 전면 금지...갑자기 왜? (2023.11.05/뉴스데스크/MBC)</St.ArticleTitle>
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
