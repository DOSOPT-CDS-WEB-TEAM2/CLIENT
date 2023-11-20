import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/img/image_logo.svg';
import { MenuIcon, SearchIcon, SubMenuIcon } from '../../assets/index';

const Header = () => {
  return (
    <NavbarContainer>
      <img src={MenuIcon} alt="구글금융 메뉴" />
      <img src={logoImage} alt="구글금융 로고" />
      <img src={SearchIcon} alt="구글금융 검색" />
      <img src={SubMenuIcon} alt="구글금융 세부메뉴" />
      <NavBarButton type="button">
        <a href="/MainDetail">로그인</a>
      </NavBarButton>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  align-items: flex-end;

  margin: 0 15px 0 15px;
  padding-bottom: 16px;

  height: 90px;

  img:nth-of-type(1) {
    margin-right: 2px;
  }
  img:nth-of-type(2) {
    margin-right: 42px;
  }
  img:nth-of-type(3) {
    margin-right: 8px;
  }
  img:nth-of-type(4) {
    margin-right: 13px;
  }
`;

const NavBarButton = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background: #3478f5;
  a {
    text-decoration: none;
    color: white;
  }
`;

export default Header;
