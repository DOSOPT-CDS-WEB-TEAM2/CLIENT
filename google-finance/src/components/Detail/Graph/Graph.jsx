import React from 'react';
import GraphButton from './GraphButton';
import InfoGraph from './InfoGraph';
import InfoText from './InfoText';
import { GraphImage } from '../../../assets';
import styled from 'styled-components';
import theme from '../../../styles/theme';

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
      <St.NavHr />
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
const St = {
  NavHr: styled.hr`
    position: relative;

    width: 100%;
    margin: 0;

    border: none;
    border-top: 0.05rem solid ${theme.colors.gray_3};
  `,
};

export default Graph;
