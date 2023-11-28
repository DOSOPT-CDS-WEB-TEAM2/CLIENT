import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const InOutCome = () => {
  return (
    <St.Container>
      <St.Header>손익 계산서</St.Header>
      {/* inoutcomeinfograph
    inoutcomeinfotext */}
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;

    padding-top: 2rem;
    padding-left: 1.5rem;
    width: 100%;
  `,
  Header: styled.span`
    margin-bottom: 2rem;
    color: ${theme.colors.gray_2};
    ${theme.fonts.roboto_14};
  `,
};

export default InOutCome;
