import React from 'react';
import styled from 'styled-components';
import { BtnRight } from '../../../assets';
import theme from '../../../styles/theme';

const IndexInfo = () => {
  return (
    <St.Info>
      <span>홈</span>
      <img src={BtnRight} />
      <span>051910 ·KRX</span>
    </St.Info>
  );
};

const St = {
  Info: styled.div`
    display: flex;
    width: 100%;

    img {
      width: 2.8rem;
      height: 2.8rem;
      margin: auto 0;
    }

    span {
      line-height: 2.8rem;
    }

    ${theme.fonts.roboto_12};
  `,
};

export default IndexInfo;
