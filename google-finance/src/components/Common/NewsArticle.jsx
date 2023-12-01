import React, { useEffect, useState } from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';

const NewsArticle = ({ article }) => {
  const { title, imageUrl, createdAt, publisher } = article;
  const [hourGap, setHourGap] = useState(0);
  let today = new Date();
  useEffect(() => {
    let createdDay = new Date(createdAt);
    let timeGap = (today.getTime() - createdDay.getTime()) / (1000 * 60 * 60);
    setHourGap(Math.floor(timeGap));
  }, [createdAt]);
  return (
    <St.NewsArticleContainer>
      <St.ArticleWrapper $imageUrl={imageUrl}>
        <St.ArticleEtcInfo>
          {publisher} | {hourGap}시간 전
        </St.ArticleEtcInfo>
        <St.ArticleTitle>{title}</St.ArticleTitle>
      </St.ArticleWrapper>
      {imageUrl && (
        <St.ArticlePictureWrapper>
          <St.ArticleImg src={imageUrl} alt="뉴스기사-사진" />
        </St.ArticlePictureWrapper>
      )}
    </St.NewsArticleContainer>
  );
};

export default NewsArticle;

const St = {
  NewsArticleContainer: styled.section`
    display: flex;
    justify-content: center;

    width: 35rem;
    margin: auto;

    border-bottom: 0.05rem solid ${theme.colors.gray_3};
  `,
  ArticleWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-shrink: 0;

    width: ${({ $imageUrl }) => ($imageUrl !== null ? '29rem' : '37.5rem')};
    height: 9.9rem;

    padding: ${({ $imageUrl }) => ($imageUrl !== null ? '1rem 1rem 0.9rem 1.6rem' : '1rem 1.4rem 0.9rem 1.6rem')};
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

    img {
      width: 8rem;
      height: 8rem;
    }
  `,
  ArticleImg: styled.img`
    width: 8rem;
    height: 8rem;
  `,
};
