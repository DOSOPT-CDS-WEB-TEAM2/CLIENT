import React, { useState } from 'react';
import CompareGraph from './InOutComeGraph';
import { useEffect } from 'react';
import axios from 'axios';
import { FetchInOutComeData } from '../Api/fetchDetailData';
import { API } from '../Api/Api';

const InOutComeInfo = () => {
  const [inOutComeData, setInOutComeData] = useState({
    income: '',
    comparedIncome: 0,
    profitMargin: '',
    comparedProfitMargin: 0,
    operatingExpenses: '',
    comparedOperatingExpenses: 0,
    incomePerShare: '',
    comparedIncomePerShare: 0,
    ebitda: '',
    comparedEbitda: 0,
    effectiveTaxRate: '',
    comparedEffectiveTaxRate: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FetchInOutComeData();
        setInOutComeData({
          ...inOutComeData,
          income: response.income,
          comparedIncome: response.comparedIncome,
          profitMargin: response.profitMargin,
          comparedProfitMargin: response.comparedProfitMargin,
          operatingExpenses: response.operatingExpenses,
          comparedOperatingExpenses: response.comparedOperatingExpenses,
          incomePerShare: response.incomePerShare,
          comparedIncomePerShare: response.comparedIncomePerShare,
          ebitda: response.ebitda,
          comparedEbitda: response.comparedEbitda,
          effectiveTaxRate: response.effectiveTaxRate,
          comparedEffectiveTaxRate: response.comparedEffectiveTaxRate,
        });
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <CompareGraph inOutComeData={inOutComeData} />
    </>
  );
};

export default InOutComeInfo;
