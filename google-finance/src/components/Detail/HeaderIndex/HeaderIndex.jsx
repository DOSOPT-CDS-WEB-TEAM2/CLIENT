import React from 'react';
import styled from 'styled-components';
import IndexInfo from './IndexInfo';

const HeaderIndex = () => {
  return (
    <St.Container>
      <IndexInfo />
      {/* <IndexButton /> */}
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: 4.8rem;
    border: 1px solid red;
    padding: 0.9rem 1.3rem;
  `,
  IndexInfo: styled.div``,
  IndexButton: styled.div``,
};

export default HeaderIndex;
