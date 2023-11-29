import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { GraphRedImage, ArrowUpSmallIcon } from '../../assets/index';

const ActiveStock = ({ stockName, fluctuationRate }) => {
  return (
    <St.NavApi>
      <St.NavApiContainer>
        <span>{stockName}</span>
        <img src={GraphRedImage} alt="그래프" />
        <St.CommonButton>
          <img src={ArrowUpSmallIcon} />
          {parseFloat(fluctuationRate).toFixed(2)}%
        </St.CommonButton>
      </St.NavApiContainer>
    </St.NavApi>
  );
};

const St = {
  NavApiContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;

    span {
      color: ${(props) => props.theme.colors.gray_1};
      ${theme.fonts.roboto_12};
      width: 8.6rem;
    }
    img {
      margin-right: 0.4rem;
    }
  `,

  CommonButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 7.7rem;
    height: 2.5rem;
    padding: 0.4rem 1rem;

    border-radius: ${({ $hasOneIcon }) => ($hasOneIcon ? '50%' : '0.5rem')};
    ${theme.fonts.productsans_14_bold};
    background-color: ${theme.colors.red_background};
    color: ${theme.colors.red_main};
    border: none;

    img {
      margin: 0;
    }
  `,

  NavApi: styled.div`
    span {
      color: ${(props) => props.theme.colors.gray_1};
      ${(props) => props.theme.fonts.roboto_12};
    }
  `,
};

export default ActiveStock;
