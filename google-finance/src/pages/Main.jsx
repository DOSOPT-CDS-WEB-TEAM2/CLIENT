import React from 'react';
import styled from 'styled-components';
import MyPorfolio from '../components/Main/MyPorfolio';

const Main = () => {
  return (
    <St.MainContainer>
      <MyPorfolio />
    </St.MainContainer>
  );
};

export default Main;

const St = {
  MainContainer: styled.div`
    display: flex;
    flex-direction: column;
    /* max-width: 90%; */
    margin: 0 auto;
  `,
};
