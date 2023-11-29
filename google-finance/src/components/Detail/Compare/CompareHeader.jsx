import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../../assets';
import theme from '../../../styles/theme';

const CompareHeader = () => {
  return (
    <St.Container>
      <img src={SearchIcon} /> 비교대상
    </St.Container>
  );
};

export default CompareHeader;

const St = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 100%;
    height: 4.8rem;
    margin-top: 2rem;
    padding-left: 1.5rem;

    color: ${theme.colors.blue_main};
    ${theme.fonts.roboto_18};
  `,
};
