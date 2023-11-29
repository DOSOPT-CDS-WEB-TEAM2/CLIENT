import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const SubHeader = ({ title }) => {
  return <St.Container>{title}</St.Container>;
};

const St = {
  Container: styled.div`
    padding-left: 1.5rem;
    color: ${theme.colors.gray_2};
    ${theme.fonts.roboto_14};
  `,
};

export default SubHeader;
