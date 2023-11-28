import React from 'react';
import GraphButton from './GraphButton';
import InfoGraph from './InfoGraph';
import InfoText from './InfoText';

const Graph = ({
  previousDayIncrease,
  todayHighestPrice,
  todayLowestPrice,
  pastWeekHighestPrice,
  pastWeekLowestPrice,
  marketCapitalization,
  averageTrading,
  stockPriceReturn,
  dividendYield,
}) => {
  return (
    <>
      <GraphButton BUTTON_DATA={'1ro'} />
      <InfoGraph />
      <InfoText
        previousDayIncrease={previousDayIncrease}
        todayLowestPrice={todayLowestPrice}
        todayHighestPrice={todayHighestPrice}
        pastWeekLowestPrice={pastWeekLowestPrice}
        pastWeekHighestPrice={pastWeekHighestPrice}
        marketCapitalization={marketCapitalization}
        averageTrading={averageTrading}
        stockPriceReturn={stockPriceReturn}
        dividendYield={dividendYield}
      />
    </>
  );
};

export default Graph;
