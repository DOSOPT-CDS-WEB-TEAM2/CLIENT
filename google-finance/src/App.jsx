import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import router from './components/Common/Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
