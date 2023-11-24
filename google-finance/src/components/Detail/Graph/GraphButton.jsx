import React from 'react';
import styled from 'styled-components';
import { CommonButton, CommonButtonContainer } from '../../Common/buttons';

export const GraphButton = () => {
  return (
    <St.Container>
      <CommonButtonContainer>
        <CommonButton>1일</CommonButton>
        <CommonButton>5일</CommonButton>
        <CommonButton>1개월</CommonButton>
        <CommonButton>6개월</CommonButton>
        <CommonButton>YTD</CommonButton>
        <CommonButton>1년</CommonButton>
      </CommonButtonContainer>
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;

    width: 100%;
    height: 4.8rem;
    margin-top: 0.6rem;
    padding-top: 0.9rem;
    padding-left: 1.5rem;
  `,
};

export default GraphButton;
