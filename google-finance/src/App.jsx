import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import router from './components/Common/Router';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
