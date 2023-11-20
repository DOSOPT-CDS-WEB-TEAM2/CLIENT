import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return <HomeWrapper>구글 금융 페이지입니다.</HomeWrapper>;
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
`;

export default Main;
