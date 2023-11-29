import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { CommonButton } from '../../Common/buttons';

const InfoEach2 = ({ category, value, change }) => {
  return (
    <St.Container>
      <span className="category">{category}</span>
      <span className="value">{value}</span>
      <span className="change">{change !== '전년대비 변동' ? <CommonButton>{change}</CommonButton> : change}</span>
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

    .category {
      display: flex;
      align-items: flex-start;
      ${theme.fonts.roboto_12}
      color: ${theme.colors.gray_2}
    }

    .value {
      ${theme.fonts.productsans_12}
      color: ${theme.colors.gray_1};
      margin-right: -5.2rem;
    }

    .change {
      ${theme.fonts.productsans_12}
      color: ${theme.colors.gray_1};
    }
  `,
};

export default InfoEach2;
