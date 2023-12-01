import React from 'react';
import styled from 'styled-components';
import { SearchGrayIcon, SearchIcon } from '../../assets';
const Search = () => {
  return (
    <St.SearchContainer>
      <img src={SearchIcon} alt="검색아이콘" />
      <St.SearchInput placeholder="주식, EFT등 검색 ..." />
    </St.SearchContainer>
  );
};

export default Search;

const St = {
  SearchContainer: styled.section`
    display: flex;

    margin: 0.9rem 1.5rem 0.8rem;
    padding: 1.5rem 2rem;

    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray_4};
    ${({ theme }) => theme.fonts.productsans_16_cond};
  `,
  SearchInput: styled.input`
    margin-left: 1rem;

    border: none;
    background-color: inherit;
    ${({ theme }) => theme.fonts.roboto_16};

    outline: none;
  `,
};
