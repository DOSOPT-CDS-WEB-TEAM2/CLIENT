import React from 'react';
import styled from 'styled-components';
import IndexInfo from './IndexInfo';
import IndexButton from './IndexButton';

const HeaderIndex = () => {
  return (
    <St.Container>
      <IndexInfo />
      <IndexButton />
    </St.Container>
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

export default HeaderIndex;
