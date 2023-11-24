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

  gap: 1.4rem;
  margin-bottom: 3rem;

  ${(props) => props.theme.fonts.roboto_16};
`;

export default NavCategory;
