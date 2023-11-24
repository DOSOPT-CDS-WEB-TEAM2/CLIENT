import React from 'react';
import styled from 'styled-components';
import GraphButton from './GraphButton';
import InfoGraph from './InfoGraph';
import InfoText from './InfoText';

const Graph = () => {
  return (
    <>
      <GraphButton />
      <InfoGraph />
      <InfoText />
    </>
  );
};

const St = {
  Container: styled.div`
    display: flex;

    width: 100%;
    height: 4.8rem;
    padding: 0.9rem 1.3rem;
  `,
};

export default Graph;
