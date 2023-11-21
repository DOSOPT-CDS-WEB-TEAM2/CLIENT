import React from 'react';
import styled from 'styled-components';

const MainDetail = () => {
  return <HomeWrapper>주가 상세페이지 입니다.</HomeWrapper>;
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
`;

export default MainDetail;
