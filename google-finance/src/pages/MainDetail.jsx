import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/Detail/HeaderIndex/HeaderIndex';
import MainInfo from '../components/Detail/MainInfo/MainInfo';
import Compare from '../components/Detail/Compare/Compare';
import InOutComeInfo from '../components/Detail/InOutCome/InOutComeInfo';

const MainDetail = () => {
  return (
    <HomeWrapper>
      <HeaderIndex />
      <MainInfo />
      <Compare />
      <InOutComeInfo />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MainDetail;
