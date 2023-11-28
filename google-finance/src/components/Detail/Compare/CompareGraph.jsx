import React from 'react';
import Graph from '../Graph/Graph';
import CompareInfoText from './CompareInfoText';

const CompareGraph = ({ inOutComeData }) => {
  return (
    <>
      <CompareInfoText
        income={inOutComeData.income}
        profitMargin={inOutComeData.profitMargin}
        comparedProfitMargin={inOutComeData.comparedProfitMargin}
        operatingExpenses={inOutComeData.operatingExpenses}
        comparedOperatingExpenses={inOutComeData.comparedOperatingExpenses}
        incomePerShare={inOutComeData.incomePerShare}
        comparedIncomePerShare={inOutComeData.comparedIncomePerShare}
        ebitda={inOutComeData.ebitda}
        comparedEbitda={inOutComeData.comparedEbitda}
        effectiveTaxRate={inOutComeData.effectiveTaxRate}
        comparedEffectiveTaxRate={inOutComeData.comparedEffectiveTaxRate}
      />
    </>
  );
};

export default CompareGraph;
