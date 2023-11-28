import React from 'react';
import styled from 'styled-components';
import { CommonButton, CommonButtonContainer } from '../../Common/buttons';

export const GraphButton = () => {
  const DATA_ARR = ['1일', '5일', '1개월', '6개월', 'YTD', '1년'];
  return (
    <St.Container>
      <CommonButtonContainer>
        {DATA_ARR.map((label, idx) => (
          <CommonButton key={idx}>{label}</CommonButton>
        ))}
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
