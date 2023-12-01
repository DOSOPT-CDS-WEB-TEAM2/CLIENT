import { API } from './Api';

export const FetchCompareData = async () => {
  try {
    const response = await API.get(`/stock`, {
      params: {
        type: 'chemistry',
      },
    });
    return response.data;
  } catch (error) {
    console.error('에러:', error);
    throw error;
  }
};

export const FetchInOutComeData = async () => {
  try {
    const response = await API.get(`/income-statement/051910`);
    return response.data;
  } catch (error) {
    console.error('에러:', error);
    throw error;
  }
};
