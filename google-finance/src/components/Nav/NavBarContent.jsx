import React from 'react';
import styled from 'styled-components';

const NavBarContent = ({ onClose }) => {
  return (
    <St.ModalContentContainer>
      <h2>Nav Bar Test Title</h2>
      <span>nav bar Content</span>
      <button onClick={onClose}>Close Modal</button>
    </St.ModalContentContainer>
  );
};

const St = {
  ModalContentContainer: styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    width: 80%;
    max-width: 500px;
  `,
};

export default NavBarContent;
