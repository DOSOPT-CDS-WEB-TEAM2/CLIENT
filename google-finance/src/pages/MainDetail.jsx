import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/Detail/HeaderIndex/HeaderIndex';
import { PercentButton, PercentButtonContainer } from '../components/Common/PercentButton';

const MainDetail = () => {
  return (
    <HomeWrapper>
      <HeaderIndex />
      <PercentButtonContainer>
        <PercentButton value={'8.7'} />
      </PercentButtonContainer>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MainDetail;
