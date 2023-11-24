import React from 'react';
import styled from 'styled-components';
import HeaderIndex from '../components/Detail/HeaderIndex/HeaderIndex';
import Article from '../components/Detail/Article/Article';

const MainDetail = () => {
  return (
    <HomeWrapper>
      <HeaderIndex />
      <Article />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MainDetail;
