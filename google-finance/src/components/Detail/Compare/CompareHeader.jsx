import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../../assets';

const CompareHeader = () => {
  return (
    <St.Container>
      <img src={SearchIcon} />
    </St.Container>
  );
};

export default CompareHeader;

const St = {
  Container: styled.div`
    display: flex;

    width: 100%;
    height: 4.8rem;
    margin-top: 2rem;
  `,
};
