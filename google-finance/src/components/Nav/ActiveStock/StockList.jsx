import React, { useEffect, useState } from 'react';
import { FetchStocks } from '../../Api/FetchData';
import ActiveStock from './ActiveStock';

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchStocks();
      setStocks(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {stocks.map((stock, index) => (
        <ActiveStock key={index} stockName={stock.name} fluctuationRate={stock.fluctuationRate} />
      ))}
    </div>
  );
};

export default StockList;
