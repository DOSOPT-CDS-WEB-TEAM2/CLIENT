import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/Detail/HeaderIndex/HeaderIndex';
import PercButton from '../components/Detail/HeaderIndex/PercentButton';

const MainDetail = () => {
  return (
    <HomeWrapper>
      <HeaderIndex />
      <PercButton />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MainDetail;
