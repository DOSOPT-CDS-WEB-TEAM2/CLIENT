import React from 'react';
import styled from 'styled-components';
import { Check, Share } from '../../../assets';
import theme from '../../../styles/theme';
import { CommonButton, CommonButtonContainer } from '../../Common/buttons';

const IndexButton = () => {
  return (
    <St.Info>
      <CommonButtonContainer>
        <CommonButton $hasOneIcon={true}>
          <img src={Share} />
        </CommonButton>
        <CommonButton>
          <img src={Check} />
          <span>추가됨</span>
        </CommonButton>
      </CommonButtonContainer>
    </St.Info>
  );
};

export default IndexButton;

const St = {
  Info: styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;

    ${theme.fonts.roboto_12}
  `,
};
