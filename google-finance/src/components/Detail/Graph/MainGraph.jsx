import React from 'react';
import Graph from './Graph';

const MainGraph = ({ stockData }) => {
  return (
    <>
      <Graph
        previousDayIncrease={stockData.previousDayIncrease}
        todayLowestPrice={stockData.todayLowestPrice}
        todayHighestPrice={stockData.todayHighestPrice}
        pastWeekLowestPrice={stockData.pastWeekLowestPrice}
        pastWeekHighestPrice={stockData.pastWeekHighestPrice}
        marketCapitalization={stockData.marketCapitalization}
        averageTrading={stockData.averageTrading}
        stockPriceReturn={stockData.stockPriceReturn}
        dividendYield={stockData.dividendYield}
      />
    </>
  );
};

export default MainGraph;
