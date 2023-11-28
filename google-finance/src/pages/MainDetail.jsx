import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/Detail/HeaderIndex/HeaderIndex';
import MainInfo from '../components/Detail/MainInfo/MainInfo';
import Graph from '../components/Detail/Graph/Graph';
import Compare from '../components/Detail/Compare/Compare';
import InOutCome from '../components/Detail/InOutCome/InOutCome';

const MainDetail = () => {
  return (
    <HomeWrapper>
      <HeaderIndex />
      <MainInfo />
      <Graph />
      <Compare />
      <InOutCome />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MainDetail;
