import React from 'react';
import styled from 'styled-components';
import { UpsideDownIcon } from '../../assets';
import { CommonButton, CommonButtonContainer } from '../Common/buttons';

const SubNav = () => {
  const NAV_LIST = ['📊 시장지수', '⬆️ 가장 거래가 활발한 주식', '📈 상승주'];
  return (
    <St.SubNavContainer>
      <St.SearchImg src={UpsideDownIcon} alt="위아래-아이콘" />
      <CommonButtonContainer $isSub={true}>
        {NAV_LIST.map((value, index) => (
          <CommonButton key={index}>
            <span>{value}</span>
          </CommonButton>
        ))}
      </CommonButtonContainer>
    </St.SubNavContainer>
  );
};

export default SubNav;

const St = {
  SubNavContainer: styled.section`
    display: flex;
    flex-direction: row;

    margin: 0.6rem 0 0.8rem 1.6rem;
  `,
  SearchImg: styled.img`
    margin-right: 0.5rem;
  `,
};
