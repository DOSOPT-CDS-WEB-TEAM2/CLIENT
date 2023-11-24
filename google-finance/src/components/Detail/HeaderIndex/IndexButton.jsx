import React from 'react';
import styled from 'styled-components';
import { Check, Share } from '../../../assets';
import theme from '../../../styles/theme';
import { CommonButton } from '../../Common/buttons';

const IndexButton = () => {
  return (
    <St.Info>
      <CommonButton>
        <img src={Share} />
      </CommonButton>
      <CommonButton>
        <img src={Check} />
        추가됨
      </CommonButton>
    </St.Info>
  );
};
export default IndexButton;
const St = {
  Info: styled.div`
    display: flex;
    width: 100%;

    /* img {
      width: 2.8rem;
      height: 2.8rem;
      margin: auto 0;
    } */

    span {
      line-height: 2.8rem;
    }

    ${theme.fonts.roboto_12};
  `,
};
