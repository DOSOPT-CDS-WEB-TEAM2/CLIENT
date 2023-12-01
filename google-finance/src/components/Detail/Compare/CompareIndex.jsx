import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../../assets';
import theme from '../../../styles/theme';
import { PercentButton, PercentButtonContainer } from '../../Common/PercentButton';

const CompareIndex = ({ index }) => {
  const { code, name, currentPrice, fluctuationRate } = index;
  return (
    <St.Container>
      <St.NameCodeContainer>
        <St.Name>{name}</St.Name>
        <St.Code>{code}</St.Code>
      </St.NameCodeContainer>

      <St.Price>{currentPrice}</St.Price>
      <PercentButtonContainer>
        {' '}
        <PercentButton isSmall={true} isUp={true} value={fluctuationRate} />
      </PercentButtonContainer>
    </St.Container>
  );
};

export default CompareIndex;

const St = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    width: 14.1rem;
    height: 9rem;
    padding: 1rem;

    border: 0.1rem solid ${theme.colors.gray_3};
    border-radius: 8px;
  `,
  NameCodeContainer: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 1.4rem;
    margin-bottom: 0.6rem;
  `,
  Name: styled.span`
    ${theme.fonts.roboto_12_bold}
    color: ${theme.colors.gray_1};
  `,
  Code: styled.span`
    ${theme.fonts.roboto_10}
    color:${theme.colors.gray_2};
  `,
  Price: styled.div`
    ${theme.fonts.productsans_14}
    color: ${theme.colors.gray_1};

    margin-bottom: 0.7rem;
  `,
};
