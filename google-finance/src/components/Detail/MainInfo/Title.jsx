import React from 'react';
import styled from 'styled-components';
import { CommonButton } from '../../Common/buttons';
import theme from '../../../styles/theme';

const Title = () => {
  return (
    <St.Container>
      <span>LG화학</span>
      <CommonButton>8.70%</CommonButton>
      <CommonButton>410.000</CommonButton>
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 6rem;
    padding: 1.5rem;
    gap: 1rem;

    span {
      ${theme.fonts.productsans_24};
    }
  `,
};

export default Title;
