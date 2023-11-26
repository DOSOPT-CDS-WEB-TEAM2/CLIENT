import React from 'react';
import styled from 'styled-components';
import NavCategory from './NavCategory';
import NavHr from './NavHr';
import { Link } from 'react-router-dom';
import NavMyItem from './NavMyItem';
import { SIDE_DUMMY } from '../../assets/data';
import ActiveStock from './ActiveStock';
import theme from '../../styles/theme';
import {
  NavSettingIcon,
  NavChatIcon,
  NavDeleteIcon,
  NavMenuBlackIcon,
  LogoImage,
  NavHomeIcon,
  GraphRedImage,
  ArrowUpIcon,
} from '../../assets/index';

const NavBarContent = ({ onClose }) => {
  const ITEMS = ['포트폴리오', '관심종목'];
  const STOCKS = SIDE_DUMMY;

  return (
    <St.Overlay>
      <St.ModalContentContainer>
        <St.NavHeader>
          <St.NavCloseBtn src={NavDeleteIcon} alt="메뉴-닫기-버튼" onClick={onClose} />
          <img src={LogoImage} alt="구글금융-로고" />
        </St.NavHeader>

        <NavCategory icon={NavHomeIcon} text="홈" />
        <Link to="/market">
          <NavCategory icon={NavMenuBlackIcon} text="시장현황" />
        </Link>

        <NavHr marginBottom="2.4rem" />

        {ITEMS.map((item, index) => (
          <NavMyItem key={index} item={item} />
        ))}
        <NavHr marginBottom="1rem" />

        <St.NavApiContainers>
          <St.NavTitle>가장 거래가 활발한 주식</St.NavTitle>
          {STOCKS.map((stock, index) => (
            <ActiveStock key={index} stockName={stock.name} fluctuationRate={stock.fluctuationRate} />
          ))}
        </St.NavApiContainers>

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

  NavApiContainers: styled.div`
    padding: 0 0 1rem 0;
  `,

  NavTitle: styled.span`
    color: ${theme.colors.gray_2};
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
