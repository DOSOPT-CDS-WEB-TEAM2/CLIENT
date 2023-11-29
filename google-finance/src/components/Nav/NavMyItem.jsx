import React from 'react';
import styled from 'styled-components';
import { NavAddIcon } from '../../assets';

const NavMyItem = ({ item }) => (
  <St.NavMy>
    <span>{item}</span>
    <button>
      <img src={NavAddIcon} alt={`${item}-추가버튼`} />
      추가
    </button>
  </St.NavMy>
);

const St = {
  NavMy: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme.colors.gray_1};
      ${(props) => props.theme.fonts.roboto_14};
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.5rem 1rem;
      border: none;
      gap: 0.5rem;

      color: ${(props) => props.theme.colors.blue_main};
      background-color: white;
      ${(props) => props.theme.fonts.roboto_12_bold};
    }
  `,
};

export default NavMyItem;
