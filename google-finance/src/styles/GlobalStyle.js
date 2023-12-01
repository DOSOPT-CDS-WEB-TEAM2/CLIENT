import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
#root, body, html {
    width:100%;
    height: 100vh;
    margin: 0 auto;
    -webkit-tap-highlight-color :rgba(0,0,0,0);
}
html {
    font-size: 62.5%;
}
* {
    box-sizing: border-box;
}`;
