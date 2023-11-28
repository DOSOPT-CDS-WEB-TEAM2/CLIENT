import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Price = () => {
  return (
    <St.Container>
      <St.Price>₩512,000.00</St.Price>
      <St.PriceDetail>11월 6일, 오후 12시 45분 32초 UTC+9 KRW KRX 면책조항</St.PriceDetail>
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 9rem;
    padding: 0 1.5rem;
    border: 0.05rem solid ${theme.colors.gray_3};
  `,
  Price: styled.div`
    margin-top: 1.2rem;
    margin-bottom: 0.5rem;
    ${theme.fonts.productsans_32};
  `,
  PriceDetail: styled.div`
    margin-top: 0;
    color: ${theme.colors.black};
    ${theme.fonts.roboto_12_cond};
  `,
};

export default Price;
