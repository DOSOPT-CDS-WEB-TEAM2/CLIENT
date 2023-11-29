import React from 'react';
import GraphButton from './GraphButton';
import InfoGraph from './InfoGraph';
import InfoText from './InfoText';
import { GraphImage } from '../../../assets';

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
      <GraphButton DATA_ARR={['1일', '5일', '1개월', '6개월', 'YTD', '1년']} />
      <InfoGraph GraphImage={GraphImage} />
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
