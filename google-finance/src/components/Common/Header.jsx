import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/img/image_logo.svg';
import { Link } from 'react-router-dom';
import { MenuIcon, SearchIcon, SubMenuIcon } from '../../assets/index';

const Header = () => {
  return (
    <NavbarContainer>
      <img src={MenuIcon} alt="구글금융-메뉴" className="menu-icon" />
      <img src={logoImage} alt="구글금융-로고" className="logo-image" />
      <img src={SearchIcon} alt="구글금융-검색" className="search-icon" />
      <img src={SubMenuIcon} alt="구글금융-세부메뉴" className="submenu-icon" />
      <NavBarButton type="button">
        <Link to="/MainDetail">로그인</Link>
      </NavBarButton>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  align-items: flex-end;

  height: 9rem;
  padding-bottom: 1.6rem;
  margin: 0 1.5rem;

  .menu-icon {
    margin-right: 0.2rem;
    margin-bottom: 0.3rem;
  }
  .logo-image {
    margin-right: 4.2rem;
  }
  .search-icon {
    margin-right: 0.8rem;
    margin-bottom: 0.3rem;
  }
  .submenu-icon {
    margin-right: 1.3rem;
    margin-bottom: 0.3rem;
  }
`;

const NavBarButton = styled.button`
  width: 6rem;
  height: 3rem;

  border: none;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.blue_main};
  font-family: ${(props) => props.theme.fonts.roboto_12};

  a {
    text-decoration: none;
    color: white;
  }
`;

export default Header;
