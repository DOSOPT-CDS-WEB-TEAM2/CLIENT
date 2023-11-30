import React from 'react';
import styled from 'styled-components';

const InfoGraph = ({ GraphImage }) => {
  return (
    <St.Container>
      <img src={GraphImage} alt="LG화학그래프" />
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;

    width: 34.6rem;
    height: 18.3rem;
    margin: 0.3rem auto 1.3rem auto;
  `,
};

export default InfoGraph;
