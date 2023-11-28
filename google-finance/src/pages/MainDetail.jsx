import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/Detail/HeaderIndex/HeaderIndex';
import MainInfo from '../components/Detail/MainInfo/MainInfo';
import Graph from '../components/Detail/Graph/Graph';
import Compare from '../components/Detail/Compare/Compare';
import InOutCome from '../components/Detail/InOutCome/InOutCome';
import MainGraph from '../components/Detail/Graph/MainGraph';
import axios from 'axios';
import { useEffect } from 'react';
import CompareInfo from '../components/Detail/Compare/CompareInfo';

const MainDetail = () => {
  const DATA_ARR_COMPARE = ['매분기', '연간'];
  return (
    <HomeWrapper>
      <HeaderIndex />
      <MainInfo />
      <Compare />
      {/* <Graph data={DATA_ARR_COMPARE} /> */}
      <CompareInfo />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MainDetail;
