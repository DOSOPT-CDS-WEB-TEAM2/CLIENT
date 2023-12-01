import React from 'react';
import GraphButton from '../Graph/GraphButton';
import InfoGraph from '../Graph/InfoGraph';
import { InOutComeGraphImage } from '../../../assets';
import InOutComeInfoText from './InOutComeInfoText';
import SubHeader from '../SubHeader';

const InOutComeGraph = ({ inOutComeData }) => {
  return (
    <>
      <SubHeader title={'손익계산서'} />
      <GraphButton DATA_ARR={['매분기', '연간']} />
      <InfoGraph GraphImage={InOutComeGraphImage} />
      <InOutComeInfoText
        income={inOutComeData.income}
        comparedIncome={inOutComeData.comparedIncome}
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

export default InOutComeGraph;
