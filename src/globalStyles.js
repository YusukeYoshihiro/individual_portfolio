import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
   *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Encode Sans Expanded', sans-serif;
   }
   html {
    --color-dark: #222629;
    --color-green: #86c232;
    --color-white: #fff;
  }
`;

export default GlobalStyle;
