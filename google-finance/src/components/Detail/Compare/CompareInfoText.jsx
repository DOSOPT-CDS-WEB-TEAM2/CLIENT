import React, { useEffect } from 'react';
import styled from 'styled-components';
import InfoEach from '../Graph/InfoEach';

const CompareInfoText = ({
  income,
  comparedIncome,
  profitMargin,
  comparedProfitMargin,
  operatingExpenses,
  comparedOperatingExpenses,
  incomePerShare,
  comparedIncomePerShare,
  ebitda,
  comparedEbitda,
  effectiveTaxRate,
  comparedEffectiveTaxRate,
}) => {
  const CategoryList = ['수익', '운영비', '순이익', '주당이익', 'EBITDA', '유효세율'];

  const Data = {
    수익: income,
    운영비: profitMargin,
    순이익: operatingExpenses,
    주당이익: incomePerShare,
    EBITDA: ebitda,
    유효세율: effectiveTaxRate,
  };

  return (
    <St.Container>
      {CategoryList.map((category) => (
        <InfoEach key={category} category={category} value={Data[category]} />
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
};

export default CompareInfoText;
