import React, { useEffect } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import router from './components/Common/Router';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  function setScreenSize() {
    //vh 화면 비율 적용
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // vw 화면 비율 적용
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  }

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  max-width: var(--app-max-width, 375px);
  min-height: calc(var(--vh, 1vh) * 100);
  margin-right: auto;
  margin-left: auto;

  border: none;
  background-color: white;
`;

export default App;
