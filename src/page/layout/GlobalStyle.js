import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans KR Regular', sans-serif;
  }
`;

export default GlobalStyle;
