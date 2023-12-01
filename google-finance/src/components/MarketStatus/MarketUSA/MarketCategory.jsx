import React from 'react';
import styled from 'styled-components';
import { BtnRightIcon } from '../../../assets';

const MarketCategory = ({ category }) => {
  return (
    <St.Container>
      <St.Title>{category}</St.Title>
      <img src={BtnRightIcon} alt={`${category}-카테고리-더보기`} />
    </St.Container>
  );
};

const St = {
  Container: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 4.8rem;

    padding: 0.9rem 1.3rem;
    border-bottom: solid 0.2rem ${(props) => props.theme.colors.gray_4};
    border-top: solid 0.5rem ${(props) => props.theme.colors.gray_4};
    img {
      width: 2.4rem;
    }
  `,
  Title: styled.h1`
    ${(props) => props.theme.fonts.roboto_18};
  `,
};

export default MarketCategory;
