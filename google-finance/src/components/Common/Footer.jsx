import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/img/image_logo.svg';
import { FooterLogoImage, LineImage } from '../../assets/index';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <img src={FooterLogoImage} alt="구글금융 메뉴" />
        <span>도움말</span>
        <span>의견 보내기</span>
        <span>개인정보처리방침</span>
      </FooterHeader>
      <FooterSub>
        <FooterText>google.com</FooterText>
        <img src={LineImage} alt="글자 사이 라인" />
        <FooterText>개인정보 보호</FooterText>
      </FooterSub>
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
  height: 11.5rem;
  padding: 0 1.5rem;
  bottom: 0;

  font-family: ${(props) => props.theme.fonts.roboto_12};
  color: ${(props) => props.theme.colors.gray_1};
`;

const FooterText = styled.span`
  font-family: ${(props) => props.theme.fonts.productsans_10};
  color: ${(props) => props.theme.colors.gray_2};
`;

const FooterSub = styled.span`
  display: flex;
`;

const FooterHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 1.8rem;
`;
export default Footer;
