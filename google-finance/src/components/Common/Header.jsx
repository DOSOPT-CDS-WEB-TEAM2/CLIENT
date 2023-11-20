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

  margin: 0 1.5rem;
  padding-bottom: 1.6rem;

  height: 9rem;

  img:nth-of-type(1) {
    margin-right: 0.2rem;
    margin-bottom: 0.3rem;
  }
  img:nth-of-type(2) {
    margin-right: 4.2rem;
  }
  img:nth-of-type(3) {
    margin-right: 0.8rem;
    margin-bottom: 0.3rem;
  }
  img:nth-of-type(4) {
    margin-right: 1.3rem;
    margin-bottom: 0.3rem;
  }
`;

const NavBarButton = styled.button`
  width: 6rem;
  height: 3rem;
  border-radius: 0.5rem;

  font-family: ${(props) => props.theme.fonts.roboto_12};
  background: ${(props) => props.theme.colors.blue_main};
  border: none;

  a {
    text-decoration: none;
    color: white;
  }
`;

export default Header;
