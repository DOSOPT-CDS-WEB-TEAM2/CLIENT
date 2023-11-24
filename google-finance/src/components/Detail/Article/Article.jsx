import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Price from './Price';

const Article = () => {
  return (
    <>
      <Title />
      <Price />
    </>
  );
};

const St = {
  Container: styled.div`
    display: flex;

    width: 100%;
    height: 4.8rem;
    padding: 0.9rem 1.3rem;
  `,
};

export default Article;
