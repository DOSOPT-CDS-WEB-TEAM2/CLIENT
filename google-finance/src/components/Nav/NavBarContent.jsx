import React from 'react';
import styled from 'styled-components';
import NavCategory from './NavCategory';
import { NavDeleteIcon, NavMenuBlackIcon, LogoImage, NavHomeIcon, NavMenuSearchIcon } from '../../assets/index';

const NavBarContent = ({ onClose }) => {
  return (
    <St.Overlay>
      <St.ModalContentContainer>
        {/* 헤더 부분 푸터 부분 구현하고 포폴 관종하고 가장거래 활발 주식까지 */}
        <St.NavHeader>
          <St.NavCloseBtn src={NavDeleteIcon} alt="메뉴-닫기-버튼" onClick={onClose} />
          <img src={LogoImage} alt="구글금융-로고" />
        </St.NavHeader>

        <NavCategory icon={NavHomeIcon} text="홈" />
        <NavCategory icon={NavMenuBlackIcon} text="시장현황" />

        <span>포트폴리오</span>
        <span>+ 추가</span>
        <span>관심종목</span>
        <span>+ 추가</span>
        <h2>Nav Bar Test Title</h2>
        <span>nav bar Content</span>
      </St.ModalContentContainer>
    </St.Overlay>
  );
};

const St = {
  Overlay: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  `,

  NavCloseBtn: styled.img`
    margin-right: 0.8rem;
  `,

  NavHeader: styled.header`
    display: flex;
    align-items: flex-end;
    height: 9rem;
    padding-bottom: 1.6rem;
    margin-bottom: 3.1rem;
  `,

  ModalContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;

    width: 22.5rem;
    height: 100vh;
    bottom: 0;
    left: 0;

    padding: 0 1.5rem;
    background-color: white;
    z-index: 1;
  `,
};

export default NavBarContent;
