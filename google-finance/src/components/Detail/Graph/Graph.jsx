import React from 'react';
import styled from 'styled-components';
import GraphButton from './GraphButton';
import GraphData from './GraphData';

const Graph = () => {
  return (
    <>
      <GraphButton />
      <GraphData />
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
