import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavCategory from './NavCategory';
import NavHr from './NavHr';
import { Link } from 'react-router-dom';
import NavMyItem from './NavMyItem';
import ActiveStockContainer from './ActiveStock/ActiveStockContainer';
import theme from '../../styles/theme';
import {
  NavSettingIcon,
  NavChatIcon,
  NavDeleteIcon,
  NavMenuBlackIcon,
  LogoImage,
  NavHomeIcon,
} from '../../assets/index';

const NavBarContent = ({ onClose }) => {
  const ITEMS = ['포트폴리오', '관심종목'];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <St.NavBarContentContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
      <St.NavHeader>
        <St.NavCloseBtn src={NavDeleteIcon} alt="메뉴-닫기-버튼" onClick={handleClose} />
        <img src={LogoImage} alt="구글금융-로고" />
      </St.NavHeader>

      <NavCategory icon={NavHomeIcon} text="홈" />
      <Link to="/market" onClick={handleClose}>
        <NavCategory icon={NavMenuBlackIcon} text="시장현황" />
      </Link>

      <NavHr marginBottom="2.4rem" left="-1.5rem" />

      {ITEMS.map((item, index) => (
        <NavMyItem key={index} item={item} />
      ))}
      <NavHr marginBottom="1rem" left="-1.5rem" />

      <ActiveStockContainer />

      <NavHr marginBottom="1rem" left="-1.5rem" />
      <NavCategory icon={NavSettingIcon} text="설정" />
      <NavCategory icon={NavChatIcon} text="의견보내기" />
    </St.NavBarContentContainer>
  );
};

const St = {
  Overlay: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.7);
  `,

  NavApiContainers: styled.div`
    padding: 0 0 1rem 0;
  `,

  NavTitle: styled.div`
    color: ${theme.colors.gray_2};
    ${theme.fonts.roboto_14};
    margin: 1rem 0;
  `,

  CommonButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.5rem;
    padding: ${({ $hasOneIcon }) => ($hasOneIcon ? '0' : '0.4rem 1rem')};

    border-radius: ${({ $hasOneIcon }) => ($hasOneIcon ? '50%' : '0.5rem')};
    ${theme.fonts.productsans_14_bold};
    background-color: ${theme.colors.red_background};
    color: ${theme.colors.red_main};
    border: none;
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

  NavBarContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;

    width: 25rem;
    height: 100vh;
    bottom: 0;
    left: 0;

    padding: 0 1.5rem;
    background-color: white;
    z-index: 1;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.black};
    }

    span {
      ${(props) => props.theme.fonts.roboto_14};
    }
  `,
};

export default NavBarContent;
