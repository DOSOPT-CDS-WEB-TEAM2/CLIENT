import React from 'react';
import styled from 'styled-components';
import InfoEach2 from '../Graph/InfoEach2';

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
    수익: [income, comparedIncome],
    운영비: [profitMargin, comparedProfitMargin],
    순이익: [operatingExpenses, comparedOperatingExpenses],
    주당이익: [incomePerShare, comparedIncomePerShare],
    EBITDA: [ebitda, comparedEbitda],
    유효세율: [effectiveTaxRate, comparedEffectiveTaxRate],
  };

  return (
    <St.Container>
      <InfoEach2 category={'(KRW)'} value={'2023년 6월'} change={'전년대비 변동'} />
      {CategoryList.map((category) => (
        <InfoEach2 key={category} category={category} value={Data[category][0]} change={Data[category][1]} />
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
