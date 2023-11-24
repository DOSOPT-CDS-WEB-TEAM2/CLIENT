import React from 'react';
import styled from 'styled-components';
import { UpSmallIcon } from '../../../assets';
import theme from '../../../styles/theme';
import { PercentButton, PercentButtonContainer } from '../../Common/PercentButton';

const PercButton = () => {
  return (
    <St.Info>
      <PercentButtonContainer>
        <PercentButton>
          <img src={UpSmallIcon} />
        </PercentButton>
        <PercentButton>
          <img src={UpSmallIcon} />
          <span>8.70%</span>
        </PercentButton>
      </PercentButtonContainer>
    </St.Info>
  );
};
export default PercButton;
const St = {
  Info: styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
  `,
};
