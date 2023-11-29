import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../../assets';
import theme from '../../../styles/theme';
import { PercentButton, PercentButtonContainer } from '../../Common/PercentButton';

const CompareIndex = () => {
  return (
    <St.Container>
      <St.NameCodeContainer>
        <St.Name>삼성SDI</St.Name>
        <St.Code>006400</St.Code>
      </St.NameCodeContainer>

      <St.Price>₩498,000.00</St.Price>
      <PercentButtonContainer>
        {' '}
        <PercentButton isSmall={true} isUp={true} value={'9.69%'} />
      </PercentButtonContainer>
    </St.Container>
  );
};

export default CompareIndex;

const St = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    width: 14.1rem;
    height: 9rem;
    padding: 1rem 1.1rem 1rem 1rem;

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
