import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/Detail/HeaderIndex/HeaderIndex';
import MainInfo from '../components/Detail/MainInfo/MainInfo';

const MainDetail = () => {
  return (
    <HomeWrapper>
      <HeaderIndex />
      <MainInfo />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MainDetail;
