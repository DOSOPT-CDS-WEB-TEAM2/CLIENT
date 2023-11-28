import React from 'react';
import styled from 'styled-components';
import { BtnRightIcon } from '../../../assets';

const MarketCategory = () => {
  return (
    <St.Container>
      <St.Title>미주</St.Title>
      <img src={BtnRightIcon} alt="미주-카테고리-더보기" />
    </St.Container>
  );
};

const St = {
  Container: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    width: 100%;
    height: 4.8rem;
    padding: 0.9rem 1.3rem;

    img {
      width: 2.4rem;
    }
  `,
  Title: styled.h1`
    ${(props) => props.theme.fonts.roboto_18};
  `,
};

export default MarketCategory;
