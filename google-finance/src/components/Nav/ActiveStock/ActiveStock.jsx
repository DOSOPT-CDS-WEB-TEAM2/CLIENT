import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { FetchStocks } from '../../Api/FetchData';
import { GraphRedImage, ArrowUpSmallIcon } from '../../../assets/index';
import { CommonRateButton } from '../../Common/buttons';

const ActiveStock = ({ stockName, fluctuationRate }) => {
  return (
    <St.NavApi>
      <St.NavApiContainer>
        <span>{stockName}</span>
        <img src={GraphRedImage} alt="그래프" />
        <CommonRateButton>
          <img src={ArrowUpSmallIcon} alt="화살표" />
          {parseFloat(fluctuationRate).toFixed(2)}%
        </CommonRateButton>
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
      ${theme.fonts.roboto_12_cond};
      width: 8.6rem;
    }
    img {
      margin-right: 0.4rem;
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
