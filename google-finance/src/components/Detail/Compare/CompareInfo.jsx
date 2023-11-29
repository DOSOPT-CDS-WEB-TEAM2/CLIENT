import React, { useState } from 'react';
import CompareGraph from './CompareGraph';
import { useEffect } from 'react';
import axios from 'axios';

const CompareInfo = () => {
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
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/income-statement/051910`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setInOutComeData({
          ...inOutComeData,
          income: response.data.income,
          comparedIncome: response.data.comparedIncome,
          profitMargin: response.data.profitMargin,
          comparedProfitMargin: response.data.comparedProfitMargin,
          operatingExpenses: response.data.operatingExpenses,
          comparedOperatingExpenses: response.data.comparedOperatingExpenses,
          incomePerShare: response.data.incomePerShare,
          comparedIncomePerShare: response.data.comparedIncomePerShare,
          ebitda: response.data.ebitda,
          comparedEbitda: response.data.comparedEbitda,
          effectiveTaxRate: response.data.effectiveTaxRate,
          comparedEffectiveTaxRate: response.data.comparedEffectiveTaxRate,
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

export default CompareInfo;
