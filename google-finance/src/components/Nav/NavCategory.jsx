import React from 'react';
import styled from 'styled-components';

const NavCategory = ({ icon, text }) => {
  return (
    <StyledSpan>
      <img src={icon} alt={text} />
      {text}
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
  ${(props) => props.theme.fonts.roboto_16};

  img {
    margin-right: 1.4rem;
  }
`;

export default NavCategory;
