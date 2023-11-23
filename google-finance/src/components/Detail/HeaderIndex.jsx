import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/img/image_logo.svg';
import { FooterLogoImage, LineImage } from '../../assets/index';

const HeaderIndex = () => {
  return <St.Container>아</St.Container>;
};

const St = {
  Container: styled.div`
    width: 100vw;
    margin: 0;
    border: 1px solid red;
  `,

  FooterHeader: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 1.8rem;
  `,

  FooterSub: styled.span`
    display: flex;
  `,

  FooterText: styled.span`
    color: ${(props) => props.theme.colors.gray_2};
    ${(props) => props.theme.fonts.productsans_10};
  `,
};

export default HeaderIndex;
