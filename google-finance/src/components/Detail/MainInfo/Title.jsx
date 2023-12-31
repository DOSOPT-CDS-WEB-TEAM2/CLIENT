import React from 'react';
import styled from 'styled-components';
import { PercentButton, PercentButtonContainer } from '../../Common/PercentButton';
import theme from '../../../styles/theme';

const Title = ({ title }) => {
  return (
    <St.Container>
      <St.Title>{title}</St.Title>
      <PercentButton isSmall={true} isUp={true} value={'8.70%'} />
      <PercentButton isSmall={true} isUp={true} value={'410.000'} />
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
  `,
  Title: styled.span`
    ${theme.fonts.productsans_24};
  `,
};

export default Title;
