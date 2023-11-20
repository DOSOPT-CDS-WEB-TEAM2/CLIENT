import { css } from 'styled-components';
import './font.css';

const colors = {
  white: '#FFFFFF',
  black: '#000000',

  red_main: '#D12126',
  red_background: '#FFDEDF',

  blue_main: '#3478F5',
  blue_background: '#D8E5FE',

  // 숫자가 커질수록 연한 색
  gray_1: '#363636',
  gray_2: '#818181',
  gray_3: '#D5D5D5',
  gray_4: '#EFEFEF',
};

const fonts = {
  productsans_10: css`
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  productsans_12: css`
    font-family: 'Product Sans';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  productsans_14: css`
    font-family: 'Product Sans';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  productsans_14_bold: css`
    font-family: 'Product Sans';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  productsans_16_cond: css`
    font-family: 'Product Sans';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: -0.08rem;
  `,
  productsans_18: css`
    font-family: 'Product Sans';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  productsans_24: css`
    font-family: 'Product Sans';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  productsans_32: css`
    font-family: 'Product Sans';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,

  roboto_10: css`
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  roboto_12: css`
    font-family: 'Roboto';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  roboto_12_bold: css`
    font-family: 'Roboto';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.06rem;
  `,
  roboto_14: css`
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  roboto_14_cond: css`
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.07rem;
  `,
  roboto_16: css`
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  roboto_18: css`
    font-family: 'Roboto';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  roboto_18_bold: css`
    font-family: 'Roboto';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.09rem;
  `,
  roboto_24: css`
    font-family: 'Roboto';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  roboto_32: css`
    font-family: 'Roboto';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
