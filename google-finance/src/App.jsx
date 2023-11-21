import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import { St } from './components/Common/buttons';
function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <St.CommonButton>아시아</St.CommonButton>
    </ThemeProvider>
  );
}

export default App;
