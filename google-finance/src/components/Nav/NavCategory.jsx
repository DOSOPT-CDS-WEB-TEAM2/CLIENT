import React, { useState } from 'react';
import styled from 'styled-components';

const NavCategory = ({ icon, text, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    if (onClick) {
      onClick(); // Pass the click event up to the parent component if provided
    }
  };

  return (
    <StyledSpan isActive={isActive} onClick={handleClick}>
      <img src={icon} alt={text} />
      {text}
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  width: 19.8rem;
  height: 4.4rem;
  gap: 1.4rem;
  position: relative;
  left: -1.5rem;
  margin-bottom: 2rem;
  border-radius: 0rem 2.2rem 2.2rem 0rem;
  background-color: ${(props) => (props.isActive ? props.theme.colors.blue_background : 'transparent')};
  ${(props) => props.theme.fonts.roboto_16};
  img {
    margin-left: 1.5rem;
  }
`;

export default NavCategory;
