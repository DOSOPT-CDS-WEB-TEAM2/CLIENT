import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { PercentButton } from '../../Common/PercentButton';

const InfoEach2 = ({ category, value, change }) => {
  return (
    <St.Container>
      <St.Category>{category}</St.Category>
      <St.Value>{value}</St.Value>
      <St.Change>
        {change !== '전년대비 변동' ? (
          <PercentButton isSmall={true} isUp={true} value={'8.70%'}>
            {change}
          </PercentButton>
        ) : (
          change
        )}
      </St.Change>
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 34.5rem;
    height: 4.3rem;
    margin: 0 auto;
    border-bottom: 0.05rem solid ${theme.colors.gray_3};
  `,

  Category: styled.span`
    display: flex;
    align-items: flex-start;
    width: 5rem;
    ${theme.fonts.roboto_12}
    color: ${theme.colors.gray_2};
  `,
  Value: styled.span`
    ${theme.fonts.productsans_12}
    color: ${theme.colors.gray_1};
    margin-right: -5.2rem;
    width: 6rem;
    padding-right: 0;
    text-align: right;
  `,
  Change: styled.span`
    ${theme.fonts.productsans_12}
    color: ${theme.colors.gray_1};
    width: 7.1rem;
  `,
};

export default InfoEach2;
