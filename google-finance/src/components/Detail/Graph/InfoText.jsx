import React from 'react';
import styled from 'styled-components';
import InfoEach from './InfoEach';
import { STOCKINFO_DUMMY } from '../../../assets/data/STOCKINFO_DUMMY';

const InfoText = () => {
  return (
    <St.Container>
      {STOCKINFO_DUMMY.map((info) => (
        <InfoEach key={info.id} category={info.category} value={info.value} />
      ))}
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
