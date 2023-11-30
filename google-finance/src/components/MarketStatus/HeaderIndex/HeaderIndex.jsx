import React from 'react';
import styled from 'styled-components';
import { CommonButton, CommonButtonContainer } from '../../Common/buttons';
import NavHr from '../../Nav/NavHr';

const HeaderIndex = () => {
  const buttonValues = [
    '📊시장지수',
    '⬆️가장 거래가 활발한 주식',
    '📈상승주',
    '📉하락주',
    '🌱기후변화 대응 선두 업체',
    '🪙암호화폐',
    '💰통화',
  ];

  return (
    <St.Container>
      <St.Title>시장현황 살펴보기</St.Title>
      <CommonButtonContainer>
        {buttonValues.map((value, index) => (
          <CommonButton key={index}>
            <span>{value}</span>
          </CommonButton>
        ))}
      </CommonButtonContainer>
    </St.Container>
  );
};

const St = {
  Container: styled.header`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 0.9rem 1.3rem;
  `,
  Title: styled.h1`
    margin-bottom: 1.5rem;
    ${(props) => props.theme.fonts.roboto_24};
  `,
};

export default HeaderIndex;
