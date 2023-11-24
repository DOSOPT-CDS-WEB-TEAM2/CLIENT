import React from 'react';
import styled from 'styled-components';
import InfoEach from './InfoEach';

const InfoText = () => {
  return (
    <St.Container>
      <InfoEach category="전일종가" value="₩471,000.00" />
      <InfoEach category="일일 변동 폭" value="₩487,500.00  -  ₩529,000.00" />
      <InfoEach category="52주 변동폭" value="₩424,500.00  -  ₩857,000.00" />
      <InfoEach category="시가 총액" value="38.70조 KRW" />
      <InfoEach category="평균 거래량" value="31.74만" />
      <InfoEach category="주가 수익률" value="26.73%" />
      <InfoEach category="배당 수익률" value="1.95%" />
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Data: styled.div`
    width: 34.5rem;
    height: 4.3rem;
  `,
};

export default InfoText;
