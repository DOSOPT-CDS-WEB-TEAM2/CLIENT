import React from 'react';
import styled from 'styled-components';
import { CheckIcon, ShareIcon } from '../../../assets';
import theme from '../../../styles/theme';
import { CommonButton, CommonButtonContainer } from '../../Common/buttons';

const IndexButton = () => {
  return (
    <St.Info>
      <CommonButtonContainer>
        <CommonButton $hasOneIcon={true}>
          <img src={ShareIcon} alt="공유-아이콘" />
        </CommonButton>
        <CommonButton>
          <img src={CheckIcon} alt="체크-아이콘" />
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
