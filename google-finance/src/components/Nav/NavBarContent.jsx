import React from 'react';
import styled from 'styled-components';
import NavCategory from './NavCategory';
import NavHr from './NavHr';
import NavMyItem from './NavMyItem';
import {
  NavSettingIcon,
  NavChatIcon,
  NavDeleteIcon,
  NavMenuBlackIcon,
  LogoImage,
  NavHomeIcon,
  NavMenuSearchIcon,
} from '../../assets/index';

const NavBarContent = ({ onClose }) => {
  const navItems = ['포트폴리오', '관심종목'];

  return (
    <St.Overlay>
      <St.ModalContentContainer>
        <St.NavHeader>
          <St.NavCloseBtn src={NavDeleteIcon} alt="메뉴-닫기-버튼" onClick={onClose} />
          <img src={LogoImage} alt="구글금융-로고" />
        </St.NavHeader>

        <NavCategory icon={NavHomeIcon} text="홈" />
        <NavCategory icon={NavMenuBlackIcon} text="시장현황" />
        <NavHr marginBottom="2.4rem" />

        {navItems.map((item, index) => (
          <NavMyItem key={index} item={item} />
        ))}
        <NavHr marginBottom="1rem" />

        <St.NavApi>
          <span>가장 거래가 활발한 주식</span>
        </St.NavApi>
        <NavHr marginBottom="1rem" />

        <NavCategory icon={NavSettingIcon} text="설정" />
        <NavCategory icon={NavChatIcon} text="의견보내기" />
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

  NavApi: styled.div`
    height: 29.6rem;

    span {
      color: ${(props) => props.theme.colors.gray_2};
      ${(props) => props.theme.fonts.roboto_14};
    }
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

    width: 25rem;
    height: 100vh;
    bottom: 0;
    left: 0;

    padding: 0 1.5rem;
    background-color: white;
    z-index: 1;

    span {
      ${(props) => props.theme.fonts.roboto_14};
    }
  `,
};

export default NavBarContent;
