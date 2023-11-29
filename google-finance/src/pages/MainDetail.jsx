import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/Detail/HeaderIndex/HeaderIndex';
import { PercentButton, PercentButtonContainer } from '../components/Common/PercentButton';
import MainInfo from '../components/Detail/MainInfo/MainInfo';
import Graph from '../components/Detail/Graph/Graph';
import Compare from '../components/Detail/Compare/Compare';

const MainDetail = () => {
  return (
    <HomeWrapper>
      <HeaderIndex />
      <MainInfo />
      <Graph />
      <Compare />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MainDetail;
