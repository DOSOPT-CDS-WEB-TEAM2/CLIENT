import React from 'react';
import styled from 'styled-components';
import { BtnRightIcon } from '../../../assets';
import theme from '../../../styles/theme';

const IndexInfo = () => {
  return (
    <St.Info>
      <span>홈</span>
      <img src={BtnRightIcon} />
      <span>051910 · KRX</span>
    </St.Info>
  );
};

const St = {
  Info: styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    img {
      margin: 0 0.6rem;
    }

    span {
      ${theme.fonts.roboto_12};
    }
  `,
};

export default IndexInfo;
