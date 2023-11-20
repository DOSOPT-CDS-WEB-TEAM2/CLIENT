import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/img/image_logo.svg';
import { FooterLogoImage } from '../../assets/index';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <img src={FooterLogoImage} alt="구글금융 메뉴" />
        <span>도움말</span>
        <span>의견 보내기</span>
        <span>개인정보처리방침</span>
      </FooterHeader>
      <span>google.com - 개인정보 보호</span>
    </FooterContainer>
  );
};

const FooterContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;

  width: 99%;
  height: 115px;

  padding: 0 15px;
  bottom: 0;
`;

const FooterHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;
export default Footer;
